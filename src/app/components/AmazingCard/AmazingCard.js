import React from 'react';
import './AmazingCardStyles.css';
import PropTypes from 'prop-types';
import { useStyles } from './AmazingCardStyles.js';

export default function AmazingCard(props){
	const classes = useStyles({bgColor: props.bgColor, color: props.color})
	return (
		<div className='container'>
			<div className={`card ${classes.msCard}`}>
				<div className='card-container'>
					<div className="card_image-container">
						<img className="card_image" src={props.img} alt=""/>
					</div>
		  			<svg className="card_svg" viewBox="0 0 650 400">
						<path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill={props.bgColor}/>
			        	<path className="card_line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
			      	</svg>
				</div>
				<div className='text-container'>
		 			<div className="card_content">
		   				<h1 className={`card_title ${classes.msCardHeader}`}>{props.header}</h1>
		 				<p className={classes.msCardBody}>{props.body}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

AmazingCard.propTypes = {
	header: PropTypes.string,
	body: PropTypes.string,
	img: PropTypes.string,
	bgColor: PropTypes.string,
	color: PropTypes.string,
}

AmazingCard.defaultProps = {
	header: 'some',
	body: 'some',
	img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
	bgColor: '#333',
	color: '#fff'
}