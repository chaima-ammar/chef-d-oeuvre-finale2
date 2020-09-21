
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";  
import "../index.css";

function Footer(){
    return(

<div>

      <footer className="page-footer font-small footer">
      
        <div className="footer" >
          <div className="container footer">
      
         
            <div className="row py-4 d-flex align-items-center ">
      
          
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
               <img   src="logotrans.png" width="100px" className="mb-0"/> 
              </div>
           
              <div className="col-md-6 col-lg-7 text-center text-md-right">
      
              
                <a  href ="https://www.facebook.com/cheimaa2020" className="fb-ic">
                  <i className="fab fa-facebook-f white-text mr-4"> </i>
                </a>
               
               
               
                <a className="gplus-ic">
                  <i className="fab fa-google-plus-g white-text mr-4"> </i>
                </a>
            
                
              
                <a href="https://www.instagram.com/" className="ins-ic">
                  <i className="fab fa-instagram white-text"> </i>
                </a>
      
              </div>
              
      
            </div>
          
      
          </div>
        </div>
      
        <div className="container text-center text-md-left mt-5">
      
          <div className="row mt-3">
      
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      
              <h6 className="text-uppercase font-weight-bold copy">Antica</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
              <p>Notre boutique est spécialiser dans la vente des articles Antiques ,nos vous proposons un large choix de meubles de bibelots et d'argenterie.</p>
      
            </div>
           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
           
              <h6 className="text-uppercase font-weight-bold copy">Galerie</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
              <p>
                <a href="/galerie">galerie</a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
      
            </div>
         
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
              <h6 className="text-uppercase font-weight-bold copy">Antica</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
              <p>
                <a href="/">Acceuil</a>
              </p>
              <p>
                <a href="/contact">Contact</a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
              <p>
                <a href="#!"></a>
              </p>
      
            </div>
         
          
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
          
              <h6 className="text-uppercase font-weight-bold copy">Contact</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <i className="fas fa-home mr-3"></i> Tunis, Mourouj3, </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> contact@antica.com</p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 22 193 836 </p>
            
                
      
            </div>
           
      
          </div>
         
      
        </div>
     
        <div className="footer-copyright text-center py-3 copy" >© 2020 Copyright:
          <a href="" className="copy"> Chaima Ammar</a>
        </div>
     
      </footer>
     
      </div>












    )
}

export default Footer;