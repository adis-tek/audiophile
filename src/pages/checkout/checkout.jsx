import React, {useState} from 'react';
import './checkout.scss';
import cash from '../../assets/checkout/cashOnDelivery.svg';

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
            phone: null,
            address: null,
            zipCode: null,
            city: null,
            country: null,
            eMoneyNumber: null,
            eMoneyPin: null,
            errors: {
                fullName: "",
                email: "",
                phone: "",
            }
        };
    }
    
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "fullName":
                errors.fullName = 
                    value.length < 5
                    ? "Name must be longer than 5 characters"
                    : "";
                    break;
                case "email":
                    errors.email =
                        validEmailRegex.test(value)
                        ? ""
                        : "Email is not valid";
                        break;
                        case "phone": 
                            errors.phone = 
                            value.length < 7
                            ? "Phone number must contain 7 digits"
                            : "";
                            break;
                            default:
                                break;
        }

        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
    }


    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    eMoneyClick = () => {
        this.eMoney = true;
        this.cashOnDelivery = false;
    }

    cashClick = () => {
        this.eMoney = false;
        this.cashOnDelivery = true;
    }

    
    render() {
    const {errors} = this.state;
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
                <input type="name" name="name" name={this.state.value} onChange={this.handleChange} placeholder="Alexei Ward" noValidate></input>
                {this.state.errors.fullName && 
                <span className='error'>{errors.fullName}</span>
                }
                </div>
                <div className="input-container">
                <label for="email">Email Address</label>
                <input type="email" name="email" email={this.state.value} onChange={this.handleChange} placeholder="alexei@mail.com" required></input>
                </div>
                </div>
                <div className="double-input">
                <div className="input-container">
                <label for="phone number">Phone Number</label>
                <input type="tel" name="phone number" phone={this.state.value} onChange={this.handleChange} placeholder="+1 202-555-0136" required></input>
                </div>
                </div>
                </form>

                <h4 className="checkout-subheader">SHIPPING INFO</h4>
                <form className="address-form">
                <div className="single-input">
                <div className="input-container">
                <label for="address">Address</label>
                <input type="text" name="address" autocomplete="home street-address" value={this.state.value} onChange={this.handleChange} placeholder="1137 Williams Avenue" required></input>
                </div>
                </div>

                <div className="double-input">
                <div className="input-container">
                <label for="zip">Zip Code</label>
                <input name="zip" type="text" pattern="[0-9]*" autocomplete="home postal-code" value={this.state.value} onChange={this.handleChange} placeholder="10001" required></input>
                </div>
                <div className="input-container">
                <label for="city">City</label>
                <input type="text" name="city" autocomplete="home locality" value={this.state.value} onChange={this.handleChange} placeholder="New York" required></input>
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
                <label className="custom-checkbox" onClick={this.eMoneyClick}>
                <input type="radio" name="payment method"></input>
                <span className="checkmark"></span>
                </label>
                <label>e-Money</label>
                </div>
                <div className="double-checkbox">
                <label className="custom-checkbox" onClick={this.cashClick}>
                <input type="radio" name="payment method"></input>
                <span className="checkmark"></span>
                </label>
                <label>Cash on Delivery</label>
                </div>
                </div>
                <div className="double-input">
                {this.eMoney && 
                <>
                <div className="input-container">
                <label for="e-money number">e-Money Number</label>
                <input type="text" name="e-money number" value={this.state.value} onChange={this.handleChange} placeholder="238521993"></input>
                </div>
                <div className="input-container">
                <label for="e-money pin">e-Money Pin</label>
                <input type="text" name="e-money pin" value={this.state.value} onChange={this.handleChange} placeholder="6891"></input>
                </div>
                </>
                }
                {!this.eMoney && 
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
                    <p className="subtitle" onClick={this.handleSubmit}>CONTINUE & PAY</p>
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
}

export default Checkout;