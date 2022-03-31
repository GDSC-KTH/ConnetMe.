import React from "react";
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import {
  BrowseRouter,
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";

import Navbars from "../Components/navbar";

const Landing_Page = () => {
  return (
    <div>
      <Navbars />
      <div className="container-fluid">
        <div className="row"> 
        <div className="col-sm-6 p-5">
        <Link to="/loginprof"><div className="card">
              <div className="card-body">
                <h5 className="card-title">Professionals</h5>
                <p className="card-text">
                  Create account to get started
                </p>
                <a href="#" className="btn btn-danger">
                  Get Started
                </a>
              </div>
            </div> </Link>
          </div>
          <div className="col-sm-6 p-5">
          <Link to ="/login"> 
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">Student/Graduate</h5>
                <p className="card-text">
                  Create Account to get Started
                </p>
                <a href="#" className="btn btn-danger">
                  Get Started
                </a>
              </div> 
            </div></Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_Page;
