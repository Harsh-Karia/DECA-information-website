import React from "react";
import '../Styles/Pages.css';
import deca_logo from '../Images/deca_logo.png'

export default function Home(){
	return(
		<div>	
			<br></br>
			<div className='box' >
				<div className="leftBox"style={{padding:'150px'}}>
					<h1>DECA at UC Davis</h1>
					<p>insert summary here</p>
				</div>
				<div className="rightBox"style={{padding: '150px'}}>
					<img src={deca_logo} alt="deca_logo" width='200px'/>
				</div>
			</div>


			<br></br>
			<div className='box' >
				<div className="leftBox"style={{ padding:'100px'}}>
					<p>about</p>
					<button>Learn More</button>
					<p>contact</p>
					<button>Click Here</button>
				</div>

				<div className="rightBox"style={{padding:'100px'}}>
					<p>events</p>
					<button>Explore</button>
					<p>apply</p>
					<button>Join</button>
				</div>
			</div>
		</div>
		
	)
}