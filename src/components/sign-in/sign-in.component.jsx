import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';
import './sign-in.style.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

    handelSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })

        } catch (error) {
            console.log(error)
        }

    }

	handelChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className='title'>I already have an account</h2>
				<span>Sign in with your email and password</span>
                <form onSubmit={this.handelSubmit}>
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
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign in With Google </CustomButton>
                    </div>
				</form>
			</div>
		);
	}
}

export default SignIn;
