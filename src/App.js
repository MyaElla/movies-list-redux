import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions";
import "./App.css";
import Movies from "./containers/Movies";

class App extends Component {
  render() {
    console.log("this.props.count", this.props.count);

    return (
      <div className="App">
        <h2>Count</h2>
        <button onClick={this.props.decrement}>-</button>
        {this.props.count}
        <button onClick={this.props.increment}>+</button>
        <hr />
        <Movies />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    movies: state.movies
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
