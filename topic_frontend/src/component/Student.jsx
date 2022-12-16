import React, { Component } from "react";
import "./Student.css";
import axios from "axios";
import EmployeeTable from "./StudentTable.jsx";
import StudentForm from "./StudentForm.jsx";
import StudentFormEdit from "./StudentFormEdit.jsx";
import StudentInfo from "./StudentInfo.jsx";
import { HashRouter as Router, Route } from "react-router-dom";
import PersonalInfo from "./student/PersonalInfo.jsx";
import Education from "./student/Education.jsx";

class Student extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {},
    addFormGender: "",
    editFormGender: "",
    EmpInfo: {},
    EmpInfoBool: false,

  };

  render() {

    return (
      <Router>
        <Route
          exact
          path="/hr/student"
          render={props =>
            <React.Fragment>
              {/* {this.redirectF} */}
              {/* {this.state.EmpInfo?this.redirectF:<React.Fragment />} */}
              {this.state.table ? (
                this.state.editForm ? (
                  <StudentFormEdit
                    onEmployeeEditUpdate={this.handleEmployeeEditUpdate}
                    onFormEditClose={this.handleEditFormClose}
                    editData={this.state.editData}
                    onGenderChange={this.handleEditFormGenderChange}
                  />
                ) : (


                    !this.state.EmpInfoBool ? <EmployeeTable
                      onAddEmployee={this.handleAddEmployee}
                      onEditEmployee={this.handleEditEmployee}
                      onEmpInfo={this.handleEmpInfo}
                    /> : <StudentInfo data={this.state.EmpInfo} onBack={this.handleBack} />

                  )
              ) : (
                  <StudentForm
                    onEmployeeSubmit={this.handleEmployeeSubmit}
                    onFormClose={this.handleFormClose}
                    onGenderChange={this.handleAddFormGenderChange}
                  />
                )}
            </React.Fragment>
          }
        />

        <Route
          exact
          path="/hr/student/info/personal-info"
          render={props => <PersonalInfo data={this.state.EmpInfo} back={true} />}
        />
        <Route
          exact
          path="/hr/student/info/education"
          render={props => <Education data={this.state.EmpInfo} back={true} />}
        />
      </Router>
    );
  }
  handleEmpInfo = e => {
    console.log("info", e);
    // history.push("/hr/student/form-edit");
    this.setState({ EmpInfo: e });
    this.setState({ EmpInfoBool: true })
  };
  handleBack = () => {
    console.log("back");
    this.setState({ EmpInfoBool: false })
  };
  handleEmployeeSubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {
      Email: event.target[0].value,
      Password: event.target[1].value,
      Account: event.target[2].value,
      // RoleID: event.target[3].value,
      Gender: this.state.addFormGender,
      FirstName: event.target[5].value,
      MiddleName: event.target[6].value,
      LastName: event.target[7].value,
      DOB: event.target[8].value,
      ContactNo: event.target[9].value,
      StudentCode: event.target[10].value,
      // DepartmentID: event.target[12].value,
      // PositionID: event.target[13].value,
      // DateOfJoining: event.target[14].value,
      // TerminateDate: event.target[15].value,
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/api/student", body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleAddEmployee = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditEmployee = e => {
    console.log(e);
    console.log("clicked6");
    this.setState({ editForm: true });
    this.setState({ editData: e });
    this.setState({ editFormGender: e["Gender"] })
  };
  handleFormClose = () => {
    console.log("clicked1");
    this.setState({ table: true });
  };
  handleEditFormClose = () => {
    console.log("clicked5");
    this.setState({ editForm: false });
  };
  handleFormClose = () => {
    console.log("clicked1");
    this.setState({ table: true });
  };
  handleEmployeeEditUpdate = (info, newInfo) => {
    newInfo.preventDefault();
    let body = {
      Email: newInfo.target[0].value,
      
      Account: newInfo.target[1].value,
      // RoleID: newInfo.target[3].value,
      Gender: this.state.editFormGender,
      FirstName: newInfo.target[4].value,
      MiddleName: newInfo.target[5].value,
      LastName: newInfo.target[6].value,
      DOB: newInfo.target[7].value,
      ContactNo: newInfo.target[8].value,
      StudentCode: newInfo.target[9].value,
    };
    console.log("update", body);
    axios
      .put(
        process.env.REACT_APP_API_URL + "/api/student/" + info["_id"],
        body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      }
      )
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ editForm: false });
  };
  handleAddFormGenderChange = (e) => {
    // console.log(e.currentTarget.value);
    this.setState({
      addFormGender: e.currentTarget.value
    });

  };
  handleEditFormGenderChange = (e) => {
    // console.log(e.currentTarget.value);
    // console.log("ggggggggggggggggggggggggggggeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeennnnnnnnnnnnnnnnnnnnnnnnn")
    this.setState({
      editFormGender: e.currentTarget.value
    });

  };
}

export default Student;

