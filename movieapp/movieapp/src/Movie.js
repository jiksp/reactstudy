import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// function App() {
//   return <div className="App"></div>;
// }

// class MoviePosterImg extends Component {
//   render() {
//     // console.log(this.props.posterImg);
//     return (
//       <div>
//         <img src={this.props.posterImg}></img>
//       </div>
//     );
//   }
// }
function Movie({ title, posterImg }) {
  return (
    <div>
      <h1>{title}</h1>
      <MoviePosterImg posterImg={posterImg} />
    </div>
  );
}

function MoviePosterImg({ posterImg }) {
  return <img src={posterImg} alt="image"></img>;
}

MoviePosterImg.propTypes = {
  posterImg: PropTypes.string.isRequired
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
