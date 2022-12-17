import React, { Component } from "react";
import "./TeacherProjectBid.css";
import axios from "axios";
import TeacherProjectBidTable from "./TeacherProjectBidTable.jsx";
import TeacherProjectBidForm from "./TeacherProjectBidForm.jsx";
import TeacherProjectBidFormEdit from "./TeacherProjectBidFormEdit.jsx";

class TeacherProjectBid extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {}
  };

  render() {
    return (
      <React.Fragment>
        {this.state.table ? (
          this.state.editForm ? (
            <TeacherProjectBidFormEdit
              onProjectBidEditUpdate={this.handleProjectBidEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}
            />
          ) : (
            <TeacherProjectBidTable
              onAddProjectBid={this.handleAddProjectBid}
              onEditProjectBid={this.handleEditProjectBid}
            />
          )
        ) : (
          <TeacherProjectBidForm
            onProjectBidSubmit={this.handleProjectBidSubmit}
            onFormClose={this.handleFormClose}
          />
        )}

        </React.Fragment>
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
      Status:event.target[4].value,
      Remark:event.target[5].value,
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/api/admin/project-bid", body, {
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
    let body = {
      ProjectTitle: editInfo.target[0].value,
      ProjectURL: editInfo.target[1].value,
      ProjectDesc:editInfo.target[2].value,
      Status:editInfo.target[3].value,
      Remark:editInfo.target[4].value,
    };
    console.log("update", body);
    axios
      .put(process.env.REACT_APP_API_URL + "/api/teacher/project-bid/" + info["_id"], body, {
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

export default TeacherProjectBid;
