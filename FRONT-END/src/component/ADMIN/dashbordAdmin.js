import React, { Component } from "react";
import "../ADMIN/dshbord.css";
import { getAllUser } from "../../actions/userAction";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/userAction";
import { MDBDataTable } from "mdbreact";
import { getUser } from "../../actions/authenification";
import Navs from "../navbars";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { Redirect } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

class PageAdmin extends Component {
  state = {
    role: "",
    roles: "ALL",
    page: 1,
    pageSize: 4,
  };

  componentDidMount() {
    this.props.getAllUser();
    this.props.getuser();
  }

  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };

  render() {
    const users = this.props.userReducer.filter((el) => el.role === "vendeur");

    return (
      <>
        <div className="tbb">
          <div className="">
            <Navs user={this.props.user} />
          </div>

          <div className="table mt-5">
            <table className="tb">
              <thead className="attribut">
                <tr>
                  <th scope="col">Nom</th>
                  <th scope="col">Role</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter(
                    (x, E) =>
                      (this.state.page - 1) * this.state.pageSize <= E &&
                      E < this.state.page * this.state.pageSize
                  )

                  .map((el) => (
                    <tr>
                      <td>{el.name}</td>

                      <td>{el.role}</td>

                      <td>{el.email}</td>
                      <td>
                        <button
                          className="del-b"
                          onClick={() => this.props.deleteUsers(el._id)}
                        >
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <Pagination
            defaultCurrent={1}
            total={this.props.userReducer.length}
            pageSize={4}
            onChange={this.page}
          />
        </div>
        <div>
          <ScrollUpButton />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userReducer: state.users,
  user: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  getAllUser: () => dispatch(getAllUser()),
  deleteUsers: (id) => dispatch(deleteUser(id)),
  getuser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageAdmin);
