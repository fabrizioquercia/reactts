import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "reactstrap";
import logo from './logo.svg';


function Navbar() {
  return (
    <div className="navbar navbar-lg">
      
	    <img src={logo} className="App-logo" alt="logo" style={{height: '32px'}} />

      <Nav>
        <Link to="/home">Home</Link>&nbsp;&nbsp; 
        <Link to="/navicelle">Navicelle</Link>&nbsp;&nbsp;
        <Link to="/missioni">Missioni</Link> 
      </Nav>
      
    </div>
  );
}

export default Navbar;
