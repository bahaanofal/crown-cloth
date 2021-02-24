import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectos';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/contact">CONTACT</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={signOutStart}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
// 	currentUser, // currentUser: state.user.currentUser,
// 	hidden // hidden: state.cart.hidden,
// });

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
