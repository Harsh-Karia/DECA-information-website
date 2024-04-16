import React from "react";
import { Link } from "react-router-dom";
import '../Styles/footer.css'
import ig_logo from '../Images/ig_logo.png'

export default function Footer(){
	return(
		
		<footer >
			<div className="ctn">
				<p className="footer">Copyright © DECA at UC Davis 2024</p>
				{/* <Link target="_blank" to="https://www.instagram.com/deca.ucd/">
					<img src={ig_logo} alt="ig_logo" style={{height:50}}/>
				</Link> */}
			</div>
		</footer>
	  
	)
}