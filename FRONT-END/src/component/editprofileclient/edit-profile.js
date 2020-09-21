import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { getUser } from "../../actions/authenification";
import { connect } from "react-redux";
import EditProfile from "../editprofileclient/EDit";
import Avatar from "react-avatar";
import ScrollUpButton from "react-scroll-up-button";
import Navs from "../navbars";
class Usercard extends Component {
  componentDidMount() {
    this.props.getuser();
  }

  render() {
 

    return (
      <div>
        <Navs user={this.props.user} />

        <div className="container py-5 my-5">
          <section>
            <div className="row d-flex justify-content-center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-body m-3">
                    <div className="row">
                      <div className="col-lg-4 d-flex mb-2 align-items-center">
                        <div className="avatar mx-4 w-100 white d-flex justify-content-center align-items-center">
                          <Avatar
                            name={this.props.user.name}
                            className="rounded-circle img-fluid z-depth-1"
                            alt="woman avatar"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <p className="text-muted font-weight-light mb-4">
                        vous pouvez modifier vos coordonnées.
                        </p>
                        <p className="font-weight-bold lead mb-2">
                          <strong>{this.props.user.name}</strong>
                        </p>
                        <p className="font-weight-bold text-muted mb-0">
                          {" "}
                          {this.props.user.email}
                        </p>
                        <p className="font-weight-bold text-muted mb-0">
                          {" "}
                          {this.props.user.role}
                        </p>
                      </div>
                      <div>
                        <EditProfile />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    getuser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Usercard);
