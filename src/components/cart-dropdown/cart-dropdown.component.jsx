import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';
import { selectCartItems, selectCartItemsCost } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, itemsCost }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                )
            }
        </div>
        <div className='foot'>
            <span className='total-cost'>Total : ${itemsCost}</span>
            <CustomButton> GO TO CHECKOUT </CustomButton>
        </div>
    </div>
);

const mapStateToProps = state => ({
    cartItems : selectCartItems(state),
    itemsCost : selectCartItemsCost(state)
});

export default connect(mapStateToProps)(CartDropdown);