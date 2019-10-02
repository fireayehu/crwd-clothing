import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden,itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});
const mapDispathToProps = dispath =>({
    toggleCartHidden: ()=> dispath(toggleCartHidden())
});
export default connect(mapStateToProps, mapDispathToProps)(CartIcon);