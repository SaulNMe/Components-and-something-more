import React from 'react';
import './NavbarStyles.css';

export default function Navbar(props){
	return (
		<div id='header3'>
			<img id='imgNav3' src="https://codetheweb.blog/assets/img/icon2.png"/>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
		</div>
	)
};