import React, { Component } from "react";
//class component
class Card2 extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>This is just test</p>
      </div>
    );
  }
}

export default Card2;
