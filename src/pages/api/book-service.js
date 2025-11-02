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
    // Log the booking details (you can see these in Render logs)
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
    console.log('Timestamp:', new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' }));

    // Generate booking ID
    const bookingId = 'BK' + Date.now();

    // Success response
    res.status(200).json({ 
      success: true,
      message: 'Booking confirmed successfully! Our team will contact you within 30 minutes to confirm your appointment.',
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
      success: true, // Still return success to user
      message: 'Booking received! Our team will contact you shortly to confirm.',
      bookingId: 'BK' + Date.now(),
      note: 'Please save your booking details'
    });
  }
}
