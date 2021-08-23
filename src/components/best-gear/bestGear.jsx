import React from 'react';
import './best-gear.scss';
import ListenerDesktop from '../../assets/shared/desktop/image-best-gear.jpg';
import ListenerTablet from '../../assets/shared/tablet/image-best-gear.jpg';
import ListenerMobile from '../../assets/shared/mobile/image-best-gear.jpg';


function bestGear() {
    return (
    <>
        <div className="best-gear-container">
            <div className="text-container">
            <h2 className="best-gear-heading">Bringing you the <span class="highlight">best</span> audio gear</h2>
            <p className="best-gear-body">Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
            earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
            rooms available for you to browse and experience a wide range of our products. Stop by our store 
            to meet some of the fantastic people who make Audiophile the best place to buy your portable 
            audio equipment.</p>
            </div>
            <img src={ListenerDesktop} alt="listener" className="best-gear-image-desktop" />
            <img src={ListenerTablet} alt="listener" className="best-gear-image-tablet" />
            <img src={ListenerMobile} alt="listener" className="best-gear-image-mobile" />
        </div>
    </>
    )
}

export default bestGear;  