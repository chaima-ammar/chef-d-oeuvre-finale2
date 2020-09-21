import React, { Component } from "react";
import "../index.css";
import { connect } from "react-redux";
import { getProduct } from "../actions/produitAction";
import { getUser } from "../actions/authenification";
import {getRating} from "../actions/rating"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
  MDBContainer,
} from "mdbreact";
import { Link } from "react-router-dom";
import Log from "./Log";
import Logos from "./logos";
import Nav from "./NAV/nav";
import ScrollUpButton from "react-scroll-up-button";
import { Pagination } from "antd";
import "antd/dist/antd.css";



class Accueil extends Component {
  state = {
    page: 1,
    pageSize: 2,
  };

  componentDidMount() {
    this.props.getProduct();
    this.props.getuser();
    this.props.getRating();
  }

  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };

  render() {
    const tab = [
      { value: "Ariana", contenue: "Ariana" },
      { value: "Béja", contenue: "Béja" },
      { value: "Ben Arous", contenue: "Ben Arous" },
      { value: "bizerte", contenue: "bizerte" },
      { value: "Gabès", contenue: "Gabès" },
      { value: "Gafsa", contenue: "Gafsa" },
      { value: "Jendouba", contenue: "Jendouba" },
      { value: "Kairouan", contenue: "Kairouan" },
      { value: "Kasserine", contenue: "Kasserine" },
      { value: "Kébili", contenue: "Kébili" },
      { value: "Kef", contenue: "Kef" },
      { value: "Mahdia", contenue: "Mahdia" },
      { value: "Manouba", contenue: "Manouba" },
      { value: "Médenine", contenue: "Médenine" },
      { value: "Monastir", contenue: "Monastir" },
      { value: "Nabeul", contenue: "Nabeul" },
      { value: "Sfax", contenue: "Sfax" },
      { value: "Sidi Bouzid", contenue: "Sidi Bouzid" },
      { value: "Siliana", contenue: "Siliana" },
      { value: "Sousse", contenue: "Sousse" },
      { value: "Tataouine", contenue: "Tataouine" },
      { value: "Tozeur", contenue: "Tozeur" },
      { value: "Tunis", contenue: "Tunis" },
      { value: "Zaghouan", contenue: "Zaghouan" },
    ];

    const tab2 = [
      ,
      { value: "XVIIIe siècle", contenue: "XVIIIe siècle" },

      { value: "XVIIe siècle", contenue: "XVIIe siècle" },
      { value: "  XIXe siècle", contenue: " XIXe siècle" },
    ];

    return (
      <div>
        <div>
          <Nav user={this.props.user} />
        </div>

        <div className="select">
          <div className="divselect">
            <select
              placeholder="categorie"
              style={{ width: 180 }}
              className=" custom-select selects"
              name="categorie"
              type="select"
              onChange={(value) => {
                this.setState({ categories: value.target.value });
              }}
              allowClear
            >
              <option value="">Categorie</option>
              <option value="mobilier">mobilier</option>
              <option value="sièges">sièges</option>
              <option value="collection">collection</option>
            </select>
          </div>
          <div className="divselect2">
            <select
              style={{ width: 200 }}
              name="gouvernorat"
              className="browser-default custom-select selects"
              type="select"
              onChange={(value) => {
                this.setState({ searchGouvernorat: value.target.value });
              }}
              allowClear
            >
              <option value="">Provenance</option>
              {tab.map((el) => (
                <option value={el.contenue}>{el.contenue}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              style={{ width: 200 }}
              name="gouvernorat"
              className="browser-default custom-select selects"
              type="select"
              onChange={(value) => {
                this.setState({ epoques: value.target.value });
              }}
              allowClear
            >
              <option value="">Epoque</option>
              {tab2.map((el) => (
                <option value={el.contenue}>{el.contenue}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <div className="cards">
            {this.props.productReducer

              .filter((el) => {
                if (this.state.categories) {
                  return el.categorie.includes(this.state.categories);
                } else {
                  return el;
                }
              })

              .filter((el) => {
                if (this.state.searchGouvernorat) {
                  return el.provenance.includes(this.state.searchGouvernorat);
                } else {
                  return el;
                }
              })

              .filter((el) => {
                if (this.state.epoques) {
                  return el.epoque.includes(this.state.epoques);
                } else {
                  return el;
                }
              })

              .filter(
                (x, E) =>
                  (this.state.page - 1) * this.state.pageSize <= E &&
                  E < this.state.page * this.state.pageSize
              )

              .map((el) => (
                <div className="cards">
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard className="body-card">
                      <span className="button-reserve">{el.vendu}</span>
                      <center>
                        <MDBCardImage
                          className=" image-cardacceuil"
                          src={"http://localhost:8080/" + el.image}
                          waves
                        />
                      </center>
                      <MDBCardBody>
                        <div className="attribu">
                          <MDBCardText className="">
                            <label className="title">
                              {" "}
                              <span className=" ">{el.title}</span>
                            </label>
                          </MDBCardText>
                        </div>

                        {/* <div className="attribu">
                    <MDBCardText className="">
                      <label className="title">
                        {" "}
                        categorie:
                        <span className=" ">{el.categorie}</span>
                      </label>
                    </MDBCardText>
                  </div> */}

                        <div className="attribu">
                          <MDBCardText className="">
                            <label className="title">
                              {" "}
                              <span className="">{el.price}</span>
                            </label>
                          </MDBCardText>
                        </div>
                      </MDBCardBody>

                      {this.props.user.role ? (
                        <div className="button">
                          <Link
                            to={"/Details" + el._id}
                            className="waves-effect  item active"
                          >
                            Details
                          </Link>
                        </div>
                      ) : (
                     
                         <p className='phrase'>pour plus de détails il faut créé un compte !</p>
                      )}


                 
                    </MDBCard>
                
                  </MDBCol>
           
                </div>
              ))}
          </div>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <Pagination
              defaultCurrent={1}
              total={this.props.productReducer.length}
              pageSize={2}
              onChange={this.page}
            />
          </div>

          <h5 class="font-weight-normal border-top border-secondary pt-4 mb-4">
            <Logos />
          </h5>

          <h5 class="font-weight-normal border-top border-secondary pt-4 mb-4">
            <Log />
          </h5>

          <div>
            <ScrollUpButton />
          </div>
        </div>
     
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productReducer: state.product,
  user: state.auth,
  ratingReducer:state.rating,
});
const mapDispatchToProps = (dispatch) => ({
  getProduct: (e) => dispatch(getProduct(e)),
  getuser: () => dispatch(getUser()),
  getRating:()=> dispatch(getRating()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
