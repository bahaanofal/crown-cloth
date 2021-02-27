import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IKQ4QKZSrKy5OCutDzgIZYgECpMwulOs5oZQIqMj4kbfUQ1rSrLjoXLhnfXof7fRnmjcR07ap8C1hnqX9YHhRlz00h4mYAQ3l';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then((response) => {
				alert('Payment successful');
			})
			.catch((error) => {
				console.log('Payment error: ', JSON.parse(error));
				alert('There was an issue with your payment. Please sure you use the provided credit cart.');
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Crown Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
