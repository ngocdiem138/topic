import React, { Component } from "react";
import "./DashboardTeacher.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";

import Role from "../Role.jsx";
import NavBar from "../NavBar.jsx";
import TeacherProjectBid from "./TeacherProjectBid.jsx";
import NotFound404 from "../NotFound404.jsx";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersCog,
  faUsers,
  faChair,
  faBuilding,
  faDollarSign,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

function RoleAdminF() {
  return <Role />;
}
function TeacherProjectBidF() {
  return <TeacherProjectBid />;
}

class DashboardTeacher extends Component {
  state = {
    redirect: true,
    checked: true
  };
  handleChange = (checked) => {
    console.log("switch");
    // var sidebarV = this.refs.sidebar;
    // var sidebarV = React.findDOMNode( this.refs.sidebar);
    // sidebarV.style.disply="none";

    if (this.state.checked == true) {
      // document.getElementById("sidebar").setAttribute("style", "display:none")
      document.getElementById("sidebar").setAttribute("class", "display-none");
    }
    // document.getElementById("sidebar").setAttribute("style", "display:block");
    else { document.getElementById("sidebar").setAttribute("class", "display-block"); }
    this.setState({ checked });
  }

  render() {
    return (
      <Router>
        {/* <Redirect to='/login'  /> */}

        <div id="outer-main-div">
          <div id="outer-nav">
            <NavBar loginInfo={this.props.data} checked={this.state.checked} handleChange={this.handleChange} onLogout={this.props.onLogout} />
          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title">
                <FontAwesomeIcon icon={faUsersCog} className="sidebar-icon" />
                Teacher
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link to="/teacher/project-bid">
                    <FontAwesomeIcon
                      icon={faTasks}
                      className="sidebar-icon"
                    />
                    List Topic
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div id="sidebar-top-content" /> */}
            <div id="main-area">
              <div id="sidebar-top-content" />
              {/* //table */}
              {/* <RoleAdmin/> */}
              <Switch>
                <Route exact path="/teacher/project-bid" component={TeacherProjectBidF} />
                {/* <Route path="/teacher/role/form" exact component={RoleFormF} /> */}

                <Route
                  path="/teacher/project-bid"
                  exact
                  component={TeacherProjectBidF}
                />
                <Route
                  path="/student/project-bid"
                  exact
                  component={TeacherProjectBidF}
                />
                <Route render={() =>
                  <NotFound404 />
                } />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardTeacher;
