import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ isLogIn, children }) => {
  if (!isLogIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
