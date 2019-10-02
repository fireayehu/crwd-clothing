import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
);
const mapDispathToProps = dispath =>({
    toggleCartHidden: ()=> dispath(toggleCartHidden())
});
export default connect(null,mapDispathToProps)(CartIcon);