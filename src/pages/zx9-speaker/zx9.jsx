import React from 'react';
import './zx9.scss';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import ZX9 from '../../assets/product-zx9-speaker/desktop/image-product.jpg';
import Gallery1 from '../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg';
import Gallery2 from '../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg';
import Gallery3 from '../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg';
import Suggestion1 from '../../assets//shared/desktop/image-zx7-speaker.jpg';
import Suggestion2 from '../../assets//shared/desktop/image-xx99-mark-one-headphones.jpg';
import Suggestion3 from '../../assets//shared/desktop/image-xx59-headphones.jpg';



function zx9() {
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
                <img src={ZX9} alt="headphones" className="product-image" />
                <div className="text-container">
                <p className="overline">NEW PRODUCT</p>
                        <h2 className="banner-header">ZX9 SPEAKER</h2>
                        <p className="banner-body">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
                        system that offers truly wireless connectivity -- creating new possibilities for more 
                        pleasing and practical audio setups.</p>
                        <h4 className="price">$4,500</h4>
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
                        <img src={Suggestion1} alt="XX99 Mark II headphones" className="suggestion-image" />
                        <h3 className="product-title">ZX7 SPEAKER</h3>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                    </div>
                    <div className="suggestion">
                        <img src={Suggestion2} alt="XX59 headphones" className="suggestion-image" />
                        <h3 className="product-title">XX99 MARK I</h3>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                    </div>
                    <div className="suggestion">
                        <img src={Suggestion3} alt="ZX9 Speaker" className="suggestion-image" />
                        <h3 className="product-title">XX59</h3>
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

export default zx9;
