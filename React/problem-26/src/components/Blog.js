import React from "react";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Blog Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
        molestias sit vitae cupiditate eveniet mollitia repellendus voluptatum
        iure quae consectetur?
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

export default Blog;
