import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './AvatarCardStyles.js';
import './AvatarCardStyles.css';
export default function AvatarCard(props){
	return (
<div className="center">
	<div className="card-avatar">
		<div className="additional">
			<div className="user-card">
				<div className="level center-title">
					Level 13
				</div>
				<div className='circle'>
					<img src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png" alt=""/>
				</div>
				<div className="points center-title">
					5,312 Points
				</div>
			</div>
			<div className="more-info">
				<h1>Jane Doe</h1>
				<div className="coords">
					<span>Group Name</span>
					<span>Joined January 2019</span>
				</div>
				<div className="coords">
					<span>Position/Role</span>
					<span>City, Country</span>
				</div>
				<div className="stats">
					<div>
						<div className="title">Awards</div>
							<i className="fa fa-trophy"></i>
						<div className="value">2</div>
					</div>
					<div>
						<div className="title">Matches</div>
						<i className="fa fa-gamepad"></i>
						<div className="value">27</div>
					</div>
					<div>
						<div className="title">Pals</div>
						<i className="fa fa-group"></i>
						<div className="value">123</div>
					</div>
					<div>
						<div className="title">Coffee</div>
						<i className="fa fa-coffee"></i>
						<div className="value infinity">∞</div>
					</div>
				</div>
			</div>
		</div>
		<div className="general">
			<h1>Jane Doe</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
			<span className="more">Hover me!</span>
		</div>
	</div>
</div>
	)
}

AvatarCard.propTypes = {
	
}

AvatarCard.defaultProps = {
	
}