import React from 'react';
import banner from '../../media/banner.png'
import css from './Banner.css'
const Banner = () => {
    return (
        <div className="HomePageBanner">
            <div >
                <img className="HomeBanner" src={banner} alt="" />
            </div>
            <div className="BannerHeading">
                <h2>Sports Zone</h2>
            </div>
        </div>
    );
};

export default Banner;