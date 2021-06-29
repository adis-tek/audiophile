import React, {useState} from 'react';
import './checkout.scss';
import cash from '../../assets/checkout/cashOnDelivery.svg';

function Checkout() {
    const [eMoney, setEMoney] = useState(true);
    const [cashOnDelivery, setCashOnDelivery] = useState(false);

    function eMoneyClick() {
        setEMoney(true);
        setCashOnDelivery(false);
    }

    function cashClick() {
        setEMoney(false);
        setCashOnDelivery(true);
    }

    {/* Form Validation */}

    

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
                <div className="single-input">
                <div className="input-container">
                <label for="address">Address</label>
                <input type="text" name="address" placeholder="1137 Williams Avenue" required></input>
                </div>
                </div>

                <div className="double-input">
                <div className="input-container">
                <label for="zip">Zip Code</label>
                <input name="zip" type="text" pattern="[0-9]*" placeholder="10001" required></input>
                </div>
                <div className="input-container">
                <label for="city">City</label>
                <input type="text" name="city" placeholder="New York" required></input>
                </div>
                </div>

                <div className="double-input">
                <div className="input-container">
                <label for="country">Country</label>
                <input type="text" name="country" placeholder="United States" required></input>
                </div>
                </div>
                </form>
                <h4 className="checkout-subheader">PAYMENT DETAILS</h4>
                <form className="payment-details-form">
                <label for="payment" className="payment">Payment Method</label>
                <div className="radio-container">
                <div className="double-checkbox">
                <label className="custom-checkbox" onClick={eMoneyClick}>
                <input type="radio" name="payment method"></input>
                <span className="checkmark"></span>
                </label>
                <label>e-Money</label>
                </div>
                <div className="double-checkbox">
                <label className="custom-checkbox" onClick={cashClick}>
                <input type="radio" name="payment method"></input>
                <span className="checkmark"></span>
                </label>
                <label>Cash on Delivery</label>
                </div>
                </div>
                <div className="double-input">
                {eMoney && 
                <>
                <div className="input-container">
                <label for="e-money number">e-Money Number</label>
                <input type="text" name="e-money number" placeholder="238521993"></input>
                </div>
                <div className="input-container">
                <label for="e-money pin">e-Money Pin</label>
                <input type="text" name="e-money pin" placeholder="6891"></input>
                </div>
                </>
                }
                {!eMoney && 
                <div className="cash-delivery-exclaimer">
                <img src={cash} alt="package delivery" className="cash-image" />
                <p className="cash-explaination">The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives 
                at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
                }
                </div>
                </form>
                </div>
            </div>

             <div className="summary-container">
            <div className="summary">
                <div className="summary-inner-container">
                <h3 className="summary-header">SUMMARY</h3>
                <div className="total-container">
                <p className="total">TOTAL</p>
                <p className="total-variable">500</p>
                </div>
                <div className="total-container">
                <p className="total">SHIPPING</p>
                <p className="total-variable">500</p>
                </div>
                <br></br>
                <div className="total-container">
                <p className="total">GRAND TOTAL</p>
                <p className="final-total-variable">500</p>
                </div>
                <br></br>
                <button className="pay-button">
                    <p className="subtitle">CONTINUE & PAY</p>
                </button>
            </div>
            </div>
            </div>
        </div>
        </body>
    </div>
    </>
    )
}

export default Checkout;