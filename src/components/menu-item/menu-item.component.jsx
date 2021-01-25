import React from 'react';
import './menu-item.style.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
	return (
		<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<div className="backgrund-image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">Shop Now</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
