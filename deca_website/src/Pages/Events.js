import React from "react";
import '../Styles/Pages.css';

export default function Events(){
	return(
		<div>	
			<div style={{ padding: '25px'}}>
			<h1>Upcoming Events</h1>
            
			</div>
			<div style={{backgroundColor: 'lightGrey', paddingLeft: '200px',paddingRight: '200px', paddingTop: '50px', paddingBottom: '50px'}}>
				<h2>Business Fair</h2>
				<h3>April 16th, 6:30 - 8:30 PM</h3>
				<h4>UC Davis ARC Ballroom B</h4>
				<div>
				<p>Join us at our highly anticipated business fair, where professionals from diverse sectors including hospital tourism, marketing, finance, business administration, and technology converge for a day of networking, innovation, and collaboration.
Experience firsthand the dynamic atmosphere as industry leaders and experts come together to showcase the latest trends, solutions, and strategies shaping their respective fields. From cutting-edge technologies revolutionizing healthcare tourism to groundbreaking marketing strategies driving business growth, there's something for everyone at our event.
Engage in meaningful conversations with peers and thought leaders, exchange insights, and explore potential partnerships that can drive your business forward. Whether you're seeking innovative solutions, strategic alliances, or simply looking to expand your professional network, our business fair offers a platform tailored to your needs.
Discover new opportunities, gain fresh perspectives, and stay ahead of the curve in an ever-evolving business landscape. Mark your calendars and join us for a day of inspiration, connection, and growth at our upcoming business fair.</p>
				</div>
				
			</div>
			<div style={{backgroundColor: 'lightGrey', paddingLeft: '200px',paddingRight: '200px', paddingTop: '50px', paddingBottom: '50px'}}>
				<h2>International Conference Development</h2>
				<h3>Next year in SF</h3>
			</div>
		</div>
		
	)
}
