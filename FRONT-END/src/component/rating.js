import React from "react";
import { postlisteRating } from "../actions/rating";
import { connect } from "react-redux";

class RaitingFilter extends React.Component {
  state = {
    color: "",
    color2: "",
    color3: "",
    color4: "",
    color5: "",
    num: "",
    client: this.props.iduser,
    product: this.props.idproduit,
  };

  star1 = (e) => {
    this.setState({
      color: "yellow",
      color2: "gray",
      color3: "gray",
      color4: "gray",
      color5: "gray",
      num: 1,
    });
  };
  star2 = (e) => {
    this.setState({
      color2: "yellow",
      color: "yellow",
      color3: "gray",
      color4: "gray",
      color5: "gray",
      num: 2,
    });
  };
  star3 = (e) => {
    this.setState({
      color3: "yellow",
      color2: "yellow",
      color: "yellow",
      color4: "gray",
      color5: "gray",
      num: 3,
    });
  };
  star4 = (e) => {
    this.setState({
      color4: "yellow",
      color3: "yellow",
      color2: "yellow",
      color: "yellow",
      color5: "gray",
      num: 4,
    });
  };
  star5 = (e) => {
    this.setState({
      color5: "yellow",
      color4: "yellow",
      color3: "yellow",
      color2: "yellow",
      color: "yellow",
      num: 5,
    });
  };
  sendrating = () => {
    this.props.postlisteRating(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <div className="box-search-type">
        <span className="search-style-rate ">
         
          <p style={{ fontSize: "30px" }}>
            
            <span
              style={{ color: "yellow" }}
              onClick={() => {
                this.star1();
              }}
              id="1"
            >
              ★
            </span>
            <span
              style={{ color: this.state.color2 }}
              onClick={() => {
                this.star2();
              }}
              id="2"
            >
              ★
            </span>
            <span
              style={{ color: this.state.color3 }}
              onClick={() => {
                this.star3();
              }}
              id="3"
            >
              ★
            </span>
            <span
              style={{ color: this.state.color4 }}
              onClick={() => {
                this.star4();
              }}
              id="4"
            >
              ★
            </span>
            <span
              style={{ color: this.state.color5 }}
              onClick={() => {
                this.star5();
              }}
              id="5"
            >
              ★
            </span>
          </p>
        </span>
        <button onClick={this.sendrating}>Send rating</button>
      </div>
    );
  }
}
export default connect(null, { postlisteRating })(RaitingFilter);
