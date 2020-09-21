import React, { Component } from "react";
import "../component/ADMIN/dshbord.css";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import { getUser } from "../actions/authenification";
import { getReclamation } from "../actions/clientReclamation";
import { deletereclamation } from "../actions/clientReclamation";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import Navs from "../component/navbars";
import ScrollUpButton from "react-scroll-up-button";

class Reclamation extends Component {
  state = {
    page: 1,
    pageSize: 2,
  };

  componentDidMount() {
    this.props.getuser();
    this.props.getReclamation();
  }

  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };

  render() {
  
    return (
      <div className="tbb">
        <div className="">
          <Navs user={this.props.user} />
        </div>

        <div className="table mt-5">
          <table className="tb">
            <thead className="attribut">
              <tr>
                <th scope="col">Nom</th>

                <th scope="col">Email</th>
                <th scope="col">Reclamations</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.reclamation

                .filter(
                  (x, E) =>
                    (this.state.page - 1) * this.state.pageSize <= E &&
                    E < this.state.page * this.state.pageSize
                )

                .map((el) => (
                  <tr>
                    <td>{el.name}</td>

                    <td>{el.email}</td>

                    <td>{el.text}</td>
                    <td>
                      <img
                        src={"http://localhost:8080/" + el.article.image}
                        width="50px"
                      />
                    </td>
                    <td>
                      <button
                        className="del-b"
                        onClick={() => this.props.deletereclamation(el._id)}
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <Pagination
              defaultCurrent={1}
              total={this.props.reclamation.length}
              pageSize={2}
              onChange={this.page}
            />
          </div>
        </div>
        <div>
          <ScrollUpButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
  reclamation: state.reclamation,
});
const mapDispatchToProps = (dispatch) => ({
  getuser: () => dispatch(getUser()),
  getReclamation: () => dispatch(getReclamation()),
  deletereclamation: (id) => dispatch(deletereclamation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reclamation);
