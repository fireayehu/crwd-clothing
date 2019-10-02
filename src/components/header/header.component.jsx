import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';


const Header = ({currentUser,hidden}) => (
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
            <CartIcon/>
        </nav>
        {hidden? null : <CartDropdown/>}
    </header>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);