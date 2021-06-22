import React from 'react';
import './checkout.scss';

function checkout() {
    return (
    <>
    <div className="checkout-container">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
    
    <title>Headphones</title>
    </head>
        <body className="checkout-body"> 
        <div className="checkout">
            <div className="checkout-form">
                <h3 className="checkout-header">CHECKOUT</h3>
                <h4 className="billing-details">BILLING DETAILS</h4>
                <form className="billing-details-form">
                <label for="name">Name</label>
                <input type="name" name="name" placeholder="Alexei Ward" required></input>

                <label for="email">Email Address</label>
                <input type="email" name="email" placeholder="alexei@mail.com" required></input>

                <label for="phone number">Phone Number</label>
                <input type="tel" name="phone number" placeholder="+1 202-555-0136" required></input>
                </form>

                <h4 className="shipping-info">SHIPPING INFO</h4>
                <form className="address-form">
                <label for="name">Name</label>
                <input type="name" name="name" placeholder="Alexei Ward" required></input>

                <label for="email">Email Address</label>
                <input type="email" name="email" placeholder="alexei@mail.com" required></input>

                <label for="phone number">Phone Number</label>
                <input type="tel" name="phone number" placeholder="+1 202-555-0136" required></input>

                <label for="phone number">Phone Number</label>
                <input type="tel" name="phone number" placeholder="+1 202-555-0136" required></input>
                </form>
                <h4 className="payment-details">PAYMENT-DETAILS</h4>
                <form className="payment-details-form">

                </form>
            </div>
            <div className="summary-container">
                <h3 className="summary">SUMMARY</h3>
                <button className="pay-button">
                    <p className="subtitle">CONTINUE & PAY</p>
                </button>
            </div>
        </div>
        </body>
    </div>
    </>
    )
}

export default checkout;