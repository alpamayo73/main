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
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);

    let emailSuccess = false;

    // Try to send emails with Resend using your verified domain
    try {
      await sendResendEmails({
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
      console.log('❌ Resend email sending failed:', emailError.message);
      // Continue with booking even if email fails
    }

    // Success response
    res.status(200).json({ 
      success: true,
      message: emailSuccess 
        ? 'Booking confirmed successfully! Confirmation email has been sent to your email.'
        : 'Booking confirmed successfully! Our team will contact you within 30 minutes.',
      bookingId: bookingId,
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
    // Use your verified domain email address
    const fromEmail = 'info@thealpamayo.com'; // Changed to info@thealpamayo.com
    
    console.log('📧 Sending emails using domain:', fromEmail);

    // Send email to user
    console.log('Sending confirmation email to user:', bookingData.email);
    const userEmailResult = await resend.emails.send({
      from: `Alpamayo Technical Services <${fromEmail}>`,
      to: [bookingData.email],
      subject: `Booking Confirmed - ${bookingData.bookingId}`,
      html: createUserEmailTemplate(bookingData),
      text: createUserTextTemplate(bookingData)
    });

    if (userEmailResult.error) {
      throw new Error(`User email failed: ${userEmailResult.error.message}`);
    }

    console.log('✅ User email sent via Resend:', userEmailResult.data?.id);

    // Send email to admin
    const adminEmail = process.env.ADMIN_EMAIL || 'info@thealpamayo.com';
    console.log('Sending notification email to admin:', adminEmail);
    
    const adminEmailResult = await resend.emails.send({
      from: `Alpamayo Technical Services <${fromEmail}>`,
      to: [adminEmail],
      subject: `🚨 NEW BOOKING: ${bookingData.serviceName} - ${bookingData.name}`,
      html: createAdminEmailTemplate(bookingData),
      text: createAdminTextTemplate(bookingData)
    });

    if (adminEmailResult.error) {
      throw new Error(`Admin email failed: ${adminEmailResult.error.message}`);
    }

    console.log('✅ Admin email sent via Resend:', adminEmailResult.data?.id);

    return true;

  } catch (error) {
    console.error('❌ Resend email error details:', {
      message: error.message,
      error: error
    });
    throw error;
  }
}

// Text templates (keep the same as before)
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

// HTML templates (keep the same as before)
function createUserEmailTemplate(bookingData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; }
        .header { background: #1C2734; color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
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
          <p>Your booking has been successfully confirmed! Our team will contact you within 30 minutes.</p>
          
          <div class="details">
            <h3>📋 Booking Summary</h3>
            <p><strong>Booking ID:</strong> ${bookingData.bookingId}</p>
            <p><strong>Service:</strong> ${bookingData.serviceName}</p>
            <p><strong>Date & Time:</strong> ${bookingData.date} at ${bookingData.time}</p>
            <p><strong>Duration:</strong> ${bookingData.duration} hour${bookingData.duration > 1 ? 's' : ''}</p>
            <p><strong>Total Amount:</strong> ${bookingData.totalAmount} AED</p>
            <p><strong>Address:</strong> ${bookingData.address}, ${bookingData.area}, Dubai</p>
          </div>

          <p><strong>Service Description:</strong><br>${bookingData.description}</p>
          
          <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4>📞 What's Next?</h4>
            <p>Our team will call you at <strong>${bookingData.phone}</strong> within 30 minutes to confirm.</p>
          </div>
        </div>
        <div class="footer">
          <p><strong>Alpamayo Technical Services</strong><br>
          Phone: +971 50 123 4567 | Email: info@thealpamayo.com</p>
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
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background: #fef2f2; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; }
        .header { background: #dc2626; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .urgent { background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0; }
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
            <h3>📞 CONTACT CUSTOMER IMMEDIATELY</h3>
            <p><strong>Customer:</strong> ${bookingData.name}</p>
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
          </div>
          
          <p><strong>Booking ID:</strong> ${bookingData.bookingId}</p>
          <p><strong>Service:</strong> ${bookingData.serviceName}</p>
          <p><strong>Date/Time:</strong> ${bookingData.date} at ${bookingData.time}</p>
          <p><strong>Duration:</strong> ${bookingData.duration} hours</p>
          <p><strong>Total:</strong> ${bookingData.totalAmount} AED</p>
          <p><strong>Address:</strong> ${bookingData.address}, ${bookingData.area}</p>
          <p><strong>Description:</strong> ${bookingData.description}</p>
          
          <p style="color: #dc2626; font-weight: bold;">⏰ Booking received: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
