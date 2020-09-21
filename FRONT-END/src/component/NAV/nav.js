import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "../Sign-up/signup";
import SignIn from "./../login/signin";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  Link,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
  MDBCardTitle,
} from "mdbreact";
import "./nav.css";
import { connect } from "react-redux";
import { getUser, logout } from "../../actions/authenification";
class Nav extends React.Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getUser();
  }

  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <div>
          <MDBNavbar
            color="black"
            dark
            expand="md"
            fixed="top"
            scrolling
            transparent
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <img
                  className="logo"
                  src="logotrans.png"
                  width="100px"
                  height="70px"
                  alt="antique logo"
                ></img>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.handleTogglerClick} />
              <MDBCollapse isOpen={this.state.collapsed} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to="/" className="waves-effect  item ">
                      <i class="fas fa-home"></i>
                      Acceuil
                    </MDBNavLink>
                  </MDBNavItem>

                  {this.props.profil.role === "vendeur" ? (
                    <MDBNavItem className="item">
                      <MDBNavLink to="/vendeur" className="waves-effect  item ">
                        Profile
                      </MDBNavLink>
                    </MDBNavItem>
                  ) : (
                    ""
                  )}

                  {this.props.profil.role === "Admin" ? (
                    <MDBNavItem>
                      <MDBNavLink to="/Admin" className="waves-effect  item  ">
                        Profile
                      </MDBNavLink>
                    </MDBNavItem>
                  ) : (
                    ""
                  )}

                  {this.props.profil.role === "client" ? (
                    <MDBNavItem>
                      <MDBNavLink
                        to="/editprofileclient"
                        className="waves-effect  item active"
                      >
                        Profile 
                      </MDBNavLink>
                    </MDBNavItem>
                  ) : (
                    ""
                  )}

                  <MDBNavItem>
                    <MDBNavLink
                      to="/contact"
                      className="waves-effect  item active"
                    >
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      to="/galerie"
                      className="waves-effect  item active"
                    >
                      Galerie
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0"></div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {this.state.collapsed && overlay}
        </div>

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold  titrenav">
                      Antica
                    </h1>
                    <hr className="hr-light" />
                    <div className=" textnav">
                      Notre boutique est spécialiser dans la vente des articles
                      Antiques ,nos vous proposons un large choix de meubles de
                      bibelots et d'argenterie.
                    </div>
                    <br />
                    <div className="nav-item pl-2 mb-2 mb-md-0">
                      {this.props.profil.role ? (
                        <button
                          type="button"
                          className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light"
                          onClick={this.props.logout}
                        >
                          deconnexion
                        </button>
                      ) : (
                        <div className="links">
                          <MDBNavLink
                            to="/signin"
                            className="waves-effect  items"
                          >
                            connexion
                          </MDBNavLink>
                          <MDBNavLink
                            to="/signup"
                            className="waves-effect  items "
                          >
                            inscription
                          </MDBNavLink>
                        </div>
                      )}
                    </div>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img src="threya.jpg" alt="" className="img-fluid" />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        {/* <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer> */}
      </div>
    );
  }
}

const mapstateToprops = (state) => ({
  profil: state.auth,
});
export default connect(mapstateToprops, { getUser, logout })(Nav);

// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarNav,
//   MDBNavItem,
//   Link,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBMask,
//   MDBRow,
//   MDBCol,
//   MDBBtn,
//   MDBView,
//   MDBContainer,
//   MDBFormInline,
//   MDBAnimation
// } from "mdbreact";
// import "./nav.css";
// import SignIn from "../login/signin";
// import SignUp from "../Sign-up/sign-up";
// import { connect } from "react-redux";
// import { getUser, logout } from "../../actions/authenification";

// class Nav extends React.Component {

//   componentDidMount() {
//     this.props.getUser();
//   }

//   state = {
//     collapsed: false
//   };

//   handleTogglerClick = () => {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   };

//   render() {
//     const overlay = (
//       <div
//         id="sidenav-overlay"
//         style={{ backgroundColor: "transparent" }}
//         onClick={this.handleTogglerClick}
//       />
//     );
//     return (
//       <div id="apppage">

//           <div>
//             <MDBNavbar
//               color=""
//               dark
//               expand="md"
//               fixed="top"
//               scrolling
//               transparent
//             >
//               <MDBContainer>
//                 <MDBNavbarBrand>
//                 <a className="navbar-brand" href="#!">
//             <img
//               className="logo"
//               src="logotrans.png"
//               width="150px"
//               height="70px"
//               alt="antique logo"
//             ></img>
//           </a>

//                 </MDBNavbarBrand>
//                 <MDBNavbarToggler onClick={this.handleTogglerClick} />
//                 <MDBCollapse isOpen={this.state.collapsed} navbar>
//                 <ul className="breadcrumb">
//             <li className="breadcrumb-item active">
//               <a className=" item" href="#!">
//                 <Link to="/" className="waves-effect  item active">
//                   Acceuil
//                 </Link>
//               </a>
//             </li>

//             {this.props.profil.role === "vendeur" ? (
//               <li className="breadcrumb-item ">
//                 <a className="item" href="#!">
//                   <Link to="/vendeur" className="waves-effect  item ">
//                     profile
//                   </Link>
//                 </a>
//               </li>
//             ) : (
//               ""
//             )}
//             {this.props.profil.role === "Admin" ? (
//               <>
//                 <li className="breadcrumb-item ">
//                   <a className="item" href="#!">
//                     <Link to="/Admin" className="waves-effect  item ">
//                       Page admin
//                     </Link>
//                   </a>
//                 </li>
//                 <li className="breadcrumb-item ">
//                   <a className="item" href="#!">
//                     <Link to="/Allpublication" className="waves-effect  item ">
//                       Tous les publications
//                     </Link>
//                   </a>
//                 </li>{" "}
//               </>
//             ) : (
//               ""
//             )}

//               <li className="breadcrumb-item active">
//               <a className=" item" href="#!">
//                 <Link to="/contact" className="waves-effect  item active">
//                   Contact
//                 </Link>
//               </a>
//             </li>

//           </ul>

//                   <MDBNavbarNav right>
//                     <MDBNavItem>

//                     </MDBNavItem>
//                   </MDBNavbarNav>
//                 </MDBCollapse>
//               </MDBContainer>
//             </MDBNavbar>
//             {this.state.collapsed && overlay}
//           </div>

//         <MDBView>
//           <MDBMask className="d-flex justify-content-center align-items-center gradient">
//             <MDBContainer>
//               <MDBRow>
//                 <MDBCol
//                   md="6"
//                   className="white-text text-center text-md-left mt-xl-5 mb-5"
//                 >
//                   <MDBAnimation type="fadeInLeft" delay=".3s">
//                     <h1 className="h1-responsive font-weight-bold mt-sm-5 titre-nav">
//                        Antica
//                     </h1>
//                     <hr className="hr-light" />
//                     <h6 className="mb-4">
//                     Notre boutique est spécialiser dans la vente des articles
//                     Antiques ,nos vous proposons un large choix de meubles de bibelots et d'argenterie.
//                     </h6>
//                     <div  className='nav-item pl-2 mb-2 mb-md-0'>
//                     {this.props.profil.role ? (
//                 <button
//                   type="button"
//                   className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light"
//                   onClick={this.props.logout}
//                 >
//                   deconnexion
//                 </button>
//               ) : (
//                 <li className="nav-item pl-2 mb-2 mb-md-0">
//                   <SignIn />

//                   <SignUp />
//                 </li>
//               )}

//                     </div>
//                   </MDBAnimation>
//                 </MDBCol>

//                 <MDBCol md="6" xl="5" className="mt-xl-5">
//                   <MDBAnimation type="fadeInRight" delay=".3s">
//                     <img
//                       src="photo.png"
//                       alt=""
//                       className="img-fluid"
//                     />
//                   </MDBAnimation>
//                 </MDBCol>
//               </MDBRow>
//             </MDBContainer>
//           </MDBMask>
//         </MDBView>

//         <MDBContainer>
//           <MDBRow className="py-5">
//             <MDBCol md="12" className="text-center">
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
//                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//                 sunt in culpa qui officia deserunt mollit anim id est laborum.
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </div>
//     );
//   }
// }

// const mapstateToprops = (state) => ({
//   profil: state.auth,
// });
// export default connect(mapstateToprops, { getUser, logout })(Nav);
