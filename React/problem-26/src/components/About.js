import React from "react";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        porro possimus, aliquam natus in accusantium magnam quasi exercitationem
        maiores eligendi?
      </p>
      <button onClick={() => navigate("/")}>Go To Home page </button>
    </div>
  );
}

export default About;
