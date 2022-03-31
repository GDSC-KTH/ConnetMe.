import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBNavbarNav,MDBNavbarItem,MDBNavbarLink,MDBIcon,
MDBCollapse,MDBBtn} from 'mdb-react-ui-kit';
import Login from '../Components/Login';
import Home from './Home';
import { auth } from '../firebase'; 
import { useStateValue } from '../StateProvider';



export default function Navbars() {
  const [showNavSecond, setShowNavSecond] = useState(false);
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
      if (user) {
          auth.signOut();
      }
  }

  return (
      
        
      <div>
        <nav className="navbar navbar-expand-lg   bg-dark">
          <MDBNavbarBrand className='mx-auto d-block'>    <Link to="/" className="ms-5"><span className = "text-danger"><b>Connet</b></span><span className= "text-warning"><b>Me</b></span></Link></MDBNavbarBrand>
        <MDBNavbarToggler aria-expanded='false' aria-label='Toggle navigation' onClick={() => setShowNavSecond(!showNavSecond)}>
        <MDBIcon icon='bars' fas color='danger' />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
            </MDBCollapse>
        </nav>
      </div>
    
       
  );
}
