import React, { Component } from "react";
import "./DashboardAdmin.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";
import Role from "../Role.jsx";
import NavBar from "../NavBar.jsx";
import Student from "../Student.jsx";
import NotFound404 from "../NotFound404.jsx";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChair,
  faBuilding,
  faUser,
  faUserTie,
  faRupeeSign,
  faFileAlt,
  faCity,
  faGlobeAmericas,
  faPlaceOfWorship,
  faArchway,
} from "@fortawesome/free-solid-svg-icons";

function RoleHRF() {
  return <Role />;
}
function StudentF() {
  return <Student />;
}


class DashboardAdmin extends Component {
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
            {/* <NavBar loginInfo={this.props.data} /> */}
            <NavBar loginInfo={this.props.data} checked={this.state.checked} handleChange={this.handleChange} onLogout={this.props.onLogout} />

          </div>

          <div id="main-non-nav">
            <div id="sidebar">
              <div id="sidebar-top-content" />
              <div id="main-title">
                <FontAwesomeIcon icon={faUserTie} className="sidebar-icon" />
                Admin
              </div>
              <ul className="navbar-ul">
                <li>
                  <Link to="/hr/student">
                    <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
                    User
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div id="sidebar-top-content" /> */}
            <div id="main-area">
              <div id="sidebar-top-content" />
              {/* //table */}
              {/* <RoleHR/> */}
              <Switch>
                <Route
                  path="/hr/student"
                  // exact
                  component={StudentF}
                />
                <Route path="/hr/role" component={RoleHRF} />
                <Route render={() => <NotFound404 />} />

              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardAdmin;
