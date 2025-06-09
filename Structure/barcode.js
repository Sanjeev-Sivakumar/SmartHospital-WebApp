function generateBarcode() {
    const barcodeValue = document.getElementById('pname').value;
    if (!barcodeValue) {
        alert("Please enter a name to generate the barcode.");
        return;
    }
    JsBarcode("#barcode", barcodeValue, {
        format: "CODE128",
        width: 2,
        height: 100,
        displayValue: true
    });
}

function generateBarcodeAndPDF() {
    const patientName = document.getElementById('pname').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not specified';
    const phone = document.getElementById('phno').value;
    const address = document.getElementById('address').value;
    const cause = document.getElementById('cause').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const city = document.getElementById('city').value;
    const prescription = document.getElementById('prescription').value;

    if (!patientName || !phone || !address || !appointmentDate || !appointmentTime) {
        alert("Please fill in all the required fields.");
        return;
    }

    html2canvas(document.querySelector("#barcode")).then(function (canvas) {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text('Patient Name: ' + patientName, 10, 10);
        doc.text('Gender: ' + gender, 10, 20);
        doc.text('Phone Number: ' + phone, 10, 30);
        doc.text('Address: ' + address, 10, 40);
        doc.text('Cause: ' + cause, 10, 50);
        doc.text('Appointment Date: ' + appointmentDate, 10, 60);
        doc.text('Appointment Time: ' + appointmentTime, 10, 70);
        doc.text('City: ' + city, 10, 80);
        doc.text('Prescription: ' + prescription, 10, 90);

        doc.addImage(imgData, 'PNG', 10, 100, 180, 50);
        doc.save('patient_info.pdf');
    });
}
