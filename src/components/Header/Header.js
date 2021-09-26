import React from 'react';
import logo from '../../images/logo.png'


import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1>Champions of The Realm</h1>
            <h4>Battle For the Iron Throne</h4>
            <p>Make your Champions Team For the Great Battle.</p>
            <h1>Total Budget : $10,000</h1>

        </div>
    );
};

export default Header;