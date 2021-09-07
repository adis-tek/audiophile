import React, { useState, useEffect} from 'react';
import './order-pop-up.scss';
import { NavLink } from 'react-router-dom';
import checkMark from '../../assets/checkout/check-mark.svg';

function OrderPopUp() {
    const [orderPopUpStored, setOrderPopUp] = useState(JSON.parse(localStorage.getItem("order")));
    const [orderCheck, setOrderCheck] = useState(JSON.parse(localStorage.getItem("order")) || []);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [grandTotal, setGrandTotal] = useState(JSON.parse(localStorage.getItem('grandTotal')) || [0]);

    // if (orderPopUpStored !== false) {
    //     setTimeout(() => {
    //         setOrderCheck(true);
    //         console.log('Order Window Opens');
    //     }, 500);
    // } else {
    //     console.log('');
    // }

    setTimeout(() => {
        localStorage.setItem("order", JSON.stringify(false));
    }, 0)


    function toggleOrder() {
        localStorage.setItem("order", JSON.stringify(false));
        window.location.reload();
    }

    return (
<>
{orderCheck === true && (
<>
    <div className="order-backdrop" onClick={toggleOrder} />
    <div className="order-pop-up">
    <div className="order-pop-up-container">
        <img src={checkMark} alt="check mark" className="check-mark" />
        <h2 className="header">THANK YOU FOR YOUR ORDER</h2>
        <p className="sentence">You will recieve an email confirmation shortly.</p>
        <div className="order-details-container">
            <div className="rounded-container">
            <div className="grey-area">
                <div className="grey-area-container">
                    <img src={cart[0].image} alt="product" className="product-image" />
                    <div className="product-details">
                        <h3 className="product-title">{cart[0].name}</h3>
                        <h4 className="product-price">${cart[0].cost}</h4>
                    </div>
                    <div className="mobile-pairing">
                    <img src={cart[0].image} alt="product" className="product-image-mobile" />
                    <div className="product-details-mobile">
                        <h3 className="product-title-mobile">{cart[0].name}</h3>
                        <h4 className="product-price-mobile">${cart[0].cost}</h4>
                    </div>
                    </div>
                    <div className="quantity-container">
                        <h4 className="quantity">x{cart[0].quantity.quantity}</h4>
                    </div>
                </div>
                <div className="other-items-container">
                    <p className="other-items">and {cart.length - 1} other item(s)</p>
                </div>
            </div>
            <div className="black-area">
                <div className="black-area-container">
                    <p className="grand-total-header">GRAND TOTAL</p>
                    <h4 className="grand-total-number">${grandTotal}</h4>
                </div>
            </div>
            </div>
            </div>
            <div className="button-container">
            <NavLink exact activeClassName="active" to="/">
            <button className="home-button">BACK TO HOME</button>
            </NavLink>
            </div>
        </div>
    </div>
</>
)}
</>
)
}

export default OrderPopUp;
