import React, { useState, useEffect } from 'react';
import './yx1.scss';
import { Link, NavLink } from 'react-router-dom';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import yx1 from '../../assets/product-yx1-earphones/desktop/image-product.jpg';
import Gallery1 from '../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import Gallery2 from '../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import Gallery3 from '../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg';
import Suggestion1 from '../../assets//shared/desktop/image-xx99-mark-one-headphones.jpg';
import Suggestion2 from '../../assets//shared/desktop/image-xx59-headphones.jpg';
import Suggestion3 from '../../assets//shared/desktop/image-zx9-speaker.jpg';



function YX1() {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [cartWindow, setCartWindow] = useState(JSON.parse(localStorage.getItem('cartWindow')) || false);
    const product = {
        id: cart?.length + 1,
        category: 'EARPHONES',
        name: 'YX1',
        cost: 599,
        quantity: {quantity},
        image: '/images/cartImages/yx1.jpg',
    };

    const minusQuantity = () => {
        if (quantity === 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1)
        }
    }

    const plusQuantity = () => {
        if (quantity === 9) {
            setQuantity(9);
        } else {
            setQuantity(quantity + 1)
        }
    }

    const addProduct = () => {
        setCart([...cart, product]);
        setCartWindow(true);
        window.location.reload();
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("cartWindow", JSON.stringify(cartWindow));
    }, [cartWindow]);
    return (
<>
<div className="headphones-container">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
    
    <title>Headphones</title>
    </head>
        <body className="headphones-body">
        <div className="go-back-container">
                <p className="go-back-text">
                <Link to="/earphones">Go Back</Link>
                    </p>
            </div>
            <div className="product-row-container-left">
                <img src={yx1} alt="headphones" className="product-image" />
                <div className="text-container">
                <p className="overline">NEW PRODUCT</p>
                        <h2 className="banner-header">YX1 WIRELESS HEADPHONES</h2>
                        <p className="banner-body">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
                        Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                        <h4 className="price">$599</h4>
                        <div className="button-container">
                        <button className="quantity-button-container">
                                <h4 className="minus" onClick={minusQuantity}>-</h4>
                                <h4 className="quantity">{quantity}</h4>
                                <h4 className="plus" onClick={plusQuantity}>+</h4>
                            </button>
                        <button className="banner-button" onClick={addProduct}>
                            <p className="subtitle">ADD TO CART</p>
                        </button>
                        </div>
                </div>
            </div>
            <div className="product-description-container">
                <div className="features-container">
                    <h3 className="features-header">FEATURES</h3>
                    <p className="body">Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics 
                    designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with 
                    the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and 
                    truly immersive sound.</p>
                    <p className="body">The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants 
                    built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, 
                    giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in 
                    an all new white and grey color scheme as well as the popular classic black.</p>
                </div>
                <div className="box-container">
                    <div className="box-header-container">
                    <h3 className="box-header">IN THE BOX</h3>
                    </div>
                    <div className="items-container">
                        <div className="pair-container">
                            <h5 className="item-quantity">2x</h5>
                            <p className="item">Earphone Units</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">6x</h5>
                            <p className="item">Multi-size Earplugs</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">1x</h5>
                            <p className="item">User Manual</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">1x</h5>
                            <p className="item">USB-C Charging Cable</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">1x</h5>
                            <p className="item">Travel Pouch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery-container">
                <div className="double-photos-container">
                <img src={Gallery1} alt="Product Photo" className="double-photo" />
                <img src={Gallery2} alt="Product Photo" className="double-photo" />
                </div>
                <div className="single-photo-container">
                <img src={Gallery3} alt="Product Photo" className="single-photo" />
                </div>
            </div>
            <div className="suggestions-container">
                <h3 className="suggestions-header">YOU MAY ALSO LIKE</h3>
                <div className="suggestions-trio">
                    <div className="suggestion">
                        <img src={Suggestion1} alt="XX99 Mark I headphones" className="suggestion-image" />
                        <h3 className="product-title">XX99 MARK I</h3>
                        <NavLink exact activeClassName="active" to="/headphones/mark-one">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                    <div className="suggestion">
                        <img src={Suggestion2} alt="XX99 Mark I headphones" className="suggestion-image" />
                        <h3 className="product-title">XX59</h3>
                        <NavLink exact activeClassName="active" to="/headphones/xx59">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                    <div className="suggestion">
                        <img src={Suggestion3} alt="XX99 Mark I headphones" className="suggestion-image" />
                        <h3 className="product-title">ZX9 SPEAKER</h3>
                        <NavLink exact activeClassName="active" to="/speakers/zx9">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <ProductTrio />
            <BestGear />
        </body>
    </div>
</>
    )
}

export default YX1;
