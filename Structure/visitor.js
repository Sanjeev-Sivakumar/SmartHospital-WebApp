let sampleDatabase = [
    { name: "Puveesh", email: "puveesh@gmail.com", patientId: "PID-0001", appointment: null, barcode: null },
    { name: "Lokes", email: "lokes@gmail.com", patientId: "PID-0002", appointment: null, barcode: null },
    { name: "Sameeth", email: "sameeth@gmail.com", patientId: "PID-0003", appointment: null, barcode: null }
];

function displayDatabase() {
    const databaseList = document.getElementById('database-list');
    databaseList.innerHTML = '';
    let listItemsHTML = '';
    sampleDatabase.forEach(patient => {
        listItemsHTML += `<li>${patient.name} - Patient ID: ${patient.patientId} - Appointment: ${patient.appointment ? patient.appointment : 'Not booked'}</li>`;
    });
    databaseList.innerHTML = listItemsHTML;
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const patientId = generatePatientId();
    const newPatient = {
        name: name,
        email: email,
        patientId: patientId,
        appointment: null,
        barcode: null
    };

    sampleDatabase.push(newPatient);

    document.getElementById('patient-name').textContent = name;
    document.getElementById('patient-email').textContent = email;
    document.getElementById('patient-id').textContent = patientId;
    document.getElementById('patient-details').style.display = 'block';

    displayDatabase();

    document.getElementById('signup-form').reset();
});

document.getElementById('book-appointment').addEventListener('click', function() {
    const patientId = document.getElementById('patient-id').textContent;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    if (!appointmentDate || !appointmentTime) {
        alert("Please select both date and time for the appointment.");
        return;
    }

    const appointment = appointmentDate + ' ' + appointmentTime;
    
    // Update the patient's appointment in the database
    const patient = sampleDatabase.find(p => p.patientId === patientId);
    patient.appointment = appointment;

    const barcodeData = patient.patientId + patient.name + appointment;
    patient.barcode = barcodeData;

    // Display the updated appointment
    document.getElementById('booking-details').textContent = appointment;

    // Generate the barcode
    generateBarcode(barcodeData);

    displayDatabase();

    // Send SMS notification after booking the appointment
    sendAppointmentSMS(patient.email, patient.name, appointment);
});

function generatePatientId() {
    const id = Math.floor(Math.random() * 10000);
    return "PID-" + id.toString().padStart(4, '0');
}

function generateBarcode(barcodeData) {
    JsBarcode("#barcode", barcodeData, {
        format: "CODE128",
        displayValue: true,
        textAlign: "center",
        width: 0.5,
        height: 50,
        margin: 5,
    });
}

function sendAppointmentSMS(email, name, appointment) {
    // Send a POST request to your server to send the SMS via Twilio
    fetch('/schedule-appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            email: email,
            phoneNumber: 'your-twilio-phone-number', // Replace this with actual phone number
            appointment: appointment,
            name: name,
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log("SMS sent successfully:", data);
    })
    .catch(error => {
        console.error("Error sending SMS:", error);
    });
}

window.onload = function() {
    displayDatabase();
};
