import React, { Component } from "react";
import {
  MDBModalBody,
  MDBModalFooter,
  MDBCol,
  MDBBtn,
  MDBCardTitle,
} from "mdbreact";
import { MDBInput } from "mdbreact";
import "../../index.css";
import "../login/sigin.css";
import { login } from "../../actions/authenification";
import { connect } from "react-redux";
import Navs from "../navbars";
import { getUser } from "../../actions/authenification";
import { Redirect } from "react-router-dom";
class SignIn extends Component {
  componentDidMount() {
    this.props.getuser();
  }

  state = {
    email: "",
    password: "",
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    if (this.props.user.role) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div>
          {" "}
          <Navs user={this.props.user} />
        </div>
        <MDBCardTitle className="titre">CONNEXION</MDBCardTitle>

        <MDBModalBody className="background-sigin">
          <div className="grey-text inputs">
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <MDBCol md="4" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterConfirmEx3"
                  className="grey-text"
                >
                  Email
                </label>
                <input
                  onChange={this.handleChangeEmail}
                  type="email"
                  id="defaultFormRegisterConfirmEx3"
                  className="form-control"
                  name="email"
                  placeholder="entrer votre adress email"
                />
              </MDBCol>

              <MDBCol md="4" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text"
                >
                  mot de passe
                </label>
                <input
                  onChange={this.handleChangePassword}
                  type="password"
                  id="defaultFormRegisterPasswordEx4"
                  className="form-control"
                  name="password"
                  placeholder=" mot de passe"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
            </form>
          </div>
          <div className="text-center">
            <MDBBtn
              color="dark"
              className="button-signin"
              onClick={() =>
                this.props.login({
                  email: this.state.email,
                  password: this.state.password,
                })
              }
            >
              Se connecter
            </MDBBtn>
          </div>
        </MDBModalBody>
        <MDBModalFooter className="mx-5 pt-3 mb-1">
          <p className="font-small grey-text d-flex justify-content-end">
            Not a member?
            <a href="/signup" className="blue-text ml-1">
              Sign Up
            </a>
          </p>
        </MDBModalFooter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (el) => dispatch(login(el)),
  getuser: () => dispatch(getUser()),
});
const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
