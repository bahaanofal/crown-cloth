import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.style.scss';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
	const [ userCredentials, setUserCredentials ] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	const { displayName, email, password, confirmPassword } = userCredentials;

	const handelSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		signUpStart({ displayName, email, password });
	};

	const handelChange = (event) => {
		const { name, value } = event.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handelSubmit}>
				<FormInput
					name="displayName"
					type="name"
					onChange={handelChange}
					value={displayName}
					label="Display Name"
					required
				/>
				<FormInput
					name="email"
					type="email"
					onChange={handelChange}
					value={email}
					label="Email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					onChange={handelChange}
					value={password}
					label="Password"
					required
				/>
				<FormInput
					name="confirmPassword"
					type="password"
					onChange={handelChange}
					value={confirmPassword}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit"> Sing Up </CustomButton>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
