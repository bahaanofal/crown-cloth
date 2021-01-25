import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

  unsubscribeFromAuth = null;

	componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
      createUserProfileDocument(user);
    });
	}

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
