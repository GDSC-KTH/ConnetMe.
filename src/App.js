import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import {BrowseRouter, BrowserRouter,BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbars from './Components/navbar'
import Student from './Components/Student';
import Home from './Components/Home';
import Login from './Components/Login';
import { Link, useHistory } from 'react-router-dom'; 
import { auth } from './firebase'; 
import Professional_home from './Components/Professional_home';
import Login_Prof from './Components/Login_Prof';
import Signin from './Components/Signin';
import Landing_Page from './Components/landing_page';
import Signin_Student from './Components/sigin_student';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route path = '/' exact component = {Landing_Page}/>
              <Route path = '/home' exact component = {Home}/>
              <Route path = '/Student'component = {Student}/>
              <Route path = '/professional'component = {Professional_home}/>
              <Route path = '/login'component = {Login}/>
              <Route path = '/loginprof'component = {Login_Prof}/>
              <Route path = '/signin'component = {Signin}/>
              <Route path = '/signinstudent'component = {Signin_Student}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
