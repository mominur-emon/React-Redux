import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { blogsData } from "../data";

const Blogdetails = () => {
  const { title } = useParams();
  const location = useLocation();

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0, 500)}</p>
      <p>{location.state.body.slice(501, 1000)}</p>
    </div>
  );
};

export default Blogdetails;
