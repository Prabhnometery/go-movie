import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default class Movies extends Component {
  state = {
    movies: [],
  };

  // Gets called when the component is rendered
  componentDidMount() {
    this.setState({
      movies: [
        { id: 1, title: "The Shawshank Redempetion", runtime: 142 },
        { id: 2, title: "The Godfather", runtime: 175 },
        { id: 3, title: "The Dark Knight", runtime: 153 },
      ],
    });
  }

  render() {
    return (
      <Fragment>
        <h2>Choose a Movie</h2>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}> {movie.title}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}
