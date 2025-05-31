import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ children }) => {
  const userEmail = Cookies.get("userEmail");
  return userEmail ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
