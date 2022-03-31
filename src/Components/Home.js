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
import Student from "./Student";


const Home = () => {
  return (
    <div>
        <Navbars/>
      <div class="col mt-5">
        <div class="card h-100">
          <Student
            pic={process.env.PUBLIC_URL + "images/segun.jpg"}
            title= "Mechanical Engineer"
            skill="Javascript, python c++"
            level="Bachelor"
            experience="2"
            field="Enginering"
          />
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
        <Student
            pic={process.env.PUBLIC_URL + "images/segun.jpg"}
            title= "Data Engineer"
            skill="Python, Machine Learning, SQL Snowflake"
            level="Bachelor"
            experience="1"
            field="Enginering"
          />
       

        </div>
      </div>
      <div class="col">
        <div class="card h-100">
        <Student
            pic={process.env.PUBLIC_URL + "images/segun.jpg"}
            title= "Machine Learning"
            skill="Python, Scikit-Learn, SQL, Tensor flow"
            level="Masters"
            experience="3"
            field="Computer Science"
          />
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
        <Student
            pic={process.env.PUBLIC_URL + "images/segun.jpg"}
            title= "Human resources"
            skill="Excel, Ms-word"
            level="Bachelor"
            experience="4"
            field="Management"
          />

        </div>
      </div>
    </div>
  );
};

export default Home;






