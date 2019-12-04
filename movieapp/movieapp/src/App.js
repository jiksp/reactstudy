import React, { Component } from "react";
import Movie from "./Movie";
import "./App.css";

// function App() {
//   return <div className="App"></div>;
// }

// const moviesTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Interstellar",
//   "Star Wars",
//   "Inception"
// ];

// Render: componentWillMount() -> render() -> componentDidMount()
// Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidMount()

// const moviePosterImages = [
//   "https://www.elsetge.cat/myimg/f/142-1424490_the-matrix-poster-the-matrix-movies-neo-keanu.jpg",
//   "https://www.joblo.com/assets/images/oldsite/posters/images/full/full-metal-jacket-poster2.jpg",
//   "https://3.bp.blogspot.com/-JMKY188706w/XCuX_xxLl2I/AAAAAAAADoI/HiJXndE2E0sPFCi0TVyC6hffEv5jHqOxQCHMYCw/s1600/interstellar-poster-wallpapers-interstellar-poster-stock-photos.jpg",
//   "http://getwallpapers.com/wallpaper/full/9/6/8/126147.jpg",
//   "https://cdn.collider.com/wp-content/uploads/2010/06/inception-movie-poster-2.jpg"
// ];

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie.title);
      return (
        <Movie
          title={movie.title}
          posterImg={movie.large_cover_image}
          key={movie.id}
        ></Movie>
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({ movies });
  };

  _callApi = () => {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
      .then(root => root.jason())
      .then(jason => jason.data.movie)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
}

export default App;
