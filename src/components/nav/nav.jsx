import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';
import MarkII from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import ZX9 from '../../assets/category-speakers/desktop/image-zx9.jpg';

function Nav() {
    const [cartWindow, setCartWindow] = useState(JSON.parse(localStorage.getItem('cartWindow')) || false);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [openCart, setOpenCart] = useState(JSON.parse(localStorage.getItem('openCart')) || false);
    const [quantityChanged, setQuantityChanged] = useState(JSON.parse(localStorage.getItem('quantityChanged')) || false);
    const [products] = useState([
        {
        category: 'HEADPHONES',
        name: 'Mark II',
        cost: 2999.99,
        quantity: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
    }
]);
    // const [oldQuantity, setOldQuantity] = useState('');
    // const [quantity, setQuantity] = useState('');
    // const [quantityChecked, setQuantityChecked] = useState(true);
    const [idPlus, setIdPlus] = useState('');
    const [idMinus, setIdMinus] = useState('');
    const [refresh, setRefresh] = useState('');
    const [cartQuantity, setCartQuantity] = useState(0);
    const [quantitySum, setQuantitySum] = useState('');
    const [doubleRunCounter, setDoubleRunCounter] = useState(0);

    setTimeout(() => {
        total();
        // nav();
    }, 200);

    const nav = () => {
        if (JSON.parse(localStorage.getItem('quantityChanged')) === true) {
                setOpenCart(true);
                setQuantityChanged(false);
            } else {
                    console.log('');
        }

        if (JSON.parse(localStorage.getItem('openCart')) === true) {
                setCartWindow(true);
                console.log('Cart Opens');
            } else {
                    console.log('Cart Closed');
            }
    }


    const quantityMinus = (event) => {
        const myCart = JSON.parse(localStorage.cart);
        setQuantityChanged(true);

        for (var i = 0; i < myCart.length; i++) {
            if (idMinus === myCart[i].id && myCart[i].quantity.quantity > 1) {
                myCart[i].quantity.quantity--;
                localStorage.setItem('cart', JSON.stringify(myCart));
                setOpenCart(true);
                setRefresh(true);
                break;
            } else {
                setOpenCart(false);
                console.log("No Id match found");
            }
        }
    }

    const quantityPlus = (event) => {
        const myCart = JSON.parse(localStorage.cart);
        setQuantityChanged(true);

        for (var i = 0; i < myCart.length; i++) {
            if (idPlus === myCart[i].id) {
                myCart[i].quantity.quantity++;
                localStorage.setItem('cart', JSON.stringify(myCart));
                setOpenCart(true);
                setRefresh(true);
                break;
            } else {
                setOpenCart(false);
                console.log("No Id match found");
            }
        }
    }

    const total = () => {
        const myCart = JSON.parse(localStorage.cart);
        let quantitySumCalc = [];

        for (var i = 0; i < myCart.length; i++) {
            quantitySumCalc.push(myCart[i].quantity.quantity * myCart[i].cost);
        }
        setQuantitySum(Number((quantitySumCalc.reduce((a, v) => a = a + v , 0)).toFixed(2)));
    }




    {/* Toggle Function */}
    function toggleCart() {
        if (cartWindow === true) {
            setCartWindow(false)
            setOpenCart(false);
        } else {
            setCartWindow(true)
            setOpenCart(true);
        }
    }

    function removeAll() {
        setCart([]);
        setOpenCart(false);
        window.location.reload();
    }


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("openCart", JSON.stringify(openCart));
    }, [openCart]);

    useEffect(() => {
        localStorage.setItem("quantityChanged", JSON.stringify(quantityChanged));
    }, [quantityChanged]);

    useEffect(() => {
        localStorage.setItem("cartWindow", JSON.stringify(cartWindow));
    }, [cartWindow]);

    useEffect(() => {
        if (refresh === true) {
        setRefresh(false);
        window.location.reload();
        } else {
            console.log('not refreshing');
        }
    }, [refresh]);

    useEffect(() => {
        quantityPlus()
        setIdPlus('');
        if (doubleRunCounter == 2) {
            setOpenCart(true);
        } else if (doubleRunCounter == 0) {
            setDoubleRunCounter(doubleRunCounter + 1);
        } else {
            setDoubleRunCounter(doubleRunCounter + 1);
        }
    }, [idPlus]);

    useEffect(() => {
        quantityMinus()
        setIdMinus('');
        if (doubleRunCounter == 2) {
            setOpenCart(true);
        } else if (doubleRunCounter == 0) {
            setDoubleRunCounter(doubleRunCounter + 1);
        } else {
            setDoubleRunCounter(doubleRunCounter + 1);
        }
    }, [idMinus]);



    console.log(doubleRunCounter + "Double run")

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
                    {cartQuantity > 0 && (
                    <div>
                        <p>{cartQuantity}</p>
                    </div>
                    )}
                    <img src={Cart} alt="cart" className="cart" onClick={toggleCart} />
                </div>
        </div>
        {cartWindow && ( 
            <>
            <div className="backdrop" onClick={toggleCart}></div>
            <div className="cart-window-container">
                <div className="cart-window">
                <div className="header-container">
                <h3 className="cart-header">CART ({cart?.length})</h3>
                <p className="remove-all" onClick={removeAll}>Remove all</p>
                </div>
                {cart.map((product, index) => (
                <div className="product-container" key={index}>
                <img src={product?.image} alt="product image" className="product-image" />
                <div className="title-container">
                <h4 className="product-title">{product.name}</h4>
                <h5 className="product-price">{product.cost}</h5>
                </div>
                <div className="counter">
                    <p className="minus" onClick={() => setIdMinus(product.id)}>-</p>
                    <p className="quantity">{product.quantity.quantity}</p>
                    <p className="plus" onClick={() => setIdPlus(product.id)}>+</p>
                </div>
            </div>
                ))}
                <div className="total-container">
                    <p className="total">TOTAL</p>
                    <p className="total-price">${quantitySum}</p>
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