import React, { Component } from "react";
import axios from "axios";

import { Form, Button, Col, Row } from "react-bootstrap";

class StudentForm extends Component {
  state = {
    roleData: [],
    positionData: [],
    departmentData: [],
    code: "",
    role: "1",
    email: "",

  }

  loadRoleInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/role", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ roleData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadPositionInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/position", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ positionData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadDepartmentInfo = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/department", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ departmentData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentWillMount() {
    this.loadRoleInfo();
    this.loadPositionInfo();
    this.loadDepartmentInfo();
  }
  handleCodeChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    if (name == "code") {
      if (value == "") {
        this.setState({ email: "" })
      }
      else if (this.state.role == 3) {
        this.setState({ email: value + "@student.hcmute.edu.vn" })
      }
      else if (this.state.role == 2) {
        this.setState({ email: value + "@admin.hcmute.edu.vn" })
      }
      else {
        this.setState({ email: value + "@teacher.hcmute.edu.vn" })
      }
    } else if (name == "role") {
      if (this.state.code == "") {
        this.setState({ email: "" })
      }
      else if (value == 3) {
        this.setState({ email: this.state.code + "@student.hcmute.edu.vn" })
      }
      else if (value == 2) {
        this.setState({ email: this.state.code + "@admin.hcmute.edu.vn" })
      }
      else {
        this.setState({ email: this.state.code + "@teacher.hcmute.edu.vn" })
      }
    }
  };

  render() {
    return (
      <div>
        <h2 id="role-form-title">Add Account Details</h2>
        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onEmployeeSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  disabled={true}
                  value={this.state.email}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} >
              <Form.Label column sm={2}>
                Account access
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" required onChange={this.handleCodeChange} name="role">
                  <option value="1">Teacher</option>
                  <option value="2">Admin</option>
                  <option value="3">Student</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  value="male"
                  name="gender"
                  onChange={this.props.onGenderChange}
                  required
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  value="female"
                  name="gender"
                  onChange={this.props.onGenderChange}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                First Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Middle Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Middle Name"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Last Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Last Name"

                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                DOB
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  placeholder="DOB"
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Contact No
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="number"
                  min={0}
                  placeholder="Contact No "
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Student/Teacher/Student Code
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  name="code"
                  type="number"
                  min={0}
                  placeholder="Student/Teacher/Student Code"
                  value={this.state.code}
                  onChange={this.handleCodeChange}
                  required
                />
              </Col>
            </Form.Group>




            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-cancel-button">
              <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                <Button type="reset" onClick={this.props.onFormClose}>
                  cancel
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>

        {/* </div>
        </div> */}
      </div>
    );
  }
}

export default StudentForm;
