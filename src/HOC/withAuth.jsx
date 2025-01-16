import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const user = useSelector((state) => state.user.user);

    if (!user) {
      return <Navigate to="/" />;
    }
    // if (user) {
    //   return <Navigate to="/home" />;
    // }
    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
