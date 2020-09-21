import React from "react";
import { getlisteRating } from "../actions/rating";
import { connect } from "react-redux";

class Rating extends React.Component {
  state = {
    color: "",
    color2: "",
    color3: "",
    color4: "",
    color5: "",
    num: "",
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
    this.props.getlisteRating(this.state);
  };
  render() {
    console.log("chaima", this.props.id);
    return (
      <div className="box-search-type">
        <span className="search-style-rate ">
          {this.props.ratingReducer.map((el) => (
            <p style={{ fontSize: "30px" }}>
              <span style={{ color: "yellow" }}>★</span>
              <span style={{ color: this.state.color2 }}>★</span>
              <span style={{ color: this.state.color3 }}>★</span>
              <span style={{ color: this.state.color4 }}>★</span>
              <span style={{ color: this.state.color5 }}>{el.num}</span>
            </p>
          ))}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ratingReducer: state.rating,
});
const mapDispatchToProps = (dispatch) => ({
  getlisteRatingg: () => dispatch(getlisteRating()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);

// import React from "react";
// import { getlisteRating } from "../actions/rating";
// import { connect } from "react-redux";

// const Rating = ({ ratingReducer, changeRate = () => {} }) => {
//   let starsHtml = [];
//   for (let i = 0; i < 5; i++) {
//     if (i < ratingReducer) {
//       starsHtml.push(
//         <span
//           style={{ cursor: "pointer" }}
//           key={i}
//           onClick={() => changeRate(i + 1)}
//           style={{ color: "#f1ee0f" }}
//         >
//           <i class="fas fa-star"></i>
//         </span>
//       );
//     } else {
//       starsHtml.push(
//         <span
//           style={{ cursor: "pointer" }}
//           key={i}
//           onClick={() => changeRate(i + 1)}
//         >
//           <i class="far fa-star"></i>
//         </span>
//       );
//     }
//   }
//   return <div>{starsHtml}</div>;
// };

// const mapStateToProps = (state) => ({
//   ratingReducer: state.rating,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getlisteRatingg: () => dispatch(getlisteRating()),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Rating);
