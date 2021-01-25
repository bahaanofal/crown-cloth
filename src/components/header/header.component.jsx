import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';

const Header = ({ history, currentUser }) => (
	<div className="header">
		<div className="logo-container" >
			<Logo className="logo" onClick={() => history.push(`/`)} />
		</div>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">CONTACT</Link>
			{
				currentUser ?
					<div className='option' onClick={() => auth.signOut()}>Sign Out</div>
					:
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
			}
		</div>
	</div>
);

export default withRouter(Header);
