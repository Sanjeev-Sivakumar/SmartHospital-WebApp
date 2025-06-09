// Modified part of app.js to send SMS after appointment is booked
app.post('/schedule-appointment', (req, res) => {
    const { email, phoneNumber, name, appointment } = req.body;

    // Send SMS via Twilio
    client.messages.create({
        body: `Dear ${name}, your appointment has been scheduled for ${appointment}.`,
        to: phoneNumber, // Phone number of the patient
        from: twilioPhoneNumber // Your Twilio phone number
    })
    .then(message => {
        console.log('SMS Sent: ' + message.sid);
        res.send('Appointment scheduled and SMS sent.');
    })
    .catch(error => {
        console.error('Error sending SMS:', error);
        res.status(500).send('Failed to schedule appointment.');
    });

    // Send email via Nodemailer (if required)
    const mailOptions = {
        from: 'manopappu388@gmail.com',
        to: email,
        subject: 'Appointment Confirmation',
        text: `Dear ${name}, your appointment has been scheduled for ${appointment}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});
