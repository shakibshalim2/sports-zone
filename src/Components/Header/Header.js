import React from 'react';
import css from './Header.css'
const Header = (props) => {
    return (
        <div className='BannerLogoStyle'>

            <img className='Banner' src={props.banner} alt="" />
            <img className='Logo' src={props.logo} alt="" />

        </div >
    );
};

export default Header;