import React, { Component } from 'react';
import './checkout.scss';
import cash from '../../assets/checkout/cashOnDelivery.svg';
import Summary from '../../components/summary/summary';

const emailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const formValid = ({ errors, ...rest }) => {
    let valid = true;

    Object.values(errors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

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
            eMoney: true,
            errors: {
                fullName: "",
                email: "",
                phone: "",
                address: "",
                zip: "",
                city: "",
                country: "",
                eMoneyNumber: "",
                eMoneyPin: "",
            }
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        if (formValid(this.state.errors)) {
            console.log(`
            --SUBMITTING--
            Full Name: ${this.state.fullName}
            Email: ${this.state.email}
            `);
        } else {
            console.log("FORM INVALID - ERROR")
        }
    };
    
    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = {...this.state.errors};

        switch (name) {
                case "fullName":
                errors.fullName = 
                    value.trim().length < 5
                    ? "Wrong format" : "";
                    break;
                case "email":
                errors.email =
                    emailRegex.test(value)
                    ? "" : "Wrong format";
                    break;
                case "phone":
                errors.phone = 
                        value.trim().length < 7
                        ? "Wrong format" : "";
                        break;
                case "address":
                errors.address =
                        value.trim().length < 5
                        ? "Wrong format" : "";
                        break;
                case "zip":
                errors.zip = 
                        value.trim().length < 4
                        ? "Wrong format" : "";
                        break;
                case "city":
                errors.city =
                        value.trim().length < 3
                        ? "Wrong format" : "";
                        break;
                case "country":
                errors.country =
                    value.trim().length < 3
                    ? "Wrong format" : "";
                    break;
                case "eMoneyNumber":
                    errors.eMoneyNumber =
                        value.trim().length < 9
                        ? "Wrong format" : "";
                        break;
                case "eMoneyPin":
                    errors.eMoneyPin =
                        value.trim().length < 4
                        ? "Wrong format" : "";
                        break;
                    default:
                    break;
        }

        this.setState({ errors, [name]: value }, () => console.log(this.state));
    };

    eMoneyChange = () => {
        this.setState({
            eMoney: true
        })
    }

    cashChange = () => {
        this.setState({
            eMoney: false
        })
    }

    toggleOrder = () => {
        setOrder(true);
    }
    
    render() {
    const { errors } = this.state;

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
                <div className="label-container">
                <label for="name">Name</label>
                {errors.fullName && (
                <span className='error'>{errors.fullName}</span>
                )}
                </div>
                <input type="name" name="fullName" fullName={this.state.value} onChange={this.handleChange} placeholder="Alexei Ward" noValidate></input>
                </div>
                <div className="input-container">
                <div className="label-container">
                <label for="email">Email Address</label>
                {errors.email && (
                <span className='error'>{errors.email}</span>
                )}
                </div>
                <input type="email" name="email" email={this.state.value} onChange={this.handleChange} placeholder="alexei@mail.com" required></input>
                </div>
                </div>
                <div className="double-input">
                <div className="input-container">
                <div className="label-container">
                <label for="phone number">Phone Number</label>
                {errors.phone && (
                <span className='error'>{errors.phone}</span>
                )}
                </div>
                <input type="tel" name="phone" phone={this.state.value} onChange={this.handleChange} placeholder="+1 202-555-0136" required></input>
                </div>
                </div>
                </form>

                <h4 className="checkout-subheader">SHIPPING INFO</h4>
                <form className="address-form">
                <div className="single-input">
                <div className="input-container">
                <div className="label-container">
                <label for="address">Address</label>
                {errors.address && (
                <span className='error'>{errors.address}</span>
                )}
                </div>
                <input type="text" name="address" autocomplete="home street-address" address={this.state.value} onChange={this.handleChange} placeholder="1137 Williams Avenue" required></input>
                
                </div>
                </div>

                <div className="double-input">
                <div className="input-container">
                <div className="label-container">
                <label for="zip">Zip Code</label>
                {errors.zip && (
                <span className='error'>{errors.zip}</span>
                )}
                </div>
                <input name="zip" type="text" pattern="[0-9]*" autocomplete="home postal-code" zip={this.state.value} onChange={this.handleChange} placeholder="10001" required></input>
                </div>
                <div className="input-container">
                <div className="label-container">
                <label for="city">City</label>
                {errors.city && (
                <span className='error'>{errors.city}</span>
                )}
                </div>
                <input type="text" name="city" autocomplete="home locality" city={this.state.value} onChange={this.handleChange} placeholder="New York" required></input>
                </div>
                </div>

                <div className="double-input">
                <div className="input-container">
                <div className="label-container">
                <label for="country">Country</label>
                {errors.country && (
                <span className='error'>{errors.country}</span>
                )}
                </div>
                <input type="text" name="country" country={this.state.value} onChange={this.handleChange} placeholder="United States" required></input>
                </div>
                </div>
                </form>
                <h4 className="checkout-subheader">PAYMENT DETAILS</h4>
                <form className="payment-details-form">
                <label for="payment" className="payment">Payment Method</label>
                <div className="radio-container">
                <div className="double-checkbox">
                <label className="custom-checkbox" onClick={this.eMoneyChange}>
                <input type="radio" name="payment method"></input>
                <span className="checkmark"></span>
                </label>
                <label>e-Money</label>
                </div>
                <div className="double-checkbox">
                <label className="custom-checkbox" onClick={this.cashChange}>
                <input type="radio" name="payment method"></input>
                <span className="checkmark"></span>
                </label>
                <label>Cash on Delivery</label>
                </div>
                </div>
                <div className="double-input">
                {this.state.eMoney && 
                <>
                <div className="input-container">
                <div className="label-container">
                <label for="e-money number">e-Money Number</label>
                {errors.eMoneyNumber && (
                <span className='error'>{errors.eMoneyNumber}</span>
                )}
                </div>
                <input type="text" name="eMoneyNumber" eMoneyNumber={this.state.value} onChange={this.handleChange} placeholder="238521993"></input>
                </div>
                <div className="input-container">
                <div className="label-container">
                <label for="e-money pin">e-Money Pin</label>
                {errors.eMoneyPin && (
                <span className='error'>{errors.eMoneyPin}</span>
                )}
                </div>
                <input type="text" name="eMoneyPin" eMoneyPin={this.state.value} onChange={this.handleChange} placeholder="6891"></input>
                </div>
                </>
                }
                {!this.state.eMoney && 
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
                <Summary order={toggleOrder} />
                <button className="pay-button">
                    <p className="subtitle" onClick={this.handleSubmit}>CONTINUE & PAY</p>
                </button>
            </div>
            </div>
            </div>
        </body>
    </div>
    </>
    );
}
}

export default Checkout;