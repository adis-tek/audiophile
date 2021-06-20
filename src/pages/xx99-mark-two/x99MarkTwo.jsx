import React from 'react';
import './x99-mark-two.scss';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import MarkII from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';

function x99MarkTwo() {
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
                <img src={MarkII} alt="headphones" className="product-image" />
                <div className="text-container">
                <p className="overline">NEW PRODUCT</p>
                        <h1 className="banner-header">XX99 Mark II Headphones</h1>
                        <p className="banner-body">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium 
                        headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                        <div className="button-container">
                        <button className="quantity-button-container">
                            
                        </button>
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

export default x99MarkTwo
