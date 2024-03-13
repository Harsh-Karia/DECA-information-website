import React from "react";
import '../Styles/nav.css'
import { Link } from "react-router-dom";

export default function Navbar(){
	return(
<nav className="nav">
    <Link className="siteName" to ='/'>
      DECA
    </Link>
   
      <ul> 
        <li>
          <Link to ="/">
            Home
          </Link>
        </li>
        
        <li>

          <Link to="/about">About </Link>
          
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/events"> Events </Link>
        </li>

        <li>
          <Link to="/contact"> Contact </Link>
        </li>

        <li>
          <Link to="/apply"> Apply </Link>
        </li>

        
        
      </ul>
</nav>

	)
}