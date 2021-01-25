import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.style.scss';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: ''
		};
	}

	handelSubmit = (e) => {
		e.preventDefault();
		this.setState({ username: '', email: '', password: '' });
	};

	handelChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-up">
				<h2>I do not have a account</h2>
				<span>Sign up with your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <FormInput 
                        name="username" 
                        type="name" 
                        handelChange={this.handelChange} 
						value={this.state.username} 
						label='username'
                        required 
                    />
                    <FormInput 
                        name="email" 
                        type="email" 
                        handelChange={this.handelChange} 
                        value={this.state.email}
                        label='email'
                        required
                    />
					<FormInput
						name="password"
						type="password"
						handelChange={this.handelChange}
						value={this.state.password} 
						label='password' 
						required
                    />
                    
					<CustomButton type="submit"> Sing Up </CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
