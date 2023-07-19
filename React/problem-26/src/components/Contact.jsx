import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
        pariatur est magnam id accusamus? Facere. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Esse culpa porro aperiam adipisci deserunt
        quis animi aliquam sunt. Fugiat, commodi voluptatibus tempora illum cum
        corporis blanditiis eos ipsam vero, eligendi praesentium earum voluptas
        quam ea dolorem asperiores debitis tempore ipsa quas, delectus doloribus
        nobis sequi deserunt? Culpa ea iure dolorem.
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Contact;
