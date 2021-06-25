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
                <div className="checkout-form-container">
                <h3 className="checkout-header">CHECKOUT</h3>
                <h4 className="checkout-subheader">BILLING DETAILS</h4>
                <form className="billing-details-form">
                <div className="double-input">
                <div className="input-container">
                <label for="name">Name</label>
                <input type="name" name="name" placeholder="Alexei Ward" required></input>
                </div>
                <div className="input-container">
                <label for="email">Email Address</label>
                <input type="email" name="email" placeholder="alexei@mail.com" required></input>
                </div>
                </div>
                <div className="double-input">
                <div className="input-container">
                <label for="phone number">Phone Number</label>
                <input type="tel" name="phone number" placeholder="+1 202-555-0136" required></input>
                </div>
                </div>
                </form>

                <h4 className="checkout-subheader">SHIPPING INFO</h4>
                <form className="address-form">
                <label for="address">Address</label>
                <input type="text" name="address" placeholder="1137 Williams Avenue" required></input>

                <div className="double-input">
                <label for="zip">Zip Code</label>
                <input name="zip" type="text" pattern="[0-9]*" placeholder="10001" required></input>

                <label for="city">City</label>
                <input type="text" name="city" placeholder="New York" required></input>
                </div>

                <div className="double-input">
                <label for="country">Country</label>
                <input type="text" name="country" placeholder="United States" required></input>
                </div>
                </form>
                <h4 className="checkout-subheader">PAYMENT DETAILS</h4>
                <form className="payment-details-form">
                <label for="payment">Payment Method</label>
                <input type="radio" name="payment method"></input>
                <label>e-Money</label>
                <input type="radio" name="payment method"></input>
                <label>Cash on Delivery</label>
                <label for="e-money number">e-Money Number</label>
                <input type="text" name="e-money number" placeholder="238521993"></input>
                <label for="e-money pin">e-Money Pin</label>
                <input type="text" name="e-money pin" placeholder="6891"></input>
                </form>
                </div>
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