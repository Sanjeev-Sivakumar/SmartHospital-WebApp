const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
    { username: 'sam', password: '$2a$10$0Qbls3q.y8E9NfKPfto.Qe5HjEpyHtD3nkt0GecgXAkPb6qjPZlY2', role: 'doctor' }, //1234
    { username: 'sri', password: '$2a$10$0Qbls3q.y8E9NfKPfto.Qe5HjEpyHtD3nkt0GecgXAkPb6qjPZlY2', role: 'doctor' }, //4567
    { username: 'keshav', password: '$2a$10$XYEqFxu8z7mB0qbOC4xiOyyfG5lqxozOSAoCINp1Bpghy7NhHpZq6', role: 'nurse' },  //1234
    { username: 'puveesh', password: '$2a$10$XYEqFxu8z7mB0qbOC4xiOyyfG5lqxozOSAoCINp1Bpghy7NhHpZq6', role: 'nurse' }  //4567
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    
    if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Server error' });
            }
            if (result) {
                res.json({ message: 'Login successful', role: user.role });
            } else {
                res.status(401).json({ message: 'Incorrect password' });
            }
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

const fs = require('fs');
const https = require('https');

const options = {
    key: fs.readFileSync('./certs/private-key.pem'),
    cert: fs.readFileSync('./certs/certificate.pem')
};

https.createServer(options, app).listen(port, () => {
    console.log(`Server running at https://localhost:${3000}`);
});
