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

    // Send confirmation emails with timeout
    try {
      await Promise.race([
        sendConfirmationEmails({
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
        }),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email timeout after 10 seconds')), 10000)
        )
      ]);
      console.log('✅ Emails sent successfully');
    } catch (emailError) {
      console.log('⚠️ Email sending failed, but booking will continue:', emailError.message);
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

// Email configuration
const createTransporter = () => {
  console.log('🔧 Creating email transporter...');
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    },
    // Add timeout settings
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
    
    // Test transporter with timeout
    console.log('🔐 Verifying email transporter...');
    await transporter.verify();
    console.log('✅ Email transporter verified successfully');

    // User confirmation email template
    const userEmailTemplate = createUserEmailTemplate(bookingData);
    // Admin email template
    const adminEmailTemplate = createAdminEmailTemplate(bookingData);

    // Send email to user
    console.log('📧 Sending email to user:', bookingData.email);
    const userEmailResult = await transporter.sendMail({
      from: `"Alpamayo Technical Services" <${process.env.GMAIL_USER}>`,
      to: bookingData.email,
      subject: `Booking Confirmed - ${bookingData.bookingId}`,
      html: userEmailTemplate
    });
    console.log('✅ User email sent:', userEmailResult.messageId);

    // Send email to admin
    const adminEmail = process.env.ADMIN_EMAIL || process.env.GMAIL_USER;
    console.log('📧 Sending email to admin:', adminEmail);
    const adminEmailResult = await transporter.sendMail({
      from: `"Alpamayo Technical Services" <${process.env.GMAIL_USER}>`,
      to: adminEmail,
      subject: `🚨 NEW BOOKING: ${bookingData.serviceName} - ${bookingData.name}`,
      html: adminEmailTemplate
    });
    console.log('✅ Admin email sent:', adminEmailResult.messageId);

    return {
      userEmail: userEmailResult.messageId,
      adminEmail: adminEmailResult.messageId
    };

  } catch (emailError) {
    console.error('❌ Email sending failed:', emailError.message);
    
    // Close transporter if it exists
    if (transporter) {
      transporter.close();
    }
    
    throw emailError;
  }
}

// Separate template functions for better organization
function createUserEmailTemplate(bookingData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #f8f9fa; }
        .header { background: linear-gradient(135deg, #1C2734 0%, #577D8E 100%); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; margin-bottom: 10px; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #1C2734; }
        .total { background: #577D8E; color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 1.2em; font-weight: bold; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 0.9em; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Confirmed!</h1>
          <p>Thank you for choosing Alpamayo Technical Services</p>
        </div>
        <div class="content">
          <p>Dear ${bookingData.name},</p>
          <p>Your booking has been confirmed. Our team will contact you within 30 minutes to finalize the details.</p>
          
          <div class="booking-details">
            <h3>Booking Details</h3>
            <div class="detail-row">
              <span class="detail-label">Booking ID:</span>
              <span>${bookingData.bookingId}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Service:</span>
              <span>${bookingData.serviceName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date & Time:</span>
              <span>${bookingData.date} at ${bookingData.time}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Duration:</span>
              <span>${bookingData.duration} hour${bookingData.duration > 1 ? 's' : ''}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Address:</span>
              <span>${bookingData.address}, ${bookingData.area}, Dubai</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span>${bookingData.phone}</span>
            </div>
          </div>

          <div class="total">
            Total Amount: ${bookingData.totalAmount} AED
          </div>

          <p><strong>Service Description:</strong><br>${bookingData.description}</p>
          
          <p><strong>What's Next?</strong></p>
          <ul>
            <li>Our team will call you within 30 minutes to confirm</li>
            <li>Please keep your phone accessible</li>
            <li>Have any necessary access codes or building permissions ready</li>
          </ul>

          <p>For any questions, please contact us at +971 50 123 4567</p>
        </div>
        <div class="footer">
          <p>Alpamayo Technical Services<br>
          Dubai, United Arab Emirates<br>
          Email: support@alpamayoservices.com | Phone: +971 50 123 4567</p>
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
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #f8f9fa; }
        .header { background: #dc3545; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .booking-details { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .detail-row { display: flex; justify-content: space-between; margin-bottom: 8px; padding: 6px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #1C2734; }
        .urgent { color: #dc3545; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🚨 NEW BOOKING ALERT</h2>
          <p>Immediate Action Required - Contact within 30 minutes</p>
        </div>
        <div class="content">
          <p class="urgent">A new booking has been received and requires confirmation.</p>
          
          <div class="booking-details">
            <h3>Customer Details</h3>
            <div class="detail-row">
              <span class="detail-label">Booking ID:</span>
              <span>${bookingData.bookingId}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Customer:</span>
              <span>${bookingData.name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span>${bookingData.email}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span>${bookingData.phone}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Service:</span>
              <span>${bookingData.serviceName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date & Time:</span>
              <span>${bookingData.date} at ${bookingData.time}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Duration:</span>
              <span>${bookingData.duration} hours</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Total Amount:</span>
              <span>${bookingData.totalAmount} AED</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Address:</span>
              <span>${bookingData.address}, ${bookingData.area}, Dubai</span>
            </div>
          </div>

          <div class="booking-details">
            <h3>Service Description</h3>
            <p>${bookingData.description}</p>
          </div>

          <p><strong>Action Required:</strong></p>
          <ul>
            <li>Contact customer within 30 minutes at <strong>${bookingData.phone}</strong></li>
            <li>Confirm appointment details</li>
            <li>Assign technician</li>
          </ul>

          <p><strong>Booking Received:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
