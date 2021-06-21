import React from 'react';
import './x99-mark-one.scss';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import MarkI from '../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import Gallery1 from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg';
import Gallery2 from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg';
import Gallery3 from '../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';
import Suggestion1 from '../../assets//shared/desktop/image-xx99-mark-two-headphones.jpg';
import Suggestion2 from '../../assets//shared/desktop/image-xx59-headphones.jpg';
import Suggestion3 from '../../assets//shared/desktop/image-zx9-speaker.jpg';



function XX99MarkOne() {
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

            <div className="product-row-container-left">
                <img src={MarkI} alt="headphones" className="product-image" />
                <div className="text-container">
                        <h2 className="banner-header">XX99 Mark I Headphones</h2>
                        <p className="banner-body">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate 
                        audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios 
                        and on the go.</p>
                        <h4 className="price">$1,750</h4>
                        <div className="button-container">
                            <button className="quantity-button-container">
                                <h4 className="minus">-</h4>
                                <h4 className="quantity">1</h4>
                                <h4 className="plus">+</h4>
                            </button>
                        <button className="banner-button">
                            <p className="subtitle">ADD TO CART</p>
                        </button>
                        </div>
                </div>
            </div>
            <div className="product-description-container">
                <div className="features-container">
                    <h3 className="features-header">FEATURES</h3>
                    <p className="body">As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades 
                    of audio expertise, redefining the critical listening experience. This pair of closed-back headphones 
                    are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.</p>
                    <p className="body">From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, 
                    the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers 
                    up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. 
                    For connectivity, a specially tuned cable is included with a balanced gold connector.</p>
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
                        <img src={Suggestion1} alt="XX99 Mark II headphones" className="suggestion-image" />
                        <h3 className="product-title">XX99 MARK II</h3>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                    </div>
                    <div className="suggestion">
                        <img src={Suggestion2} alt="XX59 headphones" className="suggestion-image" />
                        <h3 className="product-title">XX59</h3>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                    </div>
                    <div className="suggestion">
                        <img src={Suggestion3} alt="ZX9 Speaker" className="suggestion-image" />
                        <h3 className="product-title">ZX9 Speaker</h3>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
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

export default XX99MarkOne;
