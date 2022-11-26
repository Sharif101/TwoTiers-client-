import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import Loader from "../Utilities/Loader/Loader";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  let location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default Privateroute;
