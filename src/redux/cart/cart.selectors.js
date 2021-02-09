import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (acumalatedQuantity, cartItem) => 
            acumalatedQuantity + cartItem.quantity 
        , 0)
);

export const selectCartItemsCost = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (acumalatedPrice, cartItem) => 
            acumalatedPrice + (cartItem.price * cartItem.quantity) 
        , 0)
);