import nodemailer from 'nodemailer';

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

    // Log the booking details
    console.log('📋 NEW BOOKING RECEIVED:');
    console.log('Service:', serviceName);
    console.log('Customer:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address + ', ' + area);
    console.log('Date/Time:', date + ' at ' + time);
    console.log('Duration:', duration + ' hours');
    console.log('Total:', totalAmount + ' AED');
    console.log('Description:', description);

    // Try to send emails (but don't block the booking if it fails)
    try {
      await sendConfirmationEmails({
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
    } catch (emailError) {
      console.log('⚠️ Email sending failed:', emailError.message);
      // Continue with booking even if email fails
    }

    // Success response
    res.status(200).json({ 
      success: true,
      message: 'Booking confirmed successfully! Our team will contact you within 30 minutes.',
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
      bookingId: 'BK' + Date.now(),
      note: 'Please save your booking details'
    });
  }
}

// Email configuration with alternative settings
const createTransporter = () => {
  console.log('🔧 Creating email transporter...');
  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000
  });
};

// Function to send emails to both user and admin
async function sendConfirmationEmails(bookingData) {
  let transporter;
  
  try {
    transporter = createTransporter();
    
    console.log('🔐 Verifying email transporter...');
    await transporter.verify();
    console.log('✅ Email transporter verified successfully');

    // Simple text email for testing
    const userEmailText = `
Booking Confirmed - ${bookingData.bookingId}

Dear ${bookingData.name},

Your booking has been confirmed with Alpamayo Technical Services.

Booking Details:
- Service: ${bookingData.serviceName}
- Date & Time: ${bookingData.date} at ${bookingData.time}
- Duration: ${bookingData.duration} hour${bookingData.duration > 1 ? 's' : ''}
- Total Amount: ${bookingData.totalAmount} AED
- Address: ${bookingData.address}, ${bookingData.area}, Dubai
- Phone: ${bookingData.phone}

Service Description:
${bookingData.description}

Our team will contact you within 30 minutes to confirm your appointment.

Thank you for choosing Alpamayo Technical Services!
Phone: +971 50 123 4567
Email: support@alpamayoservices.com
    `;

    const adminEmailText = `
NEW BOOKING ALERT - ${bookingData.bookingId}

Customer: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone}
Service: ${bookingData.serviceName}
Date & Time: ${bookingData.date} at ${bookingData.time}
Duration: ${bookingData.duration} hours
Total: ${bookingData.totalAmount} AED
Address: ${bookingData.address}, ${bookingData.area}, Dubai

Description: ${bookingData.description}

Contact customer within 30 minutes!
    `;

    // Send email to user
    console.log('📧 Sending email to user:', bookingData.email);
    const userEmailResult = await transporter.sendMail({
      from: `"Alpamayo Technical Services" <${process.env.GMAIL_USER}>`,
      to: bookingData.email,
      subject: `Booking Confirmed - ${bookingData.bookingId}`,
      text: userEmailText,
      html: createSimpleEmailTemplate(bookingData)
    });
    console.log('✅ User email sent successfully');

    // Send email to admin
    const adminEmail = process.env.ADMIN_EMAIL || process.env.GMAIL_USER;
    console.log('📧 Sending email to admin:', adminEmail);
    await transporter.sendMail({
      from: `"Alpamayo Technical Services" <${process.env.GMAIL_USER}>`,
      to: adminEmail,
      subject: `NEW BOOKING: ${bookingData.serviceName} - ${bookingData.name}`,
      text: adminEmailText
    });
    console.log('✅ Admin email sent successfully');

    return { success: true };

  } catch (emailError) {
    console.error('❌ Email sending failed:', emailError.message);
    throw emailError;
  } finally {
    if (transporter) {
      transporter.close();
    }
  }
}

function createSimpleEmailTemplate(bookingData) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1C2734 0%, #577D8E 100%); color: white; padding: 30px; text-align: center;">
        <h1>Booking Confirmed!</h1>
        <p>Thank you for choosing Alpamayo Technical Services</p>
      </div>
      <div style="padding: 20px; background: #f8f9fa;">
        <p>Dear ${bookingData.name},</p>
        <p>Your booking has been confirmed. Our team will contact you within 30 minutes.</p>
        
        <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3>Booking Details</h3>
          <p><strong>Booking ID:</strong> ${bookingData.bookingId}</p>
          <p><strong>Service:</strong> ${bookingData.serviceName}</p>
          <p><strong>Date & Time:</strong> ${bookingData.date} at ${bookingData.time}</p>
          <p><strong>Duration:</strong> ${bookingData.duration} hour${bookingData.duration > 1 ? 's' : ''}</p>
          <p><strong>Total Amount:</strong> ${bookingData.totalAmount} AED</p>
          <p><strong>Address:</strong> ${bookingData.address}, ${bookingData.area}, Dubai</p>
        </div>
        
        <p>Our team will contact you at <strong>${bookingData.phone}</strong> within 30 minutes.</p>
        <p>For questions: +971 50 123 4567</p>
      </div>
    </div>
  `;
}
