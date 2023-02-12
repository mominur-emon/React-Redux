import React, { Component } from "react";
import "./style.css";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  countDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.countIncrement}>Increment count ( + )</button>
        <button
          onClick={this.countDecrement}
          disabled={count === 0 ? true : false}
        >
          Decrement count ( - )
        </button>
      </div>
    );
  }
}
