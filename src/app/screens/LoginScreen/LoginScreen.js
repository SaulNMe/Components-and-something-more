import React from 'react';
//import { useQuery } from 'react-query-hooks';
//import Button from '@material-ui/core/Button';
//import axios from 'axios';
//import ScrollMagic from 'scrollmagic';
import './LoginScreenStyles.css'
//import { TweenLite } from "gsap/all";
import Navbar from 'app/components/Navbar';
import AmazingCard from 'app/components/AmazingCard';
//import AvatarCard from 'app/components/AvatarCard';
import Loader from 'app/components/Loader';
import Loader2 from 'app/components/Loader2';
import Loader3 from 'app/components/Loader3';
//import Navbar2 from 'app/components/Navbar2';
//import Navbar3 from 'app/components/Navbar3';
//const fetchUsers = () => axios("https://jsonplaceholder.typicode.com/users");

export default function LoginScreen(props){
	//let [state, setState] = useState(true);
	const navItems = [{
		name: 'Home',
		href: 'https://mail.google.com/mail/u/0/#inbox'
	}, {
		name: 'Galery',
		href: 'https://mail.google.com/mail/u/0/#inbox'
	}, {
		name: 'Contact',
		href: 'https://mail.google.com/mail/u/0/#inbox'
	}, {
		name: 'About',
		href: 'https://mail.google.com/mail/u/0/#inbox'
	}, {
		name: 'Props',
		href: 'https://mail.google.com/mail/u/0/#inbox'
	}, {
		name: 'Cosa',
		href: 'https://mail.google.com/mail/u/0/#inbox'
	}, {
		name: 'Hidden',
		href: 'https://mail.google.com/mail/u/0/#inbox'
	}];
	//let [controller, setController] = useState(new ScrollMagic.Controller());
	//let users = useQuery(fetchUsers);
	// function scroll(){
	// 	if (state)
	// 		TweenLite.to('#content', 0.2, {backgroundColor: "red", scale: 1.2, onComplete: () =>{ document.getElementById('content').classList.add('style') }});
	// 	else 
	// 		TweenLite.to('#content', 0.2, {backgroundColor: "orange", scale: 1, onComplete: () =>{ document.getElementById('content').classList.remove('style') }});
			
	// 		setState(!state);
	// 	//code
	// }
	return(
		<div>
			<Loader3/>
			{
			/*
			<Loader/>
			<Loader2/>
			<AmazingCard
				header='Coteforce'
				body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis veniam cum modi, asperiores, fugiat minus, doloribus aliquam omnis rerum saepe reiciendis ipsum corporis cupiditate voluptatibus. Suscipit molestias consectetur qui alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis animi nisi quae culpa ad dolorum quas rerum obcaecati fuga atque. Eum, nesciunt ratione. Consequuntur velit dolorum nisi. Repudiandae, omnis, corrupti?'
				bgColor='#000712'
				color='#EBCD56'
				img='https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
			/>
			<AvatarCard/>
			<Navbar list={navItems}/>
			<div style={{margin: 10, padding: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<div id='content'style={{borderRadius: 30, backgroundColor: 'orange', display: 'inline-block', padding: 10 }}>
					<h1 id='title' style={{display: 'unset', color: 'white'}}>Users</h1>
				</div>
				<p>{users.isLoading ? 'Loading': 'Loaded data'}</p>
				<ul> { users.result && users.result.data.map(user => <li key={user.id}>{user.name}</li>) }
	    		</ul>
	    		<Button
		            variant="contained"
		            color="primary"
		            onClick={scroll}
		        >
		            Cargar
		        </Button>
			</div>*/}
		</div>
	)
}