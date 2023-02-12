import React, { Component } from "react";

export default class Binding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleClk = this.handleClk.bind(this);
  }

  // handleClk = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  handleClk() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* <button onClick={this.handleClk.bind(this)}>Increase</button> */}
        <button onClick={this.handleClk}>Increase</button>
      </div>
    );
  }
}
