import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.style.scss';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handelSubmit = async event => {
		event.preventDefault();
		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;
		
		if(password !== confirmPassword){
			alert("passwords don't match")
			return;
		}

		signUpStart({ displayName, email, password });
	};

	handelChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className="sign-up">
				<h2 className='title'>I do not have a account</h2>
				<span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handelSubmit}>
                    <FormInput 
                        name="displayName" 
                        type="name" 
                        onChange={this.handelChange} 
						value={displayName} 
						label='Display Name'
                        required 
                    />
                    <FormInput 
                        name="email" 
                        type="email" 
                        onChange={this.handelChange} 
                        value={email}
                        label='Email'
                        required
                    />
					<FormInput
						name="password"
						type="password"
						onChange={this.handelChange}
						value={password} 
						label='Password' 
						required
					/>
					<FormInput
						name="confirmPassword"
						type="password"
						onChange={this.handelChange}
						value={confirmPassword} 
						label='Confirm Password' 
						required
                    />
                    
					<CustomButton type="submit"> Sing Up </CustomButton>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart : userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);