import React from 'react';
import './NavbarStyle.css';
import { useStyles } from './NavbarStyle.js';
import PropTypes from 'prop-types';

export default function Navbar(props){
	const classes =useStyles({bgImg: props.bgImage, color: props.color})
	return ( 
		<div>
			{props.list.length>0 &&
				<ul className='ul'>
					{props.list.map((item, index)=><li className={`li ${classes.liMaterial}`} key={index}><a href={item.href}>{item.name}</a></li>)}
				</ul>	
			}
		</div>
	);
}
Navbar.propTypes = {
	list: PropTypes.array,
	color: PropTypes.string,
	bgImage: PropTypes.string
}
Navbar.defaultProps = {
	list: [],
	color: '#000',
	//bgImage: 'https://static.vecteezy.com/system/resources/thumbnails/000/240/889/small/abstract-comic-book-background-design.jpg'
	bgImage: 'http://scottyzen.com/cp/button.png'
}