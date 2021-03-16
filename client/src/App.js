import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
// import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { selectCurrentUser } from './redux/user/user.selectos';
import Checkout from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

const App = ({ checkUserSession, currentUser }) => {
	useEffect(
		() => {
			checkUserSession();
		},
		[checkUserSession]
	);

	// unsubscribeFromAuth = null;

	// componentDidMount() {
	// 	const { checkUserSession } = this.props;
	// 	checkUserSession();

	// 	// thunk هدول بنستعملهم بال
	// 	// const { setCurrentUser } = this.props;
	// 	// this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
	// 	// 	if (userAuth) {
	// 	// 		const userRef = await createUserProfileDocument(userAuth);

	// 	// 		userRef.onSnapshot((snapShot) => {
	// 	// 			setCurrentUser({
	// 	// 				id: snapShot.id,
	// 	// 				...snapShot.data()
	// 	// 			});
	// 	// 		});
	// 	// 	}

	// 	// 	setCurrentUser(userAuth); // currentUser = null
	// 	// 	// addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
	// 	// 	// collectionsArray هي => selectCollectionsForPreview
	// 	// 	// مسحتها عشان بستعملها مرة وحدة فقط وبتتخزن البيانات في الداتابيز
	// 	// });
	// }

	// componentWillUnmount() {
	// 	this.unsubscribeFromAuth();
	// }

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={Checkout} />
				<Route
					path="/signin"
					render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
				/>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
