import React from 'react';
import './home.scss';
import { NavLink } from 'react-router-dom';
import ProductTrio from '../../components/product-trio/productTrio';
import BestGear from '../../components/best-gear/bestGear';
import RightArrow from '../../assets/shared/desktop/icon-arrow-right.svg';
import HeadPhones from '../../assets/shared/desktop/image-headphones.png';
import Speaker from '../../assets/shared/desktop/image-speakers.png';
import Earphones from '../../assets/shared/desktop/image-earphones.png';
import ZX9 from '../../assets/home/desktop/image-speaker-zx9.png';
import ZX7Desktop from '../../assets/home/desktop/image-speaker-zx7.jpg';
import ZX7Tablet from '../../assets/home/tablet/image-speaker-zx7.jpg';
import ZX7Mobile from '../../assets/home/mobile/image-speaker-zx7.jpg';
import YX1Desktop from '../../assets/home/desktop/image-earphones-yx1.jpg';
import YX1Tablet from '../../assets/home/tablet/image-earphones-yx1.jpg';
import YX1Mobile from '../../assets/home/mobile/image-earphones-yx1.jpg';
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
                        <NavLink exact activeClassName="active" to="/headphones/mark-two">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                </div>
        </div>
            <body className="home-body">
            <ProductTrio />
                <div className="zx9-speaker-banner">
                    <img src={ZX9} alt="zx9 speaker" className="zx9-image" />
                    <img src={OrangeLines} alt="Orange Lines" className="orange-lines" />
                    <div className="text-container">
                        <h1 className="banner-header">ZX9 speaker</h1>
                        <p className="banner-body">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <NavLink exact activeClassName="active" to="/speakers/zx9">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                </div>
                <div className="zx7-speaker-banner">
                <img src={ZX7Desktop} alt="zx7 speaker" className="zx7-image-desktop" />
                <img src={ZX7Tablet} alt="zx7 speaker" className="zx7-image-tablet" />
                <img src={ZX7Mobile} alt="zx7 speaker" className="zx7-image-mobile" />
                    <div className="text-container">
                        <h3 className="banner-header">ZX7 speaker</h3>
                        <NavLink exact activeClassName="active" to="/speakers/zx7">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                </div>
                <div className="yx1-speaker-banner">
                <img src={YX1Desktop} alt="yx1 speaker" className="yx1-image-desktop" />
                <img src={YX1Tablet} alt="yx1 speaker" className="yx1-image-tablet" />
                <img src={YX1Mobile} alt="yx1 speaker" className="yx1-image-mobile" />
                <div className="text-container-background">
                    <div className="text-container">
                        <h3 className="banner-header">YX1 EARPHONES</h3>
                        <NavLink exact activeClassName="active" to="/earphones/yx1">
                        <button className="banner-button">
                            <p className="subtitle">SEE PRODUCT</p>
                        </button>
                        </NavLink>
                    </div>
                </div>
                </div>
                <BestGear />
            </body>
            </div>
    </>
    )
}

export default home;