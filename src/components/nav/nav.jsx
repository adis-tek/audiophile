import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';
import MarkII from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';

function Nav() {
    const [cartWindow, setCartWindow] = useState(false);

    {/* Toggle Function */}
    function cart() {
        setCartWindow(!cartWindow);
    }
    return (
    <>
        <div className="nav-container">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
            </head>
                <div className="nav">
                    <NavLink exact activeClassName="active" to="/">
                    <img src={Logo} alt="audiophile logo" className="logo" />
                    </NavLink>
                    <div className="page-container">
                        <ul>
                            <NavLink exact activeClassName="active" to="/">
                            <li>HOME</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to="/headphones">
                            <li>HEADPHONES</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to="/speakers">
                            <li>SPEAKERS</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to="/earphones">
                            <li>EARPHONES</li>
                            </NavLink>
                        </ul>
                    </div>
                    <img src={Cart} alt="cart" className="cart" onClick={cart} />
                </div>
        </div>
        {cartWindow && ( 
            <>
            <div className="backdrop"></div>
            <div className="cart-window-container">
                <div className="cart-window">
                <div className="header-container">
                <h3 className="cart-header">CART (1)</h3>
                <p className="remove-all">Remove all</p>
                </div>
                <div className="product-container">
                    <img src={MarkII} alt="product image" className="product-image" />
                    <div className="title-container">
                    <h4 className="product-title">Product Title</h4>
                    <h5 className="product-price">$2,999</h5>
                    </div>
                    <div className="counter">
                        <p className="minus">-</p>
                        <p className="quantity">1</p>
                        <p className="plus">+</p>
                    </div>
                </div>
                <div className="total-container">
                    <p className="total">TOTAL</p>
                    <p className="total-price">$2,999</p>
                </div>
                <button className="checkout-button">
                    <p className="checkout">CHECKOUT</p>
                </button>
                </div>
            </div>
            </>
        )}
    </>
    )
}

export default Nav;