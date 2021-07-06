import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';
import MarkII from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import ZX9 from '../../assets/category-speakers/desktop/image-zx9.jpg';

function Nav() {
    const [cartWindow, setCartWindow] = useState(false);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([
        {
            category: 'HEADPHONES',
            name: 'Mark II',
            cost: 2999.99,
            quantity: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
        },
        {
            category: "SPEAKERS",
            name: 'ZX9',
            cost: 1299.99,
            quantity: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    },
]);

    {/* Toggle Function */}
    function toggleCart() {
        setCartWindow(!cartWindow);
    }

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    function removeAll() {
        setCart([]);
    }

    const minusQuantity = (product) => {
       
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
                    <img src={Cart} alt="cart" className="cart" onClick={toggleCart} />
                </div>
        </div>
        {cartWindow && ( 
            <>
            <div className="backdrop"></div>
            <div className="cart-window-container">
                <div className="cart-window">
                <div className="header-container">
                <h3 className="cart-header">CART ({products.length})</h3>
                <p className="remove-all" onClick={removeAll}>Remove all</p>
                </div>
                {products.map((product, index) => (
                <div className="product-container" key={index}>
                <img src={product.image} alt="product image" className="product-image" />
                <div className="title-container">
                <h4 className="product-title">{product.name}</h4>
                <h5 className="product-price">{product.cost}</h5>
                </div>
                <div className="counter">
                    <p className="minus" onClick={product.quantity}>-</p>
                    <p className="quantity">{product.quantity}</p>
                    <p className="plus">+</p>
                </div>
            </div>
                ))}
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