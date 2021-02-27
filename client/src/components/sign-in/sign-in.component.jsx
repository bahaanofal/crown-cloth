import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

	const handelSubmit = async (event) => {
		event.preventDefault();

		emailSignInStart(email, password);
	};

	const handelChange = (event) => {
		const { name, value } = event.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handelSubmit}>
				<FormInput
					name="email"
					type="email"
					handelChange={handelChange}
					value={email}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					handelChange={handelChange}
					value={password}
					label="password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit"> Sign in </CustomButton>
					<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
						{' '}
						Sign in With Google{' '}
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
