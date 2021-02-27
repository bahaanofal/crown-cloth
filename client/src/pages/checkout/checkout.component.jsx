import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { selectCartItems, selectCartItemsCost } from "../../redux/cart/cart.selectors";

import './checkout.style.scss';

const Checkout = ({ cartItems, totalCost }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span> Product </span>
            </div>
            <div className='header-block'>
                <span> Descreption </span>
            </div>
            <div className='header-block'>
                <span> Quantity </span>
            </div>
            <div className='header-block'>
                <span> Price </span>
            </div>
            <div className='header-block'>
                <span> Remove </span>
            </div>
        </div>

        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className='total-cost'> Total: ${totalCost} </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments* 
            <br />
            4242 4242 4242 4242 - Exp: 02/21 - CVC: 123
        </div>
        <StripeCheckoutButton price={totalCost} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCost: selectCartItemsCost
})

export default connect(mapStateToProps)(Checkout);