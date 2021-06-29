import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';

function nav() {
    return (
    <>
        <div className="nav-container">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
            </head>
                <div className="nav">
                    <NavLink exact activeClassName="active" to="/">
                    <img src={Logo} alt="audiophile logo" className="logo" />
                    </NavLink>
                    <div className="page-container">
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
                    <img src={Cart} alt="cart" className="cart" />
                </div>
        </div>
    </>
    )
}

export default nav;