import React from "react";
import '../Styles/Pages.css';

export default function Home(){
	return(
		<div>	
			<div>
			<h1>DECA at UC Davis</h1>


			</div>
			<div style={{backgroundColor: 'lightGrey', paddingLeft: '200px',paddingRight: '200px', paddingTop: '50px', paddingBottom: '50px'}}>
				<h2>What is DECA</h2>
				<div>
					<p>DECA stands for Distributive Education Clubs of America, an association that encourages the development of business and leadership skills through academic conferences and competitions
An organization that prepares emerging leaders and entrepreneurs for careers in Marketing, Finance, Hospitality, and Management worldwide.</p>
				</div>
			</div>
			<br></br>
			<div className='box' >
				<div className="leftBox"style={{backgroundColor: 'lightGrey', paddingLeft: '200px',paddingRight: '200px', paddingTop: '50px', paddingBottom: '50px'}}>
					<p>insert summary here</p>
				</div>
				<div style={{paddingLeft:'100px'}}></div>
				<div className="rightBox"style={{backgroundColor: 'lightGrey', paddingLeft: '200px',paddingRight: '200px', paddingTop: '50px', paddingBottom: '50px'}}>
					<p>insert image here</p>
				</div>
			</div>
			<br></br>
			<div className='box' >
				<div className="leftBox"style={{backgroundColor: 'lightGrey', paddingLeft: '200px',paddingRight: '200px', paddingTop: '50px', paddingBottom: '50px'}}>
					<p>about</p>
				</div>
				<div style={{paddingLeft:'100px'}}></div>
				<div className="rightBox"style={{backgroundColor: 'lightGrey', paddingLeft: '200px',paddingRight: '200px', paddingTop: '50px', paddingBottom: '50px'}}>
					<p>events</p>
				</div>
			</div>
			<br></br>
			<div className='box' >
				<div className="leftBox"style={{backgroundColor: 'lightGrey', paddingLeft: '200px',paddingRight: '200px', paddingTop: '50px', paddingBottom: '50px'}}>
					<p>contact</p>
				</div>
				<div style={{paddingLeft:'100px'}}></div>
				<div className="rightBox"style={{backgroundColor: 'lightGrey', paddingLeft: '200px',paddingRight: '200px', paddingTop: '50px', paddingBottom: '50px'}}>
					<p>apply</p>
				</div>
			</div>
		</div>
		
	)
}