import React from "react";
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import {
  BrowseRouter,
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbars from "../Components/navbar";
import Professional from "./Professional";


const Professional_home = () => {
  return (
    <div>
      <Navbars />
      <div class="col mt-5">
        <div class="card h-100">
          <Professional
            pic={process.env.PUBLIC_URL + "images/segun2.jpg"}
            title="Human Resource"
            industry=" Manufacturing and Production"
            experience="15"
            field="Mechanical Engineering"
          />
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <Professional
            pic={process.env.PUBLIC_URL + "images/segun2.jpg"}
            title="Professor"
            industry=" Agriculture"
            experience="10"
            field="Animal Production"
          />
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <Professional
            pic={process.env.PUBLIC_URL + "images/segun2.jpg"}
            title="Devops Engineer"
            industry=" IT Consultant"
            experience="14"
            field="Enginering"
          />
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <Professional
            pic={process.env.PUBLIC_URL + "images/segun2.jpg"}
            title="Management Consultant"
            industry=" Fashion"
            experience="12"
            field="Enginering"
          />
        </div>
      </div>
    </div>
  );
};

export default Professional_home;
