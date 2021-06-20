import React from 'react';
import './earphones.scss';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import YX1 from '../../assets/product-yx1-earphones/desktop/image-product.jpg';

function earphones() {
    return (
<>
<div className="earphones-container">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
    
    <title>Speakers</title>
    </head>
    <div className="earphones-container-header">
    <div className="earphones-banner">
        <h2 className="banner-header">SPEAKERS</h2>
        </div>
    </div>
        <body className="earphones-body">

            <div className="product-row-container-left">
                <img src={YX1} alt="earphones" className="product-image" />
                <div className="text-container">
                <p className="overline">NEW PRODUCT</p>
                        <h1 className="banner-header">ZX9 Speaker</h1>
                        <p className="banner-body">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
                        system that offers truly wireless connectivity -- creating new possibilities for more 
                        pleasing and practical audio setups.</p>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                </div>
            </div>
            <ProductTrio />
            <BestGear />
        </body>
    </div>
</>
    )
}

export default earphones
