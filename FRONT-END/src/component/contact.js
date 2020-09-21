import React, { Component } from 'react'
import "./../index.css";
import { getUser } from "../actions/authenification";
import Navs from "./navbars";
import { connect } from "react-redux";
 class contact extends Component {


  componentDidMount() {
    
    this.props.getuser();
  }






    render() {
        return (
            <div>
     
     <div className="">
          <Navs user={this.props.user} />
         </div>



     <div class="container my-5 py-5 z-depth-1">



<section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">


  <div class="row">


    <div class="col-lg-5 col-md-12 mb-0 mb-md-0">

      <h3 class="font-weight-bold">Demande de contact</h3>

      <p class="text-muted">Bienvenue a notre boutique en ligne Antica . Nous vous rappelons que nous sommes un site de vente et d'achat en ligne, tous les services qu'on propose passe exclusivement par internet que ce soit sur un ordinateur, sur un téléphone ou sur l'application. Avec un service client dédié 100% pour votre satisfaction, vous n'aurez pas besoin de faire le déplacement, il suffit simplement de nous contacter et nous allons vous donner la bonne solution à vos préoccupations.Veuillez noter que notre application attache beaucoup 
        de valeur au respect de la vie privée et n'utilisera vos données que pour des
         raisons de service et ne les partagera pas avec des tiers.
      </p>
      <p><span class="font-weight-bold mr-2">Email:</span><a href="#home">contact@antica.com</a></p>
      <p><span class="font-weight-bold mr-2">telephone:</span><a href="">+216 22 193 836</a></p>

    </div>
 
    <div class="col-lg-7 col-md-12 mb-4 mb-md-0">

      <div class="row">

        <div class="col-md-6">

        <label for="form-first-name">Prenom</label>
          <div class="md-form md-outline mb-0">
            <input type="text" id="form-first-name" class="form-control"/>
        
          </div>

        </div>
      
        <div class="col-md-6">
        <label for="form-last-name">Nom</label>

         
          <div class="md-form md-outline mb-0">
            <input type="text" id="form-last-name" class="form-control"/>
          </div>

        </div>
     

      </div>
      <label for="form-email">E-mail</label>
      <div class="md-form md-outline mt-3">
        <input type="email" id="form-email" class="form-control"/>
      
      </div>

      <label for="form-subject">Suject</label>
      <div class="md-form md-outline">

        <input type="text" id="form-subject" class="form-control"/>
      
      </div>
      <label for="form-message">Comment pouvons-nous aider?</label>
      <div class="md-form md-outline mb-3">
        <textarea id="form-message" class="md-textarea form-control" rows="3"></textarea>
      
      </div>

      <button type="submit" class="btn ">envoyer<i class="far fa-paper-plane"></i></button>

    </div>
 

  </div>



</section>



</div>









            </div>
        )
    }
}
const mapStateToProps = (state) => ({

  user: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
 
  getuser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(contact);