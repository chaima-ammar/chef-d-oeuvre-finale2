import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBAnimation,
  MDBCardTitle,
} from "mdbreact";
import { Link, Redirect } from "react-router-dom";
import { MDBInput } from "mdbreact";
import { AddProduct, addProduct } from "../actions/vendeur-action";
import { connect } from "react-redux";
import axios from "axios";
import "../index.css";
import { getUser } from "../actions/authenification";
import Navs from "./navbars";
class AddCards extends Component {
  componentDidMount() {
    this.props.getuser();
  }

  state = {
    selectedFile: [],
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
    this.props.getuser();
  }

  render() {
   
    return (
      <>
        <Navs user={this.props.user} />
        <MDBCardTitle className="titre-addcarte">Ajouter produit</MDBCardTitle>
        <MDBContainer className="container-add">
          <MDBModalBody>
            <MDBInput
              label="Titre"
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <MDBInput
              label="Prix"
              onChange={(e) => this.setState({ price: e.target.value })}
            />

            <MDBInput
              label="Categorie"
              onChange={(e) => this.setState({ categorie: e.target.value })}
            />

            <MDBInput
              label="Telephone"
              onChange={(e) => this.setState({ telephone: e.target.value })}
            />
            <MDBInput
              label="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <MDBInput
              label="Nomboutique"
              onChange={(e) => this.setState({ nomboutique: e.target.value })}
            />

            <MDBInput
              label="Epoque"
              onChange={(e) => this.setState({ epoque: e.target.value })}
            />
            <MDBInput
              label="Provenance"
              onChange={(e) => this.setState({ provenance: e.target.value })}
            />
            <MDBInput
              label="Materiaux"
              onChange={(e) => this.setState({ materiaux: e.target.value })}
            />

            <MDBInput
              label="Dimensions"
              onChange={(e) => this.setState({ dimensions: e.target.value })}
            />

            <div class="form-group">
              <label for="exampleFormControlTextarea2">Description</label>
              <textarea
                class="form-control rounded-0"
                id="exampleFormControlTextarea2"
                rows="3"
                onChange={(e) => this.setState({ description: e.target.value })}
              ></textarea>
            </div>

            <MDBInput
              type="file"
              onChange={(e) => this.fileSelectedHandler(e)}
              outline
            />

            <button
              color="dark"
              onClick={() => this.uploadHandler()}
              className="btn-telecharger"
            >
              telecharger l'image
            </button>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="dark"
              tag={Link}
              to="/vendeur"
              className="btn-add"
              onClick={() =>
                this.props.AddProduct({
                  title: this.state.title,
                  image: this.state.selectedFile.name,
                  price: this.state.price,
                  categorie: this.state.categorie,
                  telephone: this.state.telephone,
                  email: this.state.email,
                  nomboutique: this.state.nomboutique,
                  description: this.state.description,
                  epoque: this.state.epoque,
                  provenance: this.state.provenance,
                  materiaux: this.state.materiaux,
                  dimensions: this.state.dimensions,
                  vendeurId: this.props.user._id,
                })
              }
            >
              ajouter carte
            </MDBBtn>
          </MDBModalFooter>
        </MDBContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    AddProduct: (el) => dispatch(addProduct(el)),
    getuser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCards);
