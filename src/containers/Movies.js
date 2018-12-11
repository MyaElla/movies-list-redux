import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles.css";
import { fetchMovies } from "../redux/actions";

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies("/movies.json");
  }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <ul className="movies">
          {this.props.movies.map(movie => (
            <li>{movie}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = {
  fetchMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
