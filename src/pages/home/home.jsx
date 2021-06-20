import React from 'react';
import './home.scss';
import RightArrow from '../../assets/shared/desktop/icon-arrow-right.svg';
import HeadPhones from '../../assets/shared/desktop/image-headphones.png';
import Speaker from '../../assets/shared/desktop/image-speakers.png';
import Earphones from '../../assets/shared/desktop/image-earphones.png';
import ZX9 from '../../assets/home/desktop/image-speaker-zx9.png';
import ZX7 from '../../assets/home/desktop/image-speaker-zx7.jpg';
import YX1 from '../../assets/home/desktop/image-earphones-yx1.jpg';
import OrangeLines from '../../assets/home/desktop/pattern-circles.svg';
import Listener from '../../assets/shared/desktop/image-best-gear.jpg';



function home() {
    return (
    <>
        <div className="home-container">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        
        <title>Designo Agency</title>
        </head>
        <div className="home-banner">
                <div className="banner-text-container">
                    <div className="banner-text">
                        <p className="overline">NEW PRODUCT</p>
                        <h1 className="banner-header">XX99 Mark II Headphones</h1>
                        <p className="banner-body">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                    </div>
                </div>
        </div>
            <body className="home-body">
                <div className="product-trio">
                    <div className="product-container">
                        <div className="text-container">
                        <img src={HeadPhones} alt="headphones" className="image" />
                            <h4 className="product-header">HEADPHONES</h4>
                            <p className="shop">SHOP <img src={RightArrow} alt="right-arrow" className="right-arrow" /></p>
                        </div>
                    </div>
                    <div className="product-container">
                        <div className="text-container">
                        <img src={Speaker} alt="headphones" className="image" />
                            <h4 className="product-header">SPEAKERS</h4>
                            <p className="shop">SHOP <img src={RightArrow} alt="right-arrow" className="right-arrow" /></p>
                        </div>
                    </div>
                    <div className="product-container">
                        <div className="text-container">
                        <img src={Earphones} alt="headphones" className="image" />
                            <h4 className="product-header">EARPHONES</h4>
                            <p className="shop">SHOP <img src={RightArrow} alt="right-arrow" className="right-arrow" /></p>
                        </div>
                    </div>
                </div>
                <div className="zx9-speaker-banner">
                    <img src={ZX9} alt="zx9 speaker" className="zx9-image" />
                    <img src={OrangeLines} alt="Orange Lines" className="orange-lines" />
                    <div className="text-container">
                        <h1 className="banner-header">ZX9 speaker</h1>
                        <p className="banner-body">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                    </div>
                </div>
                <div className="zx7-speaker-banner">
                <img src={ZX7} alt="zx7 speaker" className="zx7-image" />
                    <div className="text-container">
                        <h3 className="banner-header">ZX7 speaker</h3>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                    </div>
                </div>
                <div className="yx1-speaker-banner">
                <img src={YX1} alt="yx1 speaker" className="yx1-image" />
                <div className="text-container-background">
                    <div className="text-container">
                        <h3 className="banner-header">YX1 EARPHONES</h3>
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                    </div>
                </div>
                </div>
                <div className="best-gear-container">
                    <div className="text-container">
                    <h2 className="best-gear-heading">Bringing you the <span class="highlight">best</span> audio gear</h2>
                    <p className="best-gear-body">Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                    rooms available for you to browse and experience a wide range of our products. Stop by our store 
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                    audio equipment.</p>
                    </div>
                    <img src={Listener} alt="listener" className="best-gear-image" />
                </div>
            </body>
            </div>
    </>
    )
}

export default home;