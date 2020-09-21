
import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput } from "mdbreact";
import {editProduct}from '../actions/vendeur-action';
import { connect } from 'react-redux';
import "../index.css";
class ModalEDit extends Component {
state = {
 

id:this.props.el._id,
title:this.props.el.title,
image:this.props.el.image,
price:this.props.el.price,
contact:this.props.el.contact,
telephone:this.props.el.telephone,
email:this.props.el.email,
categorie:this.props.el.categorie,
nomboutique:this.props.el.nomboutique,
description:this.props.el.description,
epoque:this.props.el.epoque,
epoque:this.props.el.provenance,
epoque:this.props.el.materiaux,
epoque:this.props.el.dimension,


modal: false,
}


handelchangeTitle=(e)=>{ this.setState({title:e.target.value})}
handelchangePrice=(e)=>{this.setState({price:e.target.value})}
handelchangeImage=(e)=>{this.setState({image:e.target.value})}
handelchangeTelephone=(e)=>{this.setState({telephone:e.target.value})}
handelchangeEmail=(e)=>{this.setState({email:e.target.value})}
handelchangeNomboutique=(e)=>{this.setState({nomboutique:e.target.value})}
handelchangeCategorie=(e)=>{this.setState({categorie:e.target.value})}
handelchangeDescription=(e)=>{this.setState({description:e.target.value})}
handelchangeEpoque=(e)=>{this.setState({epoque:e.target.value})}
handelchangeProvenance=(e)=>{this.setState({provenance:e.target.value})}
handelchangeMateriaux=(e)=>{this.setState({materiaux:e.target.value})}
handelchangeDimension=(e)=>{this.setState({dimension:e.target.value})}


toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer> 
    <button onClick={this.toggle} className='btn-edite'> <i class="fas fa-user-edit"></i> </button>
     
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} className='body-edit'>
        <MDBModalHeader toggle={this.props.editProduct(this.props.el.id)}  className='titre-addcarte'>Modifer carte</MDBModalHeader>
        <MDBModalBody>
        <MDBInput label="Title"  valueDefault={this.props.el.title} onChange={(e)=> this.handelchangeTitle(e)}/>
        <MDBInput label="Prix" valueDefault={this.props.el.price} onChange={(e)=> this.handelchangePrice(e)}/>
        <MDBInput label="Telephone" valueDefault={this.props.el.telephone} onChange={(e)=> this.handelchangeTelephone(e)}/> 
        <MDBInput label="Email" valueDefault={this.props.el.email} onChange={(e)=> this.handelchangeEmail(e)}/> 
        <MDBInput label="Nom de la boutique" valueDefault={this.props.el.nomboutique} onChange={(e)=> this.handelchangeNomboutique(e)}/>
        <MDBInput label="Categorie" valueDefault={this.props.el.categorie} onChange={(e)=> this.handelchangeCategorie(e)}/> 
        <MDBInput label="Epoque" valueDefault={this.props.el.epoque} onChange={(e)=> this.handelchangeEpoque(e)}/> 
        <MDBInput label="Provenance" valueDefault={this.props.el.provenance} onChange={(e)=> this.handelchangeProvenance(e)}/> 
        <MDBInput label="Materiaux" valueDefault={this.props.el.materiaux} onChange={(e)=> this.handelchangeMateriaux(e)}/> 
        <MDBInput label="Dimension" valueDefault={this.props.el.dimension} onChange={(e)=> this.handelchangeDimension(e)}/> 
        <MDBInput label="Image" valueDefault={this.props.el.image} onChange={(e)=> this.handelchangeImage(e)}/> 
        <MDBInput label="Description" valueDefault={this.props.el.description} onChange={(e)=> this.handelchangeDescription(e)}/> 
      

        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="black" className='btn-telecharger' onClick={this.toggle}  >fermer</MDBBtn>
          <MDBBtn color="black"  className='btn-telecharger'  onClick={() =>

                this.props.editProduct(
                this.state
                
                )}> enregistrer</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

const mapDispatchToProps =(dispatch)=>({

  editProduct :(id)=> dispatch(editProduct(id))
})

export default connect(null,mapDispatchToProps) (ModalEDit);