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

  // Configure nodemailer (using Gmail as example)
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Email to customer
    const customerEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Booking Confirmation - ${serviceName} Service`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C2734;">Booking Confirmed!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for booking our ${serviceName.toLowerCase()} service. Here are your booking details:</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #577D8E; margin-top: 0;">Booking Details</h3>
            <p><strong>Service:</strong> ${serviceName}</p>
            <p><strong>Date & Time:</strong> ${date} at ${time}</p>
            <p><strong>Duration:</strong> ${duration} hour${duration > 1 ? 's' : ''}</p>
            <p><strong>Total Amount:</strong> ${totalAmount} AED</p>
            <p><strong>Address:</strong> ${address}, ${area}, Dubai</p>
            <p><strong>Service Description:</strong> ${description}</p>
          </div>

          <div style="background: #fff3cd; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <h4 style="color: #856404; margin-top: 0;">Important Information</h4>
            <p>• Our technician will arrive at the scheduled time</p>
            <p>• Please ensure someone is available at the location</p>
            <p>• Payment is due upon completion of service</p>
            <p>• For any changes, please contact us at +971 58 907 1754</p>
          </div>

          <p>We look forward to serving you!</p>
          <p>Best regards,<br>Alpamayo Technical Services Team</p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Phone: +971 58 907 1754<br>
            Email: info@thealpamayo.com<br>
            Address: Al Qouz, Dubai, UAE
          </p>
        </div>
      `,
    };

    // Email to admin
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'info@thealpamayo.com',
      subject: `New Booking: ${serviceName} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C2734;">New Service Booking</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #577D8E; margin-top: 0;">Customer Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}, ${area}, Dubai</p>
          </div>

          <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #577D8E; margin-top: 0;">Service Details</h3>
            <p><strong>Service Type:</strong> ${serviceName} (${serviceType})</p>
            <p><strong>Date & Time:</strong> ${date} at ${time}</p>
            <p><strong>Duration:</strong> ${duration} hour${duration > 1 ? 's' : ''}</p>
            <p><strong>Total Amount:</strong> ${totalAmount} AED</p>
            <p><strong>Description:</strong> ${description}</p>
          </div>

          <p style="color: #666; font-size: 12px;">
            Booking received at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })}
          </p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(customerEmail);
    await transporter.sendMail(adminEmail);

    res.status(200).json({ message: 'Booking confirmed and emails sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send confirmation email' });
  }
}
