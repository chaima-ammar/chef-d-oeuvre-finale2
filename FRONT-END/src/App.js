import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./component/footer";
import Accueil from "./component/accueil";
import CardVendeur from "./component/pagevendeur";
import PageAdmin from "./component/ADMIN/dashbordAdmin";
import Publication from "./component/Publication";
import Home from "./component/HEADER/home";
import { getUser } from "./actions/authenification";
import "./index.css";
import { connect } from "react-redux";
import Details from "./component/details";
import { getProduct } from "./actions/produitAction";
import Nav from "./component/NAV/nav.js";
import Contact from "./component/contact";
import SignUp from "./component/Sign-up/signup";
import Signin from "./component/login/signin";
import Navs from "./component/navbars";
import Reclamation from "./component/reclamation";
import Chart from "./component/ADMIN/chart";
import Galerie from "./component/galerie/galerie";
import AddCards from "./component/Addcards";
import EditprofileClient from "./component/editprofileclient/edit-profile"
class App extends Component {
  componentDidMount() {
    this.props.getuser();
    this.props.getProduct();
  }
  render() {
    return (
      <div>
        <Router>
          

          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/" component={Accueil} />
            <Route exact path="/vendeur" component={CardVendeur} />
            <Route exact path="/Admin" component={PageAdmin} />
            <Route exact path="/Allpublication" component={Publication} />
            <Route exact path="/Reclamation" component={Reclamation} />
            <Route exact path ="/chart" component={Chart}/>
            <Route exact path ="/galerie" component={Galerie}/>
            <Route exact path ="/addCards" component={AddCards}/>
            {this.props.productReducer.map((el) => (
              <Route exact path={"/Details" + el._id}>
                <Details el={el} />
              </Route>
            ))}
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/editprofileclient" component={EditprofileClient} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={Signin} />


          </Switch>

          {/* <CardVendeur/>  */}
        </Router>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productReducer: state.product,
  user: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  getuser: () => dispatch(getUser()),
  getProduct: (e) => dispatch(getProduct(e)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
