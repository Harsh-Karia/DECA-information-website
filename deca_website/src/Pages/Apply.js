import React from "react";
import '../Styles/Pages.css';
import { Link } from 'react-router-dom';
import ig_logo from '../Images/ig_logo.png';

export default function Apply() {
	return (
		<div className="page_front">
			<h1>Apply this Quarter</h1>

			<h3>Stay updated with our socials:</h3>
			<Link target={"_blank"} to="https://www.instagram.com/deca.ucd/">
				<img src={ig_logo} alt="ig_logo" style={{ height: 50, borderRadius: '0px' }} />
			</Link>

			<h3>Application Form:</h3>
			{/* Embedding Google Form */}
			<iframe
				title="Google Form"
				src="https://docs.google.com/forms/d/e/1FAIpQLSc9dJFRXmBJ8BSjaxm5ZV287lSjiWSaGSTBn7RVHJ26lRDJHw/viewform?embedded=true"
				width="100%"
				height="700px"
				frameBorder="0"
				marginHeight="0"
				marginWidth="0"
			>
				Loading…
			</iframe>
		</div>
	)
}
