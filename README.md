# 🏥 SmartHospital-WebApp

**SmartHospital-WebApp** is a modern web-based Hospital Management System developed using **Node.js**, **Express.js**, **MongoDB**, and frontend logic for doctor login and appointment handling. It includes features like doctor authentication, appointment booking, SMS/email notifications, and a clean UI.

---

## 🚀 Features

- 👨‍⚕️ **Doctor Login** with hardcoded credentials
- 📅 **Appointment Scheduling** with automatic SMS and email confirmation
- 📩 **Nodemailer** integration for email alerts
- 📲 **Twilio API** for SMS notifications
- 🗃️ **MongoDB Database** for user and appointment data storage
- 🔐 **JWT-based Authentication API** (via `/api/auth`)
- 📦 Well-structured backend (`backend/`) and logic (`Structure/`)

---

## 🗂️ Project Structure

SmartHospital-WebApp/
├── backend/
│ └── index.js # Express server setup
├── models/
│ └── User.js # MongoDB user model
├── routes/
│ └── auth.js # Authentication routes
├── Structure/
│ ├── app.js # Appointment + Notification logic
│ ├── docdata.js # Frontend login handler
│ └── DoctorLogin.css # UI styling
├── Images/ # UI screenshots or assets
└── README.md # Project documentation



---

## ⚙️ Tech Stack

- **Frontend**: HTML/CSS/JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Communication APIs**:
  - [Twilio](https://www.twilio.com/) for SMS
  - [Nodemailer](https://nodemailer.com/) for Email

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/SmartHospital-WebApp.git
   cd SmartHospital-WebApp/backend
