import React, { useState, useEffect } from 'react';
import './xx59.scss';
import { Link, NavLink } from 'react-router-dom';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import xx59Desktop from '../../assets/product-xx59-headphones/desktop/image-product.jpg';
import xx59Tablet from '../../assets/product-xx59-headphones/tablet/image-product.jpg';
import xx59Mobile from '../../assets/product-xx59-headphones/mobile/image-product.jpg';
import Gallery1 from '../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg';
import Gallery2 from '../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg';
import Gallery3 from '../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg';
import Suggestion1Desktop from '../../assets//shared/desktop/image-xx99-mark-two-headphones.jpg';
import Suggestion1Mobile from '../../assets//shared/mobile/image-xx99-mark-two-headphones.jpg';
import Suggestion2Desktop from '../../assets//shared/desktop/image-xx99-mark-one-headphones.jpg';
import Suggestion2Mobile from '../../assets//shared/mobile/image-xx99-mark-one-headphones.jpg';
import Suggestion3Desktop from '../../assets//shared/desktop/image-zx9-speaker.jpg';
import Suggestion3Mobile from '../../assets//shared/mobile/image-zx9-speaker.jpg';



function XX59() {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [cartWindow, setCartWindow] = useState(JSON.parse(localStorage.getItem('cartWindow')) || false);
    const product = {
        id: cart?.length + 1,
        category: 'HEADPHONES',
        name: 'XX59',
        cost: 850,
        quantity: {quantity},
        image: '/images/cartImages/xx59.jpg',
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
            <img src={xx59Desktop} alt="headphones" className="product-image-desktop" />
            <img src={xx59Tablet} alt="headphones" className="product-image-tablet" />
            <img src={xx59Mobile} alt="headphones" className="product-image-mobile" />
                <div className="text-container">
                        <h2 className="banner-header">XX59 Headphones</h2>
                        <p className="banner-body">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. 
                        The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                        <h4 className="price">$899</h4>
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
                    <p className="body">These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact
                    folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the
                    latest wireless technology engineered for audio synchronization with videos.</p>
                    <p className="body">More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free
                    calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access
                    touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an
                    impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
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
                        <img src={Suggestion1Desktop} alt="XX99 Mark II headphones" className="suggestion-image-desktop" />
                        <img src={Suggestion1Mobile} alt="XX99 Mark II headphones" className="suggestion-image-mobile" />
                        <h3 className="product-title">XX99 MARK II</h3>
                        <NavLink exact activeClassName="active" to="/headphones/mark-two">
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

export default XX59;
