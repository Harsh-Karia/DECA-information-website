import React from "react";
import '../Styles/Pages.css';
import {Link} from 'react-router-dom';
import deca_comp from "../Images/deca_comp.webp"
import AboutCard from "../Components/AboutCard";

export default function About(){
	return(
		<div className="page_front">
			<h1>About Us</h1>
			<h3>DECA stands for Distributive Education Clubs of America, an association that encourages the development of business and leadership skills through academic conferences and competitions. It is an organization that prepares emerging leaders and entrepreneurs for careers in Marketing, Finance, Hospitality, and Management worldwide.</h3>
			<div className="box">
				<AboutCard title="Our Mission" desc= "A student-led organization dedicated to professional development. DECA members have the opportunity to participate in an annual academic conference, where they can showcase their skills and compete in diverse fields such as marketing, finance, hospitality, and management."/>
				<AboutCard title="Membership Benefits" desc="Our chapter holds engaging bi-monthly meetings featuring a range of events including enriching workshops, networking sessions, and insightful guest speaker sessions, all aimed at nurturing your professional growth."/>
				{/* The two sections below could not be mapped to AboutCard*/}
				<div className="card"> 
					<h2 classname="normal">What We Do</h2>
					<ul className="card-text">
						<li>Professional Development Workshops</li>
						<li>LinkedIn/Resume Workshop</li>
						<li>Networking Workshop</li>
						<li>Interview Workshops</li>
						<li>Guest Speakers with Industry Professionals</li>
						<li>Social Events and Gatherings and other Community Service events</li>
					</ul>
				</div> 
				<div className="card">
					<h2 classname="normal">Events</h2>
					<ul className="card-text">
						<li>Individual case studies</li>
						<li>Team Case Studies</li>
						<li>Prepared Business Preperations</li>
					</ul>
				</div> 
			</div>
			<div className="competitions">
				<div className="half_box">
					<h1>Competitions</h1>
					<h3>Competitions are the main event of the DECA experience, offering a platform to showcase skills and network. DECA organizes competitive events across four distinct career clusters: business management and administration, finance, hospitality and tourism, marketing, and additionally also in entrepreneurship and personal financial literacy. There are various different even types such as role-play and case study events, and prepared events. However, this year we will not be competing, as the dates for ICDC coincides with Picnic Day. Additionally, the event's location in Austin, TX, poses logistical challenges, as it requires quite a lot of funds for travel and accommodation. As we are still a relatively new club, we have decided not to compete this year especially as we are still in the process of accumulating funds to be able to cover the majority of member’s expenses. We are still hoping to provide a valuable experience mimicking the benefits of ICDC. </h3>
				</div>
				<div className="half_box">
					<Link target={"_blank"} to="https://www.deca.org/collegecompete">
						<img src={deca_comp} alt="deca_comp" style={{width:"100%"}}/>
					</Link>
				</div>
			</div>
		</div>
	)
}