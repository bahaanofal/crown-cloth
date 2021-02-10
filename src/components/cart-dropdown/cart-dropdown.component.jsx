import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';
import { selectCartItems, selectCartItemsCost } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, itemsCost, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? 
                ( cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)) 
                : 
                ( <span className="empty-message">your cart is empty</span> )
            }
		</div>
		<div className="foot">
			<span className="total-cost">Total : ${itemsCost}</span>
			<CustomButton onClick={
				() => {
					history.push('/checkout');
					dispatch(toggleCartHidden())
				} 
			}> GO TO CHECKOUT </CustomButton>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	itemsCost: selectCartItemsCost
});


export default withRouter(connect(mapStateToProps)(CartDropdown));
