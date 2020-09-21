import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { connect } from "react-redux";
import { getUser } from "../../actions/authenification";
import Navs from "../navbars";
import { getAllUser } from "../../actions/userAction";
import { Pie } from "react-chartjs-2";
import "../../index.css";
import ScrollUpButton from "react-scroll-up-button";
import { Redirect } from "react-router-dom";

class ChartsPage extends React.Component {
  componentDidMount() {
    this.props.getuser();
    this.props.getAllUser();
  }

  render() {
   

    const state = {
      dataPie: {
        labels: ["Vendeur", "Client"],
        datasets: [
          {
            data: [
              this.props.users.filter((el) => el.role === "vendeur").length,

              this.props.users.filter((el) => el.role === "client").length,
            ],
            backgroundColor: ["#F7464A", "#46BFBD"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"],
          },
        ],
      },
    };

    return (
      <div>
        <Navs user={this.props.user} />
        <MDBContainer>
          <h3 className="mt-5 titlechart"> gestion des users:</h3>
          <Pie data={state.dataPie} options={{ responsive: true }} />
        </MDBContainer>

        <div>
          <ScrollUpButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
  users: state.users,
});
const mapDispatchToProps = (dispatch) => ({
  getuser: () => dispatch(getUser()),
  getAllUser: () => dispatch(getAllUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartsPage);
