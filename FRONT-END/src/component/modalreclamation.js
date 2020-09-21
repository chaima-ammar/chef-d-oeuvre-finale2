import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBInput,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { connect } from "react-redux";
import { addReclamation } from "../actions/clientReclamation";
import { getUser } from "../actions/authenification";
class ModalReclamation extends Component {
  state = {
    modal3: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <button className="btn" onClick={this.toggle(3)}>
          reclamation
        </button>
        <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)} size="sm">
          <MDBModalBody>
            <div class="form-group">
              <label for="exampleFormControlTextarea2">
                si vous rencontrer une difficulter merci d'envoyer votre
                reclamation ici
              </label>
              <textarea
                class="form-control rounded-0"
                id="exampleFormControlTextarea2"
                rows="3"
                onChange={(e) => this.setState({ text: e.target.value })}
              ></textarea>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <button color="secondary" onClick={this.toggle(3)}>
              Annuler
            </button>
            <button
              className="button-edite"
              size="sm"
              onClick={() =>
                this.props.addReclamation({
                  text: this.state.text,
                  name: this.props.user.name,
                  email: this.props.user.email,
                  article: this.props.id,
                })
              }
            >
              envoyer
            </button>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
  reclamation: state.reclamation,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addReclamation: (el) => dispatch(addReclamation(el)),
    getuser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalReclamation);
