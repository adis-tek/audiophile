import React from 'react';
import './zx7.scss';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import ZX7 from '../../assets/product-zx7-speaker/desktop/image-product.jpg';
import Gallery1 from '../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
import Gallery2 from '../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg';
import Gallery3 from '../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg';
import Suggestion1 from '../../assets//shared/desktop/image-zx9-speaker.jpg';
import Suggestion2 from '../../assets//shared/desktop/image-xx99-mark-one-headphones.jpg';
import Suggestion3 from '../../assets//shared/desktop/image-xx59-headphones.jpg';



function zx7() {
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
                <img src={ZX7} alt="headphones" className="product-image" />
                <div className="text-container">
                        <h2 className="banner-header">ZX7 SPEAKER</h2>
                        <p className="banner-body">Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end 
                        audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                        <h4 className="price">$3,500</h4>
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
                        <h3 className="product-title">ZX9 SPEAKER</h3>
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

export default zx7;
