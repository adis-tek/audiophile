import React, { useState, useEffect } from 'react';
import './zx7.scss';
import { Link, NavLink } from 'react-router-dom';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import zx7Desktop from '../../assets/product-zx7-speaker/desktop/image-product.jpg';
import zx7Tablet from '../../assets/product-zx7-speaker/tablet/image-product.jpg';
import zx7Mobile from '../../assets/product-zx7-speaker/mobile/image-product.jpg';
import Gallery1Desktop from '../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
import Gallery1Mobile from '../../assets/product-zx7-speaker/mobile/image-gallery-1.jpg';
import Gallery2Desktop from '../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg';
import Gallery2Mobile from '../../assets/product-zx7-speaker/mobile/image-gallery-2.jpg';
import Gallery3Desktop from '../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg';
import Gallery3Mobile from '../../assets/product-zx7-speaker/mobile/image-gallery-3.jpg';
import Suggestion1Desktop from '../../assets//shared/desktop/image-zx9-speaker.jpg';
import Suggestion1Mobile from '../../assets//shared/mobile/image-zx9-speaker.jpg';
import Suggestion2Desktop from '../../assets//shared/desktop/image-xx99-mark-one-headphones.jpg';
import Suggestion2Mobile from '../../assets//shared/mobile/image-xx99-mark-one-headphones.jpg';
import Suggestion3Desktop from '../../assets//shared/desktop/image-xx59-headphones.jpg';
import Suggestion3Mobile from '../../assets//shared/mobile/image-xx59-headphones.jpg';



function ZX7() {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [cartWindow, setCartWindow] = useState(JSON.parse(localStorage.getItem('cartWindow')) || false);
    const product = {
        id: cart?.length + 1,
        category: 'SPEAKER',
        name: 'ZX7',
        cost: 3500,
        quantity: {quantity},
        image: '/images/cartImages/zx7.jpg',
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
                <Link to="/speakers">Go Back</Link>
                    </p>
            </div>
            <div className="product-page-row-container-left">
            <img src={zx7Desktop} alt="headphones" className="product-image-desktop" />
            <img src={zx7Tablet} alt="headphones" className="product-image-tablet" />
            <img src={zx7Mobile} alt="headphones" className="product-image-mobile" />
                <div className="text-container">
                        <h2 className="banner-header">ZX7 SPEAKER</h2>
                        <p className="banner-body">Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end 
                        audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                        <h4 className="price">$3,500</h4>
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
                    <p className="body">Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and 
                    excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made 
                    from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for 
                    more advanced usage.</p>
                    <p className="body">The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF 
                    wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth 
                    or traditional optical and RCA input. Switch input sources and control volume at your finger tips with 
                    the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.</p>
                </div>
                <div className="box-container">
                    <div className="box-header-container">
                    <h3 className="box-header">IN THE BOX</h3>
                    </div>
                    <div className="items-container">
                        <div className="pair-container">
                            <h5 className="item-quantity">2x</h5>
                            <p className="item">Speaker unit</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">2x</h5>
                            <p className="item">Speaker Cloth Panel</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">1x</h5>
                            <p className="item">User Manual</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">1x</h5>
                            <p className="item">3.5mm 7.5m Audio Cable</p>
                        </div>
                        <div className="pair-container">
                            <h5 className="item-quantity">1x</h5>
                            <p className="item">7.5mm Optical Cable</p>
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
                        <img src={Suggestion1Desktop} alt="ZX9 Speaker" className="suggestion-image-desktop" />
                        <img src={Suggestion1Mobile} alt="ZX9 Speaker" className="suggestion-image-mobile" />
                        <h3 className="product-title">ZX9 SPEAKER</h3>
                        <NavLink exact activeClassName="active" to="/speakers/zx9">
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

export default ZX7;
