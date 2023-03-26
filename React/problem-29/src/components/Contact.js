import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>contact page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quasi.
        Ipsum eaque nihil omnis consequatur!
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Home Page
      </button>
    </div>
  );
};

export default Contact;
