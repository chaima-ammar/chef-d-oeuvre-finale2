import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { MDBInput } from "mdbreact";
import { getUser } from "../../actions/authenification";
import { connect } from "react-redux";
import "../../index.css";
import { editProfile } from "../../actions/authenification";
import axios from "axios";


class EditProfile extends Component {
  state = {
    _id: this.props.user._id,
    name: this.props.user.name,
    pass: "",
    email: this.props.user.email,
    role: this.props.user.role,
    password: this.props.user.password,
    selectedFile: [],
    modal: false,
  };

  fileSelectedHandler = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  uploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile);
    axios
      .post("http://localhost:8080/", fd)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.props.getUser();
  }

  handelchangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  handelchangeImage = (e) => {
    this.setState({ image: e.target.value });
  };
  handelchangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  handelchangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handelchangeNew = (e) => {
    this.setState({ pass: e.target.value });
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,

      _id: this.props.user._id,
      name: this.props.user.name,
      email: this.props.user.email,
      password: "",
    });
  };

  render() {

  

    
    return (
      <MDBContainer>
        <button onClick={this.toggle} className="btn-edit">
          {" "}
          <i class="far fa-edit">EDIT</i>{" "}
        </button>

        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="body-edit"
        >
          <MDBModalHeader toggle={this.toggle} className="titre-addcarte">
            Modifer profile
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              label="name"
              valueDefault={this.props.user.name}
              onChange={(e) => this.handelchangeName(e)}
            />

            <MDBInput
              label="password"
              onChange={(e) => this.handelchangePassword(e)}
            />
            <MDBInput
              label="New password"
              onChange={(e) => this.handelchangeNew(e)}
            />
            <MDBInput
              label="email"
              valueDefault={this.props.user.email}
              onChange={(e) => this.handelchangeEmail(e)}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="black"
              className="btn-telecharger"
              onClick={this.toggle}
            >
              fermer
            </MDBBtn>
            <MDBBtn
              color="black"
              className="btn-telecharger"
              onClick={() =>
                this.props.editProfil({
                  _id: this.state._id,
                  name: this.state.name,
                  email: this.state.email,
                  password: this.state.password,
                  newPassword: this.state.pass,
                  role: this.state.role,
                })
              }
            >
              {" "}
              enregistrer
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  editProfil: (id) => dispatch(editProfile(id)),
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
