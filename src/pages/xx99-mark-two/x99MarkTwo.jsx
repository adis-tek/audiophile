import React, { useState, useEffect } from 'react';
import './x99-mark-two.scss';
import { Link, NavLink } from 'react-router-dom';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import MarkIIDesktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import MarkIITablet from '../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg';
import MarkIIMobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';
// import Gallery1 from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import Gallery1Desktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import Gallery1Mobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg';
import Gallery2Desktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import Gallery2Mobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg';
import Gallery3Desktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';
import Gallery3Mobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg';
import Suggestion1Desktop from '../../assets//shared/desktop/image-xx99-mark-one-headphones.jpg';
import Suggestion1Mobile from '../../assets//shared/mobile/image-xx99-mark-one-headphones.jpg';
import Suggestion2Desktop from '../../assets//shared/desktop/image-xx59-headphones.jpg';
import Suggestion2Mobile from '../../assets//shared/mobile/image-xx59-headphones.jpg';
import Suggestion3Desktop from '../../assets//shared/desktop/image-zx9-speaker.jpg';
import Suggestion3Mobile from '../../assets//shared/mobile/image-zx9-speaker.jpg';


function X99MarkTwo() {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [openCart, setOpenCart] = useState(JSON.parse(localStorage.getItem('openCart')) || false);
    const [cartWindow, setCartWindow] = useState(JSON.parse(localStorage.getItem('cartWindow')) || false);
    const product = {
        id: cart?.length + 1,
        category: 'HEADPHONES',
        name: 'Mark II',
        cost: 2999.99,
        quantity: {quantity},
        image: '/images/cartImages/mark-two.jpg',
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
                <Link to="/headphones">Go Back</Link>
                    </p>
            </div>
            <div className="product-page-row-container-left">
                <img src={MarkIIDesktop} alt="headphones" className="product-image-desktop" />
                <img src={MarkIITablet} alt="headphones" className="product-image-tablet" />
                <img src={MarkIIMobile} alt="headphones" className="product-image-mobile" />
                <div className="text-container">
                <p className="overline">NEW PRODUCT</p>
                        <h2 className="banner-header">XX99 Mark II Headphones</h2>
                        <p className="banner-body">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium 
                        headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                        <h4 className="price">$2,999</h4>
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
                    <p className="body">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior 
                    comfort for those who like to enjoy endless listening. It includes intuitive controls designed 
                    for any situation. Whether you’re taking a business call or just in your own personal space, the 
                    auto on/off and pause features ensure that you’ll never miss a beat.</p>
                    <p className="body">The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio 
                    world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings 
                    when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the 
                    XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                </div>
                <div className="box-container">
                    <div className="box-header-container">
                    <h3 className="box-header">IN THE BOX</h3>
                    </div>
                    <div className="items-container">
                        <div className="pair-container">
                            <h5 className="item-quantity">1x</h5>
                            <p className="item">Headphone unit</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">2x</h5>
                            <p className="item">Replacement earcups</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">1x</h5>
                            <p className="item">User Manual</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">1x</h5>
                            <p className="item">3.5mm 5m Audio Cable</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">1x</h5>
                            <p className="item">Travel Bag</p>
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
                        <h3 className="product-title">ZX9</h3>
                        <NavLink exact activeClassName="active" to="/speakers/zx9">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <ProductTrio />
            <div>
            </div>
            <BestGear />
        </body>
    </div>
</>
    )
}

export default X99MarkTwo;
