import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    serviceType,
    serviceName,
    name,
    email,
    phone,
    address,
    area,
    date,
    time,
    duration,
    description,
    totalAmount
  } = req.body;

  try {
    // Generate booking ID
    const bookingId = 'BK' + Date.now();

    console.log('📋 NEW BOOKING RECEIVED:');
    console.log('Service:', serviceName);
    console.log('Customer:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address + ', ' + area);
    console.log('Date/Time:', date + ' at ' + time);
    console.log('Duration:', duration + ' hours');
    console.log('Total:', totalAmount + ' AED');

    let emailSuccess = false;
    let emailDetails = {};

    // Try to send emails with Resend
    try {
      emailDetails = await sendResendEmails({
        bookingId,
        serviceName,
        name,
        email,
        phone,
        address,
        area,
        date,
        time,
        duration,
        description,
        totalAmount
      });
      emailSuccess = true;
      console.log('✅ All emails sent successfully via Resend');
    } catch (emailError) {
      console.log('❌ Email sending failed:', emailError.message);
    }

    // Success response
    res.status(200).json({ 
      success: true,
      message: emailSuccess 
        ? 'Booking confirmed successfully! Confirmation email has been sent to your email.'
        : 'Booking confirmed successfully! Our team will contact you within 30 minutes.',
      bookingId: bookingId,
      emailSent: emailSuccess,
      emailDetails: emailDetails,
      summary: {
        service: serviceName,
        date: date,
        time: time,
        duration: duration + ' hours',
        total: totalAmount + ' AED',
        address: area + ', Dubai'
      }
    });
    
  } catch (error) {
    console.error('❌ Booking error:', error);
    
    res.status(200).json({ 
      success: true,
      message: 'Booking received! Our team will contact you shortly to confirm.',
      bookingId: 'BK' + Date.now()
    });
  }
}

// Resend email configuration
async function sendResendEmails(bookingData) {
  try {
    const fromEmail = 'Alpamayo Technical Services <info@thealpamayo.com>';
    console.log('📧 Sending emails using:', fromEmail);

    const results = {};

    // Send email to user (this is working)
    console.log('Sending confirmation email to user:', bookingData.email);
    const userEmailResult = await resend.emails.send({
      from: fromEmail,
      to: [bookingData.email],
      replyTo: 'info@thealpamayo.com',
      subject: `Booking Confirmed - ${bookingData.bookingId}`,
      html: createUserEmailTemplate(bookingData),
      text: createUserTextTemplate(bookingData),
    });

    if (userEmailResult.error) {
      console.error('❌ User email failed:', userEmailResult.error);
      results.userError = userEmailResult.error.message;
    } else {
      console.log('✅ User email sent via Resend:', userEmailResult.data?.id);
      results.userId = userEmailResult.data?.id;
    }

    // SOLVED: Use different email for admin notifications
    // Don't send from and to the same email address
    const adminEmailsToTry = [
      'alpamayo73@gmail.com', // Your personal email for testing
      process.env.ADMIN_EMAIL, // Any other admin email you set
      'bookings@thealpamayo.com' // Alternative company email
    ].filter(email => email && email !== 'info@thealpamayo.com'); // Don't send to same as from

    console.log('🔄 Trying admin emails:', adminEmailsToTry);

    let adminSuccess = false;
    
    for (const adminEmail of adminEmailsToTry) {
      if (adminSuccess) break;
      
      console.log(`📧 Attempting to send admin email to: ${adminEmail}`);
      
      try {
        const adminEmailResult = await resend.emails.send({
          from: fromEmail,
          to: [adminEmail],
          subject: `[URGENT] New Booking: ${bookingData.serviceName} - ${bookingData.name}`,
          html: createAdminEmailTemplate(bookingData),
          text: createAdminTextTemplate(bookingData),
        });

        if (adminEmailResult.error) {
          console.error(`❌ Admin email to ${adminEmail} failed:`, adminEmailResult.error);
          results[`adminError_${adminEmail}`] = adminEmailResult.error.message;
        } else {
          console.log(`✅ Admin email sent to ${adminEmail}:`, adminEmailResult.data?.id);
          results.adminId = adminEmailResult.data?.id;
          results.successfulAdminEmail = adminEmail;
          adminSuccess = true;
          break;
        }
      } catch (error) {
        console.error(`❌ Admin email to ${adminEmail} error:`, error.message);
        results[`adminError_${adminEmail}`] = error.message;
      }
    }

    // If no admin emails worked, send to a different from address
    if (!adminSuccess) {
      console.log('🔄 Trying alternative approach for admin notification...');
      
      // Try sending from a different "from" address
      try {
        const altAdminResult = await resend.emails.send({
          from: 'Alpamayo Bookings <bookings@thealpamayo.com>',
          to: ['alpamayo73@gmail.com'], // Your personal email
          subject: `[SYSTEM] New Booking Notification - ${bookingData.bookingId}`,
          html: createSimpleAdminTemplate(bookingData),
        });

        if (altAdminResult.error) {
          console.error('❌ Alternative admin email also failed:', altAdminResult.error);
        } else {
          console.log('✅ Alternative admin email sent:', altAdminResult.data?.id);
          adminSuccess = true;
        }
      } catch (error) {
        console.error('❌ Alternative admin email error:', error);
      }
    }

    // Log critical booking info for manual follow-up
    console.log('📋 BOOKING DETAILS FOR MANUAL FOLLOW-UP:');
    console.log('👤 Customer:', bookingData.name);
    console.log('📞 Phone:', bookingData.phone);
    console.log('📧 Email:', bookingData.email);
    console.log('🛠️ Service:', bookingData.serviceName);
    console.log('📅 Date:', bookingData.date, 'at', bookingData.time);
    console.log('💰 Amount:', bookingData.totalAmount, 'AED');
    console.log('📍 Address:', bookingData.address, ',', bookingData.area);

    // If user email failed, throw error
    if (results.userError) {
      throw new Error(`User email failed: ${results.userError}`);
    }

    return results;

  } catch (error) {
    console.error('❌ Resend email error:', error);
    throw error;
  }
}

// Simple admin template for alternative approach
function createSimpleAdminTemplate(bookingData) {
  return `
    <div>
      <h2>New Booking Received</h2>
      <p><strong>Customer:</strong> ${bookingData.name}</p>
      <p><strong>Phone:</strong> ${bookingData.phone}</p>
      <p><strong>Service:</strong> ${bookingData.serviceName}</p>
      <p><strong>Date/Time:</strong> ${bookingData.date} at ${bookingData.time}</p>
      <p><strong>Total:</strong> ${bookingData.totalAmount} AED</p>
      <p><strong>Address:</strong> ${bookingData.address}, ${bookingData.area}</p>
      <p><strong>Description:</strong> ${bookingData.description}</p>
      <p><em>Contact customer within 30 minutes!</em></p>
    </div>
  `;
}

// Text templates
function createUserTextTemplate(bookingData) {
  return `
BOOKING CONFIRMED - ${bookingData.bookingId}

Dear ${bookingData.name},

Your booking has been confirmed with Alpamayo Technical Services!

📋 Booking Details:
• Service: ${bookingData.serviceName}
• Date & Time: ${bookingData.date} at ${bookingData.time}
• Duration: ${bookingData.duration} hour${bookingData.duration > 1 ? 's' : ''}
• Total Amount: ${bookingData.totalAmount} AED
• Address: ${bookingData.address}, ${bookingData.area}, Dubai
• Phone: ${bookingData.phone}

📝 Service Description:
${bookingData.description}

📞 What's Next?
Our team will contact you within 30 minutes to confirm your appointment.

Thank you for choosing Alpamayo Technical Services!
Phone: +971 50 123 4567
Email: info@thealpamayo.com
  `;
}

function createAdminTextTemplate(bookingData) {
  return `
NEW BOOKING ALERT - ${bookingData.bookingId}

🚨 URGENT: Contact customer within 30 minutes!

👤 Customer Details:
• Name: ${bookingData.name}
• Email: ${bookingData.email}
• Phone: ${bookingData.phone} 📞

📋 Service Details:
• Service: ${bookingData.serviceName}
• Date & Time: ${bookingData.date} at ${bookingData.time}
• Duration: ${bookingData.duration} hours
• Total: ${bookingData.totalAmount} AED
• Address: ${bookingData.address}, ${bookingData.area}, Dubai

📝 Description:
${bookingData.description}

⏰ Booking Received: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })}
  `;
}

// HTML templates
function createUserEmailTemplate(bookingData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Booking Confirmation - Alpamayo Technical Services</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; }
        .header { background: #1C2734; color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #577D8E; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; border-top: 1px solid #eee; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Booking Confirmed!</h1>
          <p>Alpamayo Technical Services</p>
        </div>
        <div class="content">
          <p>Dear <strong>${bookingData.name}</strong>,</p>
          <p>Thank you for booking with Alpamayo Technical Services! Your booking has been successfully confirmed.</p>
          
          <div class="details">
            <h3 style="margin-top: 0; color: #1C2734;">📋 Booking Summary</h3>
            <p><strong>Booking ID:</strong> ${bookingData.bookingId}</p>
            <p><strong>Service:</strong> ${bookingData.serviceName}</p>
            <p><strong>Date & Time:</strong> ${bookingData.date} at ${bookingData.time}</p>
            <p><strong>Duration:</strong> ${bookingData.duration} hour${bookingData.duration > 1 ? 's' : ''}</p>
            <p><strong>Total Amount:</strong> ${bookingData.totalAmount} AED</p>
            <p><strong>Address:</strong> ${bookingData.address}, ${bookingData.area}, Dubai</p>
            <p><strong>Contact Phone:</strong> ${bookingData.phone}</p>
          </div>

          <div style="background: #fff3cd; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <strong>Service Description:</strong><br>
            ${bookingData.description}
          </div>
          
          <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0;">📞 What's Next?</h4>
            <p>Our team will contact you at <strong>${bookingData.phone}</strong> within 30 minutes to confirm your appointment.</p>
          </div>
        </div>
        <div class="footer">
          <p><strong>Alpamayo Technical Services</strong><br>
          📞 +971 50 123 4567 | ✉️ info@thealpamayo.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function createAdminEmailTemplate(bookingData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>New Booking Alert - Alpamayo Technical Services</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background: #fef2f2; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; }
        .header { background: #dc2626; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .urgent { background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #d97706; }
        .customer-info { background: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🚨 NEW BOOKING ALERT</h2>
          <p>Action Required Within 30 Minutes</p>
        </div>
        <div class="content">
          <div class="urgent">
            <h3 style="margin-top: 0; color: #92400e;">📞 CONTACT CUSTOMER IMMEDIATELY</h3>
            <p><strong>Customer:</strong> ${bookingData.name}</p>
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
          </div>
          
          <div class="customer-info">
            <h4 style="margin-top: 0;">Booking Details</h4>
            <p><strong>Booking ID:</strong> ${bookingData.bookingId}</p>
            <p><strong>Service:</strong> ${bookingData.serviceName}</p>
            <p><strong>Date/Time:</strong> ${bookingData.date} at ${bookingData.time}</p>
            <p><strong>Duration:</strong> ${bookingData.duration} hours</p>
            <p><strong>Total Amount:</strong> ${bookingData.totalAmount} AED</p>
            <p><strong>Service Location:</strong> ${bookingData.address}, ${bookingData.area}, Dubai</p>
          </div>

          <div style="background: #f3f4f6; padding: 15px; border-radius: 6px;">
            <strong>Service Description:</strong><br>
            ${bookingData.description}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dcfce7; border-radius: 6px;">
            <h4 style="margin-top: 0;">✅ Action Required</h4>
            <ol>
              <li>Contact customer at <strong>${bookingData.phone}</strong> within 30 minutes</li>
              <li>Confirm appointment timing and details</li>
              <li>Assign appropriate technician</li>
            </ol>
          </div>
          
          <p style="color: #dc2626; font-weight: bold; text-align: center;">
            ⏰ Booking received: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })} (Dubai Time)
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
