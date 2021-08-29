import React, { useState, useEffect } from 'react';
import './zx9.scss';
import { Link, NavLink } from 'react-router-dom';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import zx9Desktop from '../../assets/product-zx9-speaker/desktop/image-product.jpg';
import zx9Tablet from '../../assets/product-zx9-speaker/tablet/image-product.jpg';
import zx9Mobile from '../../assets/product-zx9-speaker/mobile/image-product.jpg';
import Gallery1 from '../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg';
import Gallery2 from '../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg';
import Gallery3 from '../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg';
import Suggestion1Desktop from '../../assets//shared/desktop/image-zx7-speaker.jpg';
import Suggestion1Mobile from '../../assets//shared/mobile/image-zx7-speaker.jpg';
import Suggestion2Desktop from '../../assets//shared/desktop/image-xx99-mark-one-headphones.jpg';
import Suggestion2Mobile from '../../assets//shared/mobile/image-xx99-mark-one-headphones.jpg';
import Suggestion3Desktop from '../../assets//shared/desktop/image-xx59-headphones.jpg';
import Suggestion3Mobile from '../../assets//shared/mobile/image-xx59-headphones.jpg';



function ZX9() {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [cartWindow, setCartWindow] = useState(JSON.parse(localStorage.getItem('cartWindow')) || false);
    const product = {
        id: cart?.length + 1,
        category: 'SPEAKER',
        name: 'ZX9',
        cost: 4500,
        quantity: {quantity},
        image: '/images/cartImages/zx9.jpg',
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
                <Link to="/speakers">Go Back</Link>
                    </p>
            </div>
            <div className="product-page-row-container-left">
            <img src={zx9Desktop} alt="headphones" className="product-image-desktop" />
            <img src={zx9Tablet} alt="headphones" className="product-image-tablet" />
            <img src={zx9Mobile} alt="headphones" className="product-image-mobile" />
                <div className="text-container">
                <p className="overline">NEW PRODUCT</p>
                        <h2 className="banner-header">ZX9 SPEAKER</h2>
                        <p className="banner-body">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
                        system that offers truly wireless connectivity -- creating new possibilities for more 
                        pleasing and practical audio setups.</p>
                        <h4 className="price">$4,500</h4>
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
                    <p className="body">Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, 
                    USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices 
                    connected for easy switching. Improved bluetooth technology offers near lossless audio quality at 
                    up to 328ft (100m).</p>
                    <p className="body">Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm 
                    tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass 
                    unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you 
                    will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
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
                            <p className="item">10mm Optical Cable</p>
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
                        <img src={Suggestion1Desktop} alt="ZX7 Speaker" className="suggestion-image-desktop" />
                        <img src={Suggestion1Mobile} alt="ZX7 Speaker" className="suggestion-image-mobile" />
                        <h3 className="product-title">ZX7 SPEAKER</h3>
                        <NavLink exact activeClassName="active" to="/speakers/zx7">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>

                    </div>
                    <div className="suggestion">
                        <img src={Suggestion2Desktop} alt="XX99 Mark I headphones" className="suggestion-image-desktop" />
                        <img src={Suggestion2Mobile} alt="XX99 Mark I headphones" className="suggestion-image-mobile" />
                        <h3 className="product-title">XX99 MARK I</h3>
                        <NavLink exact activeClassName="active" to="/headphones/mark-one">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                    <div className="suggestion">
                    <img src={Suggestion3Desktop} alt="XX59 headphones" className="suggestion-image-desktop" />
                    <img src={Suggestion3Mobile} alt="XX59 headphones" className="suggestion-image-mobile" />
                        <h3 className="product-title">XX59</h3>
                        <NavLink exact activeClassName="active" to="/headphones/xx59">
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

export default ZX9;