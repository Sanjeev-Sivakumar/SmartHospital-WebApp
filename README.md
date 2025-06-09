# 🏥 SmartHospital-WebApp

**SmartHospital-WebApp** is a modern web-based Hospital Management System developed using **Node.js**, **Express.js**, **MongoDB**, and frontend logic for doctor login and appointment handling. It includes features like doctor authentication, appointment booking, SMS/email notifications, and a clean UI.

---

## 🚀 Features

- 👨‍⚕️ **Doctor Login** with hardcoded credentials
- 📅 **Appointment Scheduling** with automatic SMS and email confirmation
- 📩 **Nodemailer** integration for email alerts
- 📲 **Twilio API** for SMS notifications
- 🗃️ **MongoDB Database** for user and appointment data storage
- 🔐 **JWT-based Authentication API** (via \`/api/auth\`)
- 📦 Well-structured backend (\`backend/\`) and logic (\`Structure/\`)

---

## 🗂️ Project Structure

\`\`\`
Hackathon 1 (Hospital management system)/
├── backend/
│   └── index.js                 # Express server setup
├── models/
│   └── User.js                  # MongoDB user model
├── routes/
│   └── auth.js                  # Authentication routes
├── Structure/
│   ├── app.js                   # Appointment + Notification logic
│   ├── docdata.js              # Frontend login handler
│   └── DoctorLogin.css          # UI styling
├── Images/                      # UI screenshots or assets
└── README.md                    # Project documentation
\`\`\`

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
   \`\`\`bash
   git clone https://github.com/your-username/$REPO_NAME.git
   cd $REPO_NAME/backend
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up MongoDB**
   Make sure MongoDB is running locally (\`mongodb://localhost:27017/hospital-management\`)

4. **Start the server**
   \`\`\`bash
   node index.js
   \`\`\`

5. **Optional**: Configure environment variables for Twilio and Nodemailer

---

## 🔐 Default Doctor Logins

| Username | Password |
|----------|----------|
| sam      | 1234     |
| sri      | 4567     |

---

## 📸 Screenshots

Include UI images from the \`Images/\` folder for visual reference.

---

## 🧠 Authors

- **Sanjeev Kumar S** – Full Stack Developer
- Additional contributors – *List if available*

---

## 📃 License

This project is for educational and hackathon purposes.
