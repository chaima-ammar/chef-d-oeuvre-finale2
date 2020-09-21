import React, { Component } from "react";
 import "../index.css";
import { connect } from "react-redux";
//import {getProduct} from '../actions/vendeur-action'
import { deleteProduct } from "../actions/vendeur-action";
import { editProduct } from "../actions/vendeur-action";
import { editReservation } from "../actions/vendeur-action";
import { getUser } from "../actions/authenification";
import Navs from "./navbars";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import ScrollUpButton from "react-scroll-up-button";


import {
  MDBBtn,
  Link,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import ModalEDit from "../component/modaledit";
import AddCard from "../component/AddCard";
import Axios from "axios";
import { Redirect } from "react-router-dom";

class CardVendeur extends Component {
  state = {
    produit: [],
    page: 1,
    pageSize: 2,
  };

  componentDidMount() {
    //  this.props.getProduct()
    Axios.get("http://localhost:8080/Antica/vendeur/getProduct").then((res) => {
      console.log(res);
      this.setState({ produit: res.data });
      this.props.getuser();
    });
  }


  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };





  render() {
    // if (this.props.user.role !== "vendeur") {
    //   return <Redirect to="/" />;
    // }
    return (
      <>
<div>  <Navs user={this.props.user} /></div>
<div className="">
          <div className="selecte">
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


</div>





        <div className="">
        
          <div className="btn-ajouter">
         <Link className='itemadd'
          to={"/addCards" }
         
           >
          AddCard
            </Link>
            {/* <AddCard /> */}
            </div>
            <div className="cards">
              {this.state.produit
                .filter((el) => el.vendeurId === this.props.user._id)




                .filter((el) => {
                  if (this.state.categories) {
                    return el.categorie.includes(this.state.categories);
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
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard className="bodycard">
                      <div className="button-top">
                         <button
                          className="button-reserve"
                          onClick={() => this.props.editReservation(el)}
                        >
                          vendu
                        </button> 
                     
                      </div>
                      <center>
                      <MDBCardImage
                        className=" image-cardacceuil"
                        src={"http://localhost:8080/" + el.image}
                        waves
                      />
                      </center>
                      <MDBCardBody >
                      <div className="attribu">
                        <MDBCardText className="">
                          <label className="title">
                            <span className=" ">{el.title}</span>
                          </label>
                        </MDBCardText>
                      </div>

                      <div className="attribu">
                        <MDBCardText className="">
                          <label className="prix">
                            <span className=" ">{el.price}</span>
                          </label>
                        </MDBCardText>
                      </div>
                      </MDBCardBody>
                       <div className='buttons'>
                         <div className='buttoneditdetail'>  
                         <div>
                        <Link
                          to={"/Details" + el._id}
                          className="waves-effect  item "
                        >
                          Details
                        </Link>
                     
                        </div>
                        <ModalEDit el={el} />
                      
                      </div>
                       <div>
                      <button
                          className="delete-button"
                          onClick={() => this.props.deleteProduct(el._id)}
                        >
                      <i class="far fa-trash-alt"></i>
                        </button>
                        </div>

                      </div>
                   
                    </MDBCard>
                  </MDBCol>
                ))}
            </div>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <Pagination
              defaultCurrent={1}
              total={this.props. productReducer.length}
              pageSize={2}
              onChange={this.page}
            />
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
  vendeurReducer: state.card,
  productReducer: state.product,
  user: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  //getProduct: ()=> dispatch(getProduct()),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  editProduct: (id) => dispatch(editProduct(id)),
  editReservation: (id) => dispatch(editReservation(id)),
  getuser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardVendeur);
