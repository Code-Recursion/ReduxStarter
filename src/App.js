import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Redux</h1>
        <h3>{this.props.age}</h3>
        <button onClick={this.props.onAgeUp}>increment</button>
        <button onClick={this.props.onAgeDown}>descrement</button>
        <button onClick={this.props.onAgeReset}>reset</button>
        <div className="list">
          <ul>
            {this.props.history.map((item) => (
              <li key={item.id} className="listItem">
                {item.age}
                <button
                  className="delete"
                  onClick={() => {
                    this.props.onDeleteItem(item.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onAgeReset: () => dispatch({ type: "AGE_RESET" }),
    onDeleteItem: (itemId) => dispatch({ type: "DELETE_ITEM", key: itemId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
