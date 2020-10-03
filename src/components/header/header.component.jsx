import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/phillstackLogo.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <div className='option' to='/'>
                About
        </div>
            <div className='option' to='/'>
                Services
        </div>
            <div className='option' to='/'>
                Portfolio
        </div>
            <div className='option' to='/'>
                Contact
        </div>
        </div>
    </div>
);

export default Header;