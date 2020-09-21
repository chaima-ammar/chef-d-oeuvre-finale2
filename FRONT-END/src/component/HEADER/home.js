import React, { Component } from 'react';
//import "./home.scss"
import "./home.css"
import { getUser } from "../../actions/authenification";
import { connect } from 'react-redux';
import { editProfile } from "../../actions/authenification";
import EditProfile from "../HEADER/editprofile"
import Avatar from 'react-avatar';
import ScrollUpButton from "react-scroll-up-button";
import Navs from "../navbars";
class Usercard extends Component {



  componentDidMount() {
 
    this.props.getuser();
  
  }





  render(){

  return (

   

       <div>
    <Navs user={this.props.user} />

   <div className="container py-5 my-5">
  <section 
 >
    <div className="row d-flex justify-content-center">
      <div className="col-md-10">
        <div className="card">
          <div className="card-body m-3">
            <div className="row">
              <div className="col-lg-4 d-flex mb-2 align-items-center">
                <div className="avatar mx-4 w-100 white d-flex justify-content-center align-items-center">
                  <Avatar name={this.props.user.name} className="rounded-circle img-fluid z-depth-1" alt="woman avatar"/>
                </div>
              </div>
              <div className="col-lg-8">
                <p className="text-muted font-weight-light mb-4">vous pouvez modifier vos coordonnées.</p>
                <p className="font-weight-bold lead mb-1">Nom:{this.props.user.name}</p>
              	<p className="font-weight-bold lead mb-1">email: {this.props.user.email}</p>
                <p className="font-weight-bold lead mb-1"> {this.props.user.role}</p>
           
              </div>
              <div>
                
                <EditProfile />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </section>
</div>


<div>
            <ScrollUpButton />
          </div>

</div>











  
  
   
  



  

























   










   
  )

  }
}


const mapStateToProps = (state) => ({

  user: state.auth,
});

const mapDispatchToProps = (dispatch) => {
    return {
      
      getuser: () => dispatch(getUser()),
      editProfile :(id)=> dispatch(editProfile(id))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Usercard);








 
