import React, { useState, useEffect } from 'react';
import './yx1.scss';
import { Link, NavLink } from 'react-router-dom';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import yx1Desktop from '../../assets/product-yx1-earphones/desktop/image-product.jpg';
import yx1Tablet from '../../assets/product-yx1-earphones/tablet/image-product.jpg';
import yx1Mobile from '../../assets/product-yx1-earphones/mobile/image-product.jpg';
import Gallery1Desktop from '../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import Gallery1Mobile from '../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg';
import Gallery2Desktop from '../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import Gallery2Mobile from '../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg';
import Gallery3Desktop from '../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg';
import Gallery3Mobile from '../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg';
import Suggestion1Desktop from '../../assets//shared/desktop/image-xx99-mark-one-headphones.jpg';
import Suggestion1Mobile from '../../assets//shared/mobile/image-xx99-mark-one-headphones.jpg';
import Suggestion2Desktop from '../../assets//shared/desktop/image-xx59-headphones.jpg';
import Suggestion2Mobile from '../../assets//shared/mobile/image-xx59-headphones.jpg';
import Suggestion3Desktop from '../../assets//shared/desktop/image-zx9-speaker.jpg';
import Suggestion3Mobile from '../../assets//shared/mobile/image-zx9-speaker.jpg';



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
    <div className="black-block" />
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
            <div className="product-page-row-container-left">
            <img src={yx1Desktop} alt="headphones" className="product-image-desktop" />
            <img src={yx1Tablet} alt="headphones" className="product-image-tablet" />
            <img src={yx1Mobile} alt="headphones" className="product-image-mobile" />
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
            <div className="product-page-description-container">
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
                <img src={Gallery1Desktop} alt="Product Photo" className="double-photo-desktop" />
                <img src={Gallery1Mobile} alt="Product Photo" className="double-photo-mobile" />
                <img src={Gallery2Desktop} alt="Product Photo" className="double-photo-desktop" />
                <img src={Gallery2Mobile} alt="Product Photo" className="double-photo-mobile" />
                </div>
                <div className="single-photo-container">
                <img src={Gallery3Desktop} alt="Product Photo" className="single-photo-desktop" /> 
                <img src={Gallery3Mobile} alt="Product Photo" className="single-photo-mobile" /> 
                </div>
            </div>
            <div className="suggestions-container">
                <h3 className="suggestions-header">YOU MAY ALSO LIKE</h3>
                <div className="suggestions-trio">
                    <div className="suggestion">
                        <img src={Suggestion1Desktop} alt="XX99 Mark I headphones" className="suggestion-image-desktop" />
                        <img src={Suggestion1Mobile} alt="XX99 Mark I headphones" className="suggestion-image-mobile" />
                        <h3 className="product-title">XX99 MARK I</h3>
                        <NavLink exact activeClassName="active" to="/headphones/mark-one">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                    <div className="suggestion">
                        <img src={Suggestion2Desktop} alt="XX59 headphones" className="suggestion-image-desktop" />
                        <img src={Suggestion2Mobile} alt="XX59 headphones" className="suggestion-image-mobile" />
                        <h3 className="product-title">XX59</h3>
                        <NavLink exact activeClassName="active" to="/headphones/xx59">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                    <div className="suggestion">
                        <img src={Suggestion3Desktop} alt="ZX9 Speaker" className="suggestion-image-desktop" />
                        <img src={Suggestion3Mobile} alt="ZX9 Speaker" className="suggestion-image-mobile" />
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
