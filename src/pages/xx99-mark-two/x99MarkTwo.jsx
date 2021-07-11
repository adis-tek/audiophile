import React, { useState, useEffect } from 'react';
import './x99-mark-two.scss';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import MarkII from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import Gallery1 from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import Gallery2 from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import Gallery3 from '../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';
import Suggestion1 from '../../assets//shared/desktop/image-xx99-mark-one-headphones.jpg';
import Suggestion2 from '../../assets//shared/desktop/image-xx59-headphones.jpg';
import Suggestion3 from '../../assets//shared/desktop/image-zx9-speaker.jpg';


function X99MarkTwo() {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [openCart, setOpenCart] = useState(JSON.parse(localStorage.getItem('openCart')) || false);
    const markII = {
        id: cart?.length + 1,
        category: 'HEADPHONES',
        name: 'Mark II',
        cost: 2999.99,
        quantity: {quantity},
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc',
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

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("openCart", JSON.stringify(openCart));
    }, [openCart]);

    const addMarkII = () => {
        setCart([...cart, markII]);
        setOpenCart(true);
        window.location.reload();
    }

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
                <p className="go-back-text">Go Back</p>
            </div>
            <div className="product-row-container-left">
                <img src={MarkII} alt="headphones" className="product-image" />
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
                        <button className="banner-button" onClick={addMarkII}>
                            <p className="subtitle">ADD TO CART</p>
                        </button>
                        </div>
                </div>
            </div>
            <div className="product-description-container">
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
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                    </div>
                    <div className="suggestion">
                        <img src={Suggestion2} alt="XX99 Mark I headphones" className="suggestion-image" />
                        <h3 className="product-title">XX99 MARK I</h3>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                    </div>
                    <div className="suggestion">
                        <img src={Suggestion3} alt="XX99 Mark I headphones" className="suggestion-image" />
                        <h3 className="product-title">XX99 MARK I</h3>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
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
