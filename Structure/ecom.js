// Initialize Stripe
const stripe = Stripe('your-public-key-here'); // Replace with your actual public key
const elements = stripe.elements();

// Set up Stripe Card Element
const card = elements.create('card');
card.mount('#card-element');

// Handle form submission and payment
document.getElementById('payment-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const {token, error} = await stripe.createToken(card);
    if (error) {
        console.error(error);
        alert('Payment failed');
    } else {
        // Process payment with the token (send to server to charge the card)
        const paymentData = {
            token: token.id,
            amount: 1000, // Example: $10.00 in cents
        };

        // Send token and amount to your server for processing payment
        fetch('/charge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Payment successful');
                generateBarcode(data.transactionId); // Generate barcode after successful payment
            } else {
                alert('Payment failed');
            }
        });
    }
});

// Generate barcode based on transaction ID
function generateBarcode(transactionId) {
    if (transactionId) {
        JsBarcode("#barcode", transactionId, {
            format: "CODE128",
            displayValue: true,
            fontSize: 18
        });
    } else {
        console.error("Transaction ID is missing!");
    }
}

// Add products to cart and calculate total
function addToCart(product, price) {
    let cartItems = document.getElementById('cart-items');
    let total = document.getElementById('cart-total');
    let cartTotal = parseInt(total.textContent);
    
    cartItems.innerHTML += `<p>${product} - $${price}</p>`;
    cartTotal.textContent = cartTotal + price;
}

function proceedToCheckout() {
    document.getElementById('checkout-page').style.display = 'block';
}
