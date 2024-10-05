import React from "react";
import '../Styles/Pages.css';
// import deca_logo from '../Images/deca_logo.png'
import deca_table from '../Images/deca_table.jpg'
import cookie_deco from '../Images/cookie_deco.png'
import pizza_social from '../Images/pizza_social.jpg'
// import club_meeting from '../Images/club_meeting.jpg'
import {Link} from 'react-router-dom';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Home(){
	return(
		<div className="page_front">	
			<div className="landing">
				<h1>Deca at UC Davis</h1>
				<h3>Preparing emerging leaders in marketing, finance, hospitality, and management at UC Davis</h3>
				<br/>
				<Link to="/about" >
                    <button>Learn More About Deca at UC Davis</button>
                </Link>
				<br/>
				<img src={deca_table} alt="deca_table" width='400px'style={{margin:'50px'}}/>
			</div>
			<div className='box' >
				<div className="half_box">
					<img src={cookie_deco} alt="cookie_deco" width='400px'/>
					<br/>
					<Link to="/events">
                        <button style={{marginTop:'10px'}}>Explore Opportunities</button>
                    </Link>
				</div>
				<div className="half_box">
					<img src={pizza_social} alt="pizza_social" width='400px'/>
					<br/>
					<Link to="/apply">
                        <button style={{marginTop:'10px'}}>Join Us!</button>
                    </Link>
				</div>
				<div className="box">
					<div className="half_box" style={{textAlign: 'left'}}>
						<h1>Connect with Us.</h1>
						<h3>Contact DECA at UC Davis to learn more about future opporutnites.</h3>
						<Link to="/apply">
								<button class = "rbutton">Contact Us</button>
						</Link>
					</div>
					<div className="half_box"> 
						<InstagramEmbed url="https://www.instagram.com/p/CplQvPIPMCS/?img_index=1" width='328px' style={{padding:'0px', margin:'0px'}}/>
					</div>	
				</div>
				
			</div>
		</div>
	)
}