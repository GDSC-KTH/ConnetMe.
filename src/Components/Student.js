import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";

import "../index.css";
import Navbars from "./navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Student({


  title,
  skill,
  level,
  experience,
  field,
  pic,
  
}) {
  return (

    <div className="">
      <div className="container  mb-5">
        <MDBRow className="text-black row-cols-md-3">
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage src={pic} position="top" className="rounded-circle mt-3 w-25 mx-auto" alt="..." data-holder-rendered="true" />
              <MDBCardBody>
                <h6>Title: {title}</h6>
                <MDBCardText>Skills: {skill}</MDBCardText>
                <MDBCardText>Years of experience: {experience}</MDBCardText>
                <MDBCardText>Field of study: {field}</MDBCardText>
                <MDBCardText>Level of education: {level}</MDBCardText>
                <MDBBtn color="success" className=" mt-5 d-flex mx-auto">
                  Choose
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow> 
      </div>
    </div>
  );
}
