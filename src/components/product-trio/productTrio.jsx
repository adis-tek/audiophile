import React from 'react';
import './product-trio.scss';
import HeadPhones from '../../assets/shared/desktop/image-headphones.png';
import Speaker from '../../assets/shared/desktop/image-speakers.png';
import Earphones from '../../assets/shared/desktop/image-earphones.png';
import RightArrow from '../../assets/shared/desktop/icon-arrow-right.svg';

function productTrio() {
    return (
        <>
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
        </>
    )
}

export default productTrio
