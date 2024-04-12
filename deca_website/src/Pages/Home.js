import React from "react";
import '../Styles/Pages.css';
import deca_logo from '../Images/deca_logo.png'
import deca_table from '../Images/deca_table.jpg'
import cookie_deco from '../Images/cookie_deco.png'
import pizza_social from '../Images/pizza_social.jpg'
import club_meeting from '../Images/club_meeting.jpg'
import {Link} from 'react-router-dom';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Home(){
	return(
		<div>	
			<br></br>
			<div className='box' >
				<div className="leftBox">
					<h1>DECA at UC Davis</h1>
					<p>DECA at UC Davis is a student organization that prepares emerging leaders in marketing, finance, hospitality, and management through case challenges, professional development, and networking opportunities.</p>
				</div>
				<div className="rightBox">
					<img src={deca_logo} alt="deca_logo" width='300px'/>
				</div>
			</div>


			<br></br>
			<div className='box' >
				<div className="leftBox">
					<img src={deca_table} alt="deca_table" width='300px'/>
					<p>about</p>
					<Link to="/about">
                            <button class = "rbutton">Learn More</button>
                    </Link>
					<div style={{padding:'20px'}}></div>
					<img src={club_meeting} alt="club_meeting" width='300px'/>
					<p>contact</p>
					<Link to="/contact">
                            <button class = "rbutton">Contact Us</button>
                    </Link>
				</div>

				<div className="rightBox">
					<img src={cookie_deco} alt="cookie_deco" width='300px'/>
					<p>events</p>
					<Link to="/events">
                            <button class = "rbutton">Explore Opportunities</button>
                    </Link>
					<div style={{padding:'20px'}}></div>
					<img src={pizza_social} alt="pizza_social" width='300px'/>
					<p>apply</p>
					<Link to="/apply">
                            <button class = "rbutton">Join Us!</button>
                    </Link>
				</div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center',}}>
				<InstagramEmbed url="https://www.instagram.com/p/CzCHMOXPCoX/?img_index=1" width={328} />
				<InstagramEmbed url="https://www.instagram.com/p/CoJWHTZLQfg/" width={328} />
				
			</div>
		</div>
		
	)
}