import React, { Component } from "react";
import { Fade } from "react-bootstrap";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

class Conditional_Render extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogIn: false,
    };
  }

  render() {
    const { isLogIn } = this.state;
    let element;

    // if (this.state.isLogIn) { //1st way use to if else
    //   element = <HomePage />;
    // } else {
    //   element = <LoginPage />;
    // }

    element = isLogIn ? <HomePage /> : <LoginPage />; //2nd way use toternary oparetor
    // element = isLogIn && <HomePage />; //3r way short circuit

    return <div>{element}</div>;
  }
}

export default Conditional_Render;
