import React from 'react';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <header className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <nav className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/shop" className="option">
                CONTACT
            </Link>
            {
                currentUser?
                    <div className="option" onClick={_=> auth.signOut()}>
                        SIGN OUT
                    </div>
                :
                    <Link to="/signin" className="option">
                        SIGN IN
                    </Link>
            }
        </nav>
    </header>
);

export default Header;