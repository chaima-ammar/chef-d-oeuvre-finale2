import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { getUser, logout } from "../actions/authenification";
import { connect } from "react-redux";
import Avatar from "react-avatar";
import "./../index.css";

class Navs extends Component {
  componentDidMount() {
    this.props.getuser();
  }

  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="" dark expand="md">
        <MDBNavbarBrand>
          <img
            className="logo"
            src="logotrans.png"
            width="100px"
            height="70px"
            alt="antique logo"
          ></img>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/" className="waves-effect item">
                <i class="fas fa-home"></i>Acceuil
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/contact" className="waves-effect item">
                contact
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right className="nav-left barnav">
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="https://www.facebook.com/cheimaa2020">
                <MDBIcon fab icon="fab fa-facebook-f " />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="https://www.instagram.com/ ">
                <MDBIcon fab icon="fab fa-instagram" />

              
              </MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user">{this.props.user.name}</MDBIcon>
                </MDBDropdownToggle>

                <MDBDropdownMenu className="dropdown-default">
                  {this.props.profil.role === "vendeur" ? (
                    <>

                         <MDBDropdownItem href="/vendeur">
                        <i class="fas fa-user">espace vendeur</i>
                      </MDBDropdownItem>
                      <MDBDropdownItem href="./Home">
                        <i class="fas fa-user">profile</i>
                      </MDBDropdownItem>
                      <MDBDropdownItem href="./Reclamation">
                        <i class="fas fa-exclamation">reclamation</i>
                      </MDBDropdownItem>
                    </>
                  ) : (
                    ""
                  )}
                  {this.props.profil.role === "Admin" ? (
                    <>
                      <MDBDropdownItem href="/Admin">
                      gestion clients
                      </MDBDropdownItem>
                      <MDBDropdownItem href="/Chart"> gestion users</MDBDropdownItem>
                      {/* <MDBDropdownItem href="/Allpublication">
                        Tous les publications
                      </MDBDropdownItem> */}
                    </>
                  ) : (
                    ""
                  )}


{this.props.profil.role === "client" ? (
                    <>
                      <MDBDropdownItem href="/editprofileclient">
                      espace client
                      </MDBDropdownItem>
                     
                    </>
                  ) : (
                    ""
                  )}




                  {this.props.profil.role ? (
                    <MDBDropdownItem>
                      <i
                        style={{ transform: "translatex(-15px" }}
                        onClick={this.props.logout}
                        class="fas fa-sign-out-alt"
                      >
                        deconnexion
                      </i>
                    </MDBDropdownItem>
                  ) : (
                    ""
                  )}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
  profil: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getuser: () => dispatch(getUser()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navs);
