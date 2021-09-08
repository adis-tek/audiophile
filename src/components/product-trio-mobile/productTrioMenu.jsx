import React, { useState } from 'react';import './product-trio-menu.scss';
import { Link } from 'react-router-dom';
import HeadPhones from '../../assets/shared/desktop/image-headphones.png';
import Speaker from '../../assets/shared/desktop/image-speakers.png';
import Earphones from '../../assets/shared/desktop/image-earphones.png';
import RightArrow from '../../assets/shared/desktop/icon-arrow-right.svg';

function ProductTrioMenu() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(JSON.parse(localStorage.getItem('MobileMenu')) || true);

    function closeMenuOnLoad() {
        setMobileMenu(false);
    }
    return (
        <>
                <div className="product-trio-mobile">
                    <div className="product-container-mobile"  id="p1-mobile">
                        <div className="text-container-mobile">
                        <img src={HeadPhones} alt="headphones" className="image-mobile" />
                            <h4 className="product-header-mobile">HEADPHONES</h4>
                            <p className="shop-mobile">
                            <Link to="/headphones" onClick={closeMenuOnLoad}> SHOP </Link>
                                 <img src={RightArrow} alt="right-arrow" className="right-arrow-mobile" /></p>
                        </div>
                    </div>
                    <div className="product-container-mobile"  id="p2-mobile">
                        <div className="text-container-mobile">
                        <img src={Speaker} alt="headphones" className="image-mobile" />
                            <h4 className="product-header-mobile">SPEAKERS</h4>
                            <p className="shop-mobile">
                            <Link to="/speakers" onClick={closeMenuOnLoad}> SHOP </Link>
                                 <img src={RightArrow} alt="right-arrow" className="right-arrow-mobile" /></p>
                        </div>
                    </div>
                    <div className="product-container-mobile"  id="p3-mobile">
                        <div className="text-container-mobile">
                        <img src={Earphones} alt="headphones" className="image-mobile" />
                            <h4 className="product-header-mobile">EARPHONES</h4>
                            <p className="shop-mobile">
                            <Link to="/earphones" onClick={closeMenuOnLoad}> SHOP </Link> 
                            <img src={RightArrow} alt="right-arrow" className="right-arrow-mobile" /></p>
                        </div>
                    </div>
                </div>
        </>
    )
}
 
export default ProductTrioMenu
