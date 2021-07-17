import React from 'react';
import './headphones.scss';
import { Link, NavLink } from 'react-router-dom';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import MarkI from '../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import MarkII from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import XX59 from '../../assets/product-xx59-headphones/desktop/image-product.jpg';


function headphones() {
    return (
<>
<div className="headphones-container">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
    
    <title>Headphones</title>
    </head>
    <div className="headphones-container-header">
    <div className="headphones-banner">
        <h2 className="banner-header">HEADPHONES</h2>
        </div>
    </div>
        <body className="headphones-body">

            <div className="product-row-container-left">
                <img src={MarkII} alt="headphones" className="product-image" />
                <div className="text-container">
                <p className="overline">NEW PRODUCT</p>
                        <h1 className="banner-header">XX99 Mark II Headphones</h1>
                        <p className="banner-body">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium 
                        headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                        <NavLink exact activeClassName="active" to="/headphones/mark-two">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                </div>
            </div>
            <div className="product-row-container-right">
                <img src={MarkI} alt="headphones" className="product-image" />
                <div className="text-container">
                        <h1 className="banner-header">XX99 Mark I Headphones</h1>
                        <p className="banner-body">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio 
                        reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                        <NavLink exact activeClassName="active" to="/headphones/mark-one">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                </div>
            </div>
            <div className="product-row-container-left">
                <img src={XX59} alt="headphones" className="product-image" />
                <div className="text-container">
                        <h1 className="banner-header">XX59 Headphones</h1>
                        <p className="banner-body">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. 
                        The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                        <NavLink exact activeClassName="active" to="/headphones/xx59">
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

export default headphones
