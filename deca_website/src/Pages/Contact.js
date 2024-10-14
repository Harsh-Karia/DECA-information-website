import React from "react";
import '../Styles/Pages.css';
import ContactForm from '../Components/ContactForm'

export default function Contact(){
	return(
		<div className="page_front">
			<h1>Contact Page</h1>
			<ContactForm/>
		</div>
	)
}