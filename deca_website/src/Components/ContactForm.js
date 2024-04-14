import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/Pages.css'

export default function ContactForm(){
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs
		.sendForm('service_roc8f13', 'template_kzshjlv', form.current, {
		  publicKey: 'lDyZ5E94XwpTrh2Ek',
		})
		.then(
		  () => {
			console.log('SUCCESS!');
		  },
		  (error) => {
			console.log('FAILED...', error.text);
		  },
		);
	};
  
	return(
		<form className='contact' ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" name="from_name" />
			<label>Email</label>
			<input type="email" name="from_email" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" />
   		</form>
	);
}