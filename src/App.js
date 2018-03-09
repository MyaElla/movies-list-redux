import React, { Component } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.increment}>+</button>
        {this.props.count}
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
