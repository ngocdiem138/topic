import React, { Component } from "react";
import "./TeacherProjectBidTable.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Button } from "react-bootstrap";


import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class TeacherProjectBidTable extends Component {
  state = {
    projectBidData: [],
    loading: true,

    columnDefs: [
      {
        headerName: "Project Title",
        field: "ProjectTitle",
        sortable: true,
        // width: "300px",
        // filter: true ,
      },
      {
        headerName: "Project URL",
        field: "ProjectURL",
        sortable: true,
        // width: "300px",
        // filter: true ,
      },
      {
        headerName: "Remark",
        field: "Remark",
        sortable: true,
        width: 450,
        // filter: true ,
      },


      {
        headerName: "",
        field: "edit",
        filter: false,
        width: 30,
        cellRendererFramework: this.renderEditButton.bind(this),


      },
    ],
    rowData: [],
    defaultColDef: {
      resizable: true,
      width: 350,
      filter: "agTextColumnFilter"
      // filter: true ,
    },
    getRowHeight: function (params) {
      return 35;
    }
  };
  projectBidObj = [];
  rowDataT = [];

  loadProjectBidData = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/teacher/project-bid", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.projectBidObj = response.data;
        console.log("response", response.data);
        this.setState({ projectBidData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];

        this.projectBidObj.map(data => {
          let temp = {
            data,
            ProjectTitle: data["ProjectTitle"],
            ProjectURL: data["ProjectURL"],
            EstimatedTime: data["EstimatedTime"],
            EstimatedCost: data["EstimatedCost"],
            Remark: data["Remark"],

          };

          this.rowDataT.push(temp);
        });
        this.setState({ rowData: this.rowDataT });
      })
      .catch(error => {
        console.log(error);
      });
  };

  onProjectBidDelete = e => {
    console.log(e);
    if (window.confirm("Are you sure to delete this record? ") == true) {
      axios
        .delete(process.env.REACT_APP_API_URL + "/api/teacher/project-bid/" + e, {
          headers: {
            authorization: localStorage.getItem("token") || ""
          }
        })
        .then(res => {
          this.componentDidMount();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  componentDidMount() {
    this.loadProjectBidData();
  }
  renderButton(params) {
    console.log(params);
    return <FontAwesomeIcon
      icon={faTrash}
      onClick={() => this.onProjectBidDelete(params.data.data["_id"])}
    />;
  }
  renderEditButton(params) {
    console.log(params);
    return <FontAwesomeIcon
      icon={faEdit}
      onClick={() => this.props.onEditProjectBid(params.data.data)}
    />;
  }

  render() {
    return (
      <div id="table-outer-div-scroll">
        <h2 id="role-title">Topic Details</h2>

        <div id="clear-both" />

        {!this.state.loading ? (
          <div
            id="table-div"
            className="ag-theme-balham"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              columnTypes={this.state.columnTypes}
              rowData={this.state.rowData}
              // floatingFilter={true}
              // onGridReady={this.onGridReady}
              pagination={true}
              paginationPageSize={10}
              getRowHeight={this.state.getRowHeight}
            />
          </div>
        ) : (
            <div id="loading-bar">
              <RingLoader
                css={override}
                sizeUnit={"px"}
                size={50}
                color={"#0000ff"}
                loading={true}
              />
            </div>
          )}

      </div>
    );
  }
}

export default TeacherProjectBidTable;
