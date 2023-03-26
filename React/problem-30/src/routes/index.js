import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import AddBlog from "../components/AddBlog";
import Error from "../components/Error";
import Navigation from "../layout/Navigation";
import Protected from "./Protected";

const Index = () => {
  const [isLogIn, setLogIn] = useState(false);

  return (
    <Router>
      <Navigation />

      {isLogIn ? (
        <button
          onClick={() => {
            setLogIn(!isLogIn);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            setLogIn(!isLogIn);
          }}
        >
          Log In
        </button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/add-blog"
          element={
            <Protected isLogIn={isLogIn}>
              <AddBlog />
            </Protected>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Index;
