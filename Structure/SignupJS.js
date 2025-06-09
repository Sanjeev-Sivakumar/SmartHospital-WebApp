let sampleDatabase = [
    { name: "Puveesh", email: "puveesh@gmail.com", patientId: "PID-0001", barcode: "PID-00011234567890" },
    { name: "Lokes", email: "lokes@gmail.com", patientId: "PID-0002", barcode: "PID-00021234567890" },
    { name: "Sameeth", email: "sameeth@gmail.com", patientId: "PID-0003", barcode: "PID-00031234567890" }
];

function displayDatabase() {
    const databaseList = document.getElementById('database-list');
    databaseList.innerHTML = '';
    let listItemsHTML = '';
    sampleDatabase.forEach(patient => {
        listItemsHTML += `<li>${patient.name} - Patient ID: ${patient.patientId}</li>`;
    });
    databaseList.innerHTML = listItemsHTML;
}

function handleBarcodeScan(barcode) {
    const patient = sampleDatabase.find(p => p.barcode === barcode);
    if (patient) {
        document.getElementById('patient-name').textContent = patient.name;
        document.getElementById('patient-email').textContent = patient.email;
        document.getElementById('patient-id').textContent = patient.patientId;
        generateBarcode(patient.barcode);
        document.getElementById('patient-details').style.display = 'block';
    } else {
        alert("Patient not found for this barcode!");
    }
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
    const barcodeData = patientId + Date.now();
    const newPatient = {
        name: name,
        email: email,
        patientId: patientId,
        barcode: barcodeData
    };
    sampleDatabase.push(newPatient);
    document.getElementById('patient-name').textContent = name;
    document.getElementById('patient-email').textContent = email;
    document.getElementById('patient-id').textContent = patientId;
    generateBarcode(barcodeData);
    document.getElementById('patient-details').style.display = 'block';
    displayDatabase();
    document.getElementById('signup-form').reset();
});

function generatePatientId() {
    const id = Math.floor(Math.random() * 10000);
    return "PID-" + id.toString().padStart(4, '0');
}

function generateBarcode(barcodeData) {
    JsBarcode("#barcode", barcodeData, {
        format: "CODE128",
        displayValue: true,
        textAlign: "center"
    });
}

window.onload = function() {
    displayDatabase();
};

document.getElementById('barcode-input').addEventListener('input', function(event) {
    const barcode = event.target.value.trim();
    if (barcode) {
        handleBarcodeScan(barcode);
    }
});
