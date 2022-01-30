import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
class App extends Component {
  // state = {
  //   age: 21,
  // };

  // handleIncrement = () => {
  //   this.setState({
  //     ...this.state,
  //     age: this.state.age + 1,
  //   });
  // };

  // handleDecrement = () => {
  //   this.setState({
  //     ...this.state,
  //     age: this.state.age - 1,
  //   });
  // };

  render() {
    return (
      <div className="App">
        <h1>Hello Redux</h1>
        <h3>{this.props.age}</h3>
        <button onClick={this.props.onAgeUp}>increment</button>
        <button onClick={this.props.onAgeDown}>descrement</button>
        <button onClick={this.props.onAgeReset}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP" }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN" }),
    onAgeReset: () => dispatch({ type: "AGE_RESET" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
