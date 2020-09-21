import React, { Component } from 'react'
import "./galerie.css"
import { connect } from "react-redux";
import {getProduct} from '../../actions/vendeur-action';
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import Flip from 'react-reveal/Flip';
import Nav from "../NAV/nav";
 class galerie extends Component {

  componentDidMount() {
   this.props.getProduct()
  
    }
 






    render() {
        return (
    <>    
     <div>
          <Nav user={this.props.user} />
        </div> 
  <Flip left>  
<div className="cc">
{this.props.productReducer
 .map((el) => 
 <div  >
          
        <div>
          

          <img className="ff" src={"http://localhost:8080/" + el.image}  />
          </div>
        













        
        
      </div>
      )}
      
</div>
</  Flip >  
    </>
        )}}

        

















                
                
           
const mapStateToProps = (state) => ({
  productReducer: state.product,

  
});
const mapDispatchToProps = (dispatch) => ({
  getProduct: (e) => dispatch(getProduct(e)),

});

export default connect(mapStateToProps, mapDispatchToProps)(galerie);