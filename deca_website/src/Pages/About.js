import React from "react";
import '../Styles/Pages.css';

export default function About(){
	return(
		<div style={{paddingTop: '10px}'}}>	
			<div style={{backgroundColor: 'lightGrey', paddingLeft: '200px',paddingRight: '200px', paddingTop: '2px', paddingBottom: '20px'}}>
				<div style={{ padding: '0px'}}>
					<h1>About Us</h1>
					<h3>DECA stands for Distributive Education Clubs of America, an association that encourages the development of business and leadership skills through academic conferences and competitions
					An organization that prepares emerging leaders and entrepreneurs for careers in Marketing, Finance, Hospitality, and Management worldwide.
					</h3>
					<br/>
				</div>
				<div>
					<h1>Our Mission</h1>
					<h3>A student-led organization dedicated to professional development. DECA members have the opportunity to participate in an annual academic conference, where they can showcase their skills and compete in diverse fields such as marketing, finance, hospitality, and management. </h3>

				</div>
				<div>
					<h1>Membership Benefits</h1>
					<h3>Our chapter holds engaging bi-monthly meetings featuring a range of events including enriching workshops, networking sessions, and insightful guest speaker sessions, all aimed at nurturing your professional growth.</h3>

				</div>
				
				
			</div>
		
		</div>
		
	)
}