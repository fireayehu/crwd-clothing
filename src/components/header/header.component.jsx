import React from 'react';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom';

const Header = () => (
    <header className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <nav className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop" className="option">CONTACT</Link>
        </nav>
    </header>
);

export default Header;