import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";
import logo from './logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faHome, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <div className="navbar navbar-lg">
      
	    <img src={logo} className="App-logo" alt="logo" style={{height: '32px'}} />

      <Nav>
        <Link to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link>&nbsp;&nbsp; 
        <Link to="/navicelle"><FontAwesomeIcon icon={faSpaceShuttle} /> Navicelle</Link>&nbsp;&nbsp;
        <Link to="/missioni"><FontAwesomeIcon icon={faDatabase} /> Missioni</Link> 
      </Nav>
      
    </div>
  );
}

export default Navbar;
