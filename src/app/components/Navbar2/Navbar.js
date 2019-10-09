import React, {useState} from 'react';
import './NavbarStyles.css';

export default function Navbar2(props){
	let [checked, setCheck] = useState(true);
	return (
		<div>
			<nav className='dropdown'>
				<h2 className='headerDropDown'>Drop Down Menu</h2>
				<input className='inputDropdown' id="toggle" type="checkbox" checked={checked} defaultChecked={false} onChange={() => setCheck(!checked)}/>
				<ul className='listDropdown'>
					<li className='liDropdown'><a className='linkDropdown' href="#">Section 01</a></li>
					<li className='liDropdown'><a className='linkDropdown' href="#">Section 02</a></li>
					<li className='liDropdown'><a className='linkDropdown' href="#">Section 03</a></li>
					<li className='liDropdown'><a className='linkDropdown' href="#">Section 04</a></li>
				</ul>
			</nav>
		</div>
	);
}