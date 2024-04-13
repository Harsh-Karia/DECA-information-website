import React from "react";
import '../Styles/Pages.css';
import {Link} from 'react-router-dom';
import ig_logo from '../Images/ig_logo.png'

export default function Apply(){
	return(
		<div>
			<h1>Apply Page</h1>
			<p>Check Back in Fall!</p>
			<p>Stay updated with our socials:</p>
			<Link target={"_blank"} to="https://www.instagram.com/deca.ucd/">
                <img src={ig_logo} alt="ig_logo" style={{height:50}}/>
            </Link>
		</div>
	)
}