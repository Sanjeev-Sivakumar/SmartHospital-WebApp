const express = require('express');
const stripe = require('stripe')('your-secret-key-here'); // Replace with your secret key
const app = express();

app.use(express.json());

app.post('/charge', async (req, res) => {
    try {
        const { token, amount } = req.body;

        const charge = await stripe.charges.create({
            amount: amount,
            currency: 'usd',
            description: 'Healthcare Supplies',
            source: token,
        });

        res.json({ success: true, transactionId: charge.id });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
