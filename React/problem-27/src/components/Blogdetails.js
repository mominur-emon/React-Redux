import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../data";

const Blogdetails = () => {
  const { title } = useParams();
  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    const blogData = blogsData.filter((blog) => blog.title === title);
    setBodyData(blogData[0].body);
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>{bodyData.slice(0, 500)}</p>
      <p>{bodyData.slice(501, 1000)}</p>
    </div>
  );
};

export default Blogdetails;
