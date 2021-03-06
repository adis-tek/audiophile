import React from 'react';
import './speakers.scss';
import { Link, NavLink } from 'react-router-dom';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import ZX9Desktop from '../../assets/product-zx9-speaker/desktop/image-product.jpg';
import ZX9Mobile from '../../assets/product-zx9-speaker/mobile/image-product.jpg';
import ZX7Desktop from '../../assets/product-zx7-speaker/desktop/image-product.jpg';
import ZX7Mobile from '../../assets/product-zx7-speaker/mobile/image-product.jpg';

function speakers() {
    return (
<>
<div className="speakers-container">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
    
    <title>Speakers</title>
    </head>
    <div className="speakers-container-header">
    <div className="speakers-banner">
        <h2 className="banner-header">SPEAKERS</h2>
        </div>
    </div>
        <body className="speakers-body">

            <div className="product-row-container-left">
                <img src={ZX9Desktop} alt="speaker" className="product-image-desktop" />
                <img src={ZX9Mobile} alt="speaker" className="product-image-mobile" />
                <div className="text-container">
                <p className="overline">NEW PRODUCT</p>
                        <h1 className="banner-header">ZX9 Speaker</h1>
                        <p className="banner-body">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
                        system that offers truly wireless connectivity -- creating new possibilities for more 
                        pleasing and practical audio setups.</p>
                        <NavLink exact activeClassName="active" to="/speakers/zx9">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                </div>
            </div>
            <div className="product-row-container-right">
                <img src={ZX7Desktop} alt="headphones" className="product-image-desktop" />
                <img src={ZX7Mobile} alt="headphones" className="product-image-mobile" />
                <div className="text-container">
                        <h1 className="banner-header">ZX7 Speaker</h1>
                        <p className="banner-body">Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses 
                        high-end audiophile components that represents the top of the line powered speakers for 
                        home or studio use.</p>
                        <NavLink exact activeClassName="active" to="/speakers/zx7">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                </div>
            </div>
            <ProductTrio />
            <BestGear />
        </body>
    </div>
</>
    )
}

export default speakers;
