import React, { Component } from "react";
import "./StudentInfo.css";
import { Form, Button, Col, Row } from "react-bootstrap";
import { HashRouter as Router, Route, Link } from "react-router-dom";



export class StudentInfo extends Component {
  render() {
    return (
      <div>
        <div onClick={
            this.props.onBack
          // console.log("back1")
          }>    <Button
          variant="primary"
          id="add-button"
          
        >
          Back
        </Button></div>
     

        <h2 id="role-title">Employee Information of {this.props.data["FirstName"]+" "+this.props.data["LastName"]}</h2>
        <div id="outer-empingo-div">
        <Link to="/admin/student/info/personal-info">
          <Button
            variant="outline-primary"
            size="lg"
            block
            className="empinfo-button"
          >
          
            Personal Information
          </Button>
          </Link>
          {/* <Link to="/admin/student/info/education">
          <Button
            variant="outline-primary"
            size="lg"
            block
            className="empinfo-button"
          >
            Education
          </Button>
          </Link> */}
        </div>
      </div>
    );
  }
}

export default StudentInfo;
