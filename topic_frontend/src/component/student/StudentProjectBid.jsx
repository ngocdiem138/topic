import React, { Component } from "react";
import "./StudentProjectBid.css";
import axios from "axios";
import StudentProjectBidTable from "./StudentProjectBidTable.jsx";
import StudentProjectBidForm from "./StudentProjectBidForm.jsx";
import StudentProjectBidFormEdit from "./StudentProjectBidFormEdit.jsx";

class StudentProjectBid extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {}
  };

  render() {
    // let value=(this.props.pass) ? undefined : "";<i class="fas fa-plus"></i>
    return (
      //  <Router>
      <React.Fragment>
        {this.state.table ? (
          this.state.editForm ? (
            <StudentProjectBidFormEdit
              onProjectBidEditUpdate={this.handleProjectBidEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
            <StudentProjectBidTable
              onAddProjectBid={this.handleAddProjectBid}
              onEditProjectBid={this.handleEditProjectBid}
            />
          )
        ) : (
          <StudentProjectBidForm
            onProjectBidSubmit={this.handleProjectBidSubmit}
            onFormClose={this.handleFormClose}
          />
        )}
        </React.Fragment>

      //  </Router>
    );
  }
  handleProjectBidSubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {
      ProjectTitle: event.target[0].value,
      ProjectURL: event.target[1].value,
      ProjectDesc:event.target[2].value,
      // Portal_ID:event.target[3].value,
      // EstimatedTime:event.target[4].value,
      // EstimatedCost:event.target[5].value,
      // ResourceID:event.target[6].value,
      Status:event.target[4].value,
      Remark:event.target[5].value,

    
    
    };
    //  let body= "CompanyID=" + event.target[0].value + "&ProjectBid=" + event.target[1].value;
    //  let body= "FenilKaneria";
    axios
      .post(process.env.REACT_APP_API_URL + "/api/student/project-bid", body, {
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
    this.setState({ loading: true });
    // this.login(event.target[0].value, event.target[1].value);
    // event.target.reset();
  };
  handleAddProjectBid = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditProjectBid = e => {
    console.log(e);
    console.log("clicked6");
    this.setState({ editForm: true });
    this.setState({ editData: e });
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
  handleProjectBidEditUpdate = (info,editInfo) => {
    this.setState({ table: true });
    let body = {
      // ...info,CompanyID:formData1,ProjectBid:formData2
      // _id: info["_id"],
      ProjectTitle: editInfo.target[0].value,
      ProjectURL: editInfo.target[1].value,
      ProjectDesc:editInfo.target[2].value,
      // Portal_ID:editInfo.target[3].value,
      // EstimatedTime:editInfo.target[4].value,
      // EstimatedCost:editInfo.target[5].value,
      // ResourceID:editInfo.target[6].value,
      Status:editInfo.target[3].value,
      // Remark:editInfo.target[8].value,
    };
    console.log("update", body);
    axios
      .put(process.env.REACT_APP_API_URL + "/api/student/project-bid/" + info["_id"], body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(res => {
        // this.componentDidMount();
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ editForm: false });
  };
}

export default StudentProjectBid;
