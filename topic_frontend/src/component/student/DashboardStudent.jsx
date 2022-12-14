import React, { Component } from "react";
import "./DashboardStudent.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";
import NavBar from "../NavBar.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import NotFound404 from "../NotFound404.jsx";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
 faUser,
faFileAlt,
faUniversity,
faBriefcase,
faMale,
} from "@fortawesome/free-solid-svg-icons";
import StudentProjectBidTable from "./StudentProjectBidTable";
import StudentProjectBid from "./StudentProjectBid";



class DashboardHR extends Component {
  state = {
    redirect: true,
    checked: true 
  };
  handleChange=(checked)=> {
    if(this.state.checked==true){ 
      document.getElementById("sidebar").setAttribute("class", "display-none");
    }
    else{document.getElementById("sidebar").setAttribute("class", "display-block");}   
    this.setState({ checked });
  }

  render() {
    return (
      <Router>
        {/* <Redirect to='/login'  /> */}

        <div id="outer-main-div">
          <div id="outer-nav">
            {/* <NavBar loginInfo={this.props.data} /> */}
            <NavBar
              loginInfo={this.props.data}
              checked={this.state.checked}
              handleChange={this.handleChange}
              onLogout={this.props.onLogout}
            />
          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title" className="main-title-employee">
                <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                Student
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link
                    to={
                      "/student/" +
                      this.props.data["_id"] +
                      "/personal-info"
                    }
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="sidebar-icon"
                    />
                    Personal Information
                  </Link>
                </li>
                <li>
                  <Link to={
                      "/student/" + this.props.data["_id"] + "/topic"
                    }>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="sidebar-icon"
                    />
                    Topic
                  </Link>
                </li>
              </ul>
            </div>
            <div id="main-area">
              <div id="sidebar-top-content" />
              <Switch>
                <Route
                  exact
                  path="/student/:id/personal-info"
                  render={props => <PersonalInfo data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/student/:id/education"
                  render={props => <Education data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/student/:id/topic"
                  render={props => <StudentProjectBid data={this.props.data} back={false}/>}
                />
               
                <Route
                  render={
                    () => <NotFound404/>
                    // <Redirect to={"/student/"+ this.props.data["_id"]+"/personal-info"} />
                  }
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardHR;
