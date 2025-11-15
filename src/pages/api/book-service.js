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

    let emailSuccess = false;
    let emailErrorDetail = '';

    // Try to send emails
    try {
      const emailResult = await sendConfirmationEmails({
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
      
      if (emailResult.success) {
        emailSuccess = true;
        console.log('✅ All emails sent successfully');
      } else {
        emailErrorDetail = emailResult.error;
        console.log('❌ Email sending failed:', emailResult.error);
      }
    } catch (error) {
      emailErrorDetail = error.message;
      console.log('❌ Email error:', error.message);
    }

    // Success response
    res.status(200).json({ 
      success: true,
      message: emailSuccess 
        ? 'Booking confirmed successfully! Confirmation email has been sent to your email.'
        : 'Booking confirmed successfully! Our team will contact you within 30 minutes.',
      bookingId: bookingId,
      emailSent: emailSuccess,
      emailError: emailErrorDetail,
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

async function sendConfirmationEmails(bookingData) {
  try {
    // Test with different from addresses
    const fromEmails = [
      'onboarding@resend.dev',
      'Alpamayo Technical Services <onboarding@resend.dev>',
      'noreply@resend.dev'
    ];

    let lastError = null;

    for (const fromEmail of fromEmails) {
      try {
        console.log(`📧 Trying from email: ${fromEmail}`);
        
        // Send user email
        const userResult = await resend.emails.send({
          from: fromEmail,
          to: [bookingData.email],
          subject: `Booking Confirmed - ${bookingData.bookingId}`,
          html: createSimpleUserEmail(bookingData),
        });

        if (userResult.error) {
          lastError = userResult.error;
          console.log(`❌ Failed with ${fromEmail}:`, userResult.error);
          continue; // Try next from email
        }

        console.log('✅ User email sent successfully');

        // Send admin email
        const adminEmail = process.env.ADMIN_EMAIL || 'info@thealpamayo.com';
        await resend.emails.send({
          from: fromEmail,
          to: [adminEmail],
          subject: `New Booking: ${bookingData.serviceName} - ${bookingData.name}`,
          html: createSimpleAdminEmail(bookingData),
        });

        console.log('✅ Admin email sent successfully');
        return { success: true };

      } catch (error) {
        lastError = error;
        console.log(`❌ Failed with ${fromEmail}:`, error.message);
        // Continue to next from email
      }
    }

    // If all from emails failed
    return { 
      success: false, 
      error: lastError?.message || 'All from email attempts failed' 
    };

  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
}

// Simple email templates
function createSimpleUserEmail(bookingData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1C2734; color: white; padding: 20px; text-align: center;">
        <h1>Booking Confirmed!</h1>
      </div>
      <div style="padding: 20px;">
        <p>Dear ${bookingData.name},</p>
        <p>Your booking has been confirmed with Alpamayo Technical Services.</p>
        
        <div style="background: #f5f5f5; padding: 15px; margin: 15px 0;">
          <h3>Booking Details</h3>
          <p><strong>Booking ID:</strong> ${bookingData.bookingId}</p>
          <p><strong>Service:</strong> ${bookingData.serviceName}</p>
          <p><strong>Date & Time:</strong> ${bookingData.date} at ${bookingData.time}</p>
          <p><strong>Duration:</strong> ${bookingData.duration} hours</p>
          <p><strong>Total:</strong> ${bookingData.totalAmount} AED</p>
          <p><strong>Address:</strong> ${bookingData.address}, ${bookingData.area}</p>
        </div>
        
        <p>Our team will contact you within 30 minutes at ${bookingData.phone}.</p>
        <p>Thank you for choosing Alpamayo Technical Services!</p>
      </div>
    </div>
  `;
}

function createSimpleAdminEmail(bookingData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #dc2626; color: white; padding: 20px; text-align: center;">
        <h2>New Booking Alert</h2>
      </div>
      <div style="padding: 20px;">
        <p><strong>Customer:</strong> ${bookingData.name}</p>
        <p><strong>Phone:</strong> ${bookingData.phone}</p>
        <p><strong>Service:</strong> ${bookingData.serviceName}</p>
        <p><strong>Date/Time:</strong> ${bookingData.date} at ${bookingData.time}</p>
        <p><strong>Total:</strong> ${bookingData.totalAmount} AED</p>
        <p><strong>Description:</strong> ${bookingData.description}</p>
        <p style="color: #dc2626; font-weight: bold;">Contact customer within 30 minutes!</p>
      </div>
    </div>
  `;
}
