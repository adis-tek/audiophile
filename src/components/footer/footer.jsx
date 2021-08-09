import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/shared/desktop/logo.svg';
import FaceBook from '../../assets/shared/desktop/icon-facebook.svg';
import Twitter from '../../assets/shared/desktop/icon-twitter.svg';
import Instagram from '../../assets/shared/desktop/icon-instagram.svg';


import './footer.scss';

function footer() {
    return (
<>
    <div className="footer-container">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        </head>
            <div className="footer">
                <div className="orange-line" />
                <div className="center-footer-container">
                    <div className="left-footer">
                        <img src={Logo} alt="logo" className="logo" />
                        <p className="footer-paragraph">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
                        Come and visit our demo facility - we’re open 7 days a week.</p>
                        <p className="footer-sentence">Copyright 2021. All Rights Reserved</p>
                    </div>
                    <div className="right-footer">
                        <div className="links-container">
                        <ul>
                            <NavLink exact activeClassName="active" to="/">
                            <li>HOME</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to="/headphones">
                            <li>HEADPHONES</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to="/speakers">
                            <li>SPEAKERS</li>
                            </NavLink>
                            <NavLink exact activeClassName="active" to="/earphones">
                            <li>EARPHONES</li>
                            </NavLink>
                        </ul>
                        </div>
                        <div className="social-media-container">
                        <img src={FaceBook} alt="facebook logo" className="social" />
                        <img src={Twitter} alt="twitter logo" className="social" />
                        <img src={Instagram} alt="instagram logo" className="social" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-mobile">
                
            </div>
    </div>
</>
    )
}

export default footer;
