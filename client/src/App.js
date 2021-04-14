import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
// import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { selectCurrentUser } from './redux/user/user.selectos';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const Checkout = lazy(() => import('./pages/checkout/checkout.component'))

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
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path="/" component={HomePage} />
						<Route path="/shop" component={ShopPage} />
						<Route exact path="/checkout" component={Checkout} />
						<Route
							path="/signin"
							render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
						/>
					</Suspense>
				</ErrorBoundary>
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
