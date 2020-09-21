import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import { getProduct } from "../actions/produitAction";
import { connect } from "react-redux";
import { getUser } from "../actions/authenification";
import Navs from "./navbars";
import ModalReclamation from "../component/modalreclamation";
import "../index.css";
import RaitingFilter from "./rating";
import ScrollUpButton from "react-scroll-up-button";

class Details extends Component {
  componentDidMount() {
    // this.props.getProduct();
    this.props.getuser();
  }

  render() {




    
    return (
      <>
        <div className="">
          <Navs user={this.props.user} />

          <div class="container my-5 py-5 z-depth-1">
            <section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
              <div class="row">
                <div class="col-md-6 mb-4 mb-md-0">
                  <h3 class="font-weight-bold">{this.props.el.title}</h3>

                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                        {" "}
                        Categorie:
                        <span className="styel-texts">
                          {this.props.el.categorie}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>

                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                        {" "}
                        Boutique:
                        <span className="styel-texts">
                          {this.props.el.nomboutique}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>

                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                        Epoque:
                        <span className="styel-texts">
                          {this.props.el.epoque}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>

                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                        {" "}
                        Provenance:
                        <span className="styel-texts">
                          {this.props.el.provenance}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>
                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                        {" "}
                        Materiaux:
                        <span className="styel-texts">
                          {this.props.el.materiaux}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>
                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                        Dimensions:
                        <span className="styel-texts">
                          {this.props.el.dimensions}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>
                  <div className="attribu">
                    {/* <p className='fonts'> Contacter par :</p> */}
                    <MDBCardText className="style">
                      <label className="font">
                        {" "}
                        telephone:
                        <span className="styel-texts">
                          {this.props.el.telephone}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>
                  <div className="attribu">
                    <MDBCardText className="style">
                      <label className="font">
                        {" "}
                        Email:
                        <span className="styel-texts">
                          {this.props.el.email}
                        </span>
                      </label>
                    </MDBCardText>
                  </div>

                  <p class="text-muted"> {this.props.el.description}</p>

                  {/* <a class="btn btn-purple btn-md ml-0" href="#" role="button">Start now<i class="fa fa-gem ml-2"></i></a> */}
                  {this.props.user.role !== "vendeur" ? (
                    <ModalReclamation id={this.props.el._id} />
                  ) : (
                    ""
                  )}
                </div>

                <div class="col-md-6 mb-4 mb-md-0">
                  <div class="view overlay z-depth-1-half">
                    <img
                      src={"http://localhost:8080/" + this.props.el.image}
                      class="img-fluid"
                      alt=""
                    />
                    <a href="#">
                      <div class="mask rgba-white-light"></div>
                    </a>
                  </div>
                </div>
              </div>
              {/* {this.props.user.role !== "vendeur" ? (
                <RaitingFilter
                  iduser={this.props.user._id}
                  idproduit={this.props.el._id}
                />
              ) : (
                ""
              )} */}
            </section>
          </div>
        </div>
        <div>
          <ScrollUpButton />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  productReducer: state.product,

  user: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  //getProduct: (e) => dispatch(getProduct(e)),
  getuser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
