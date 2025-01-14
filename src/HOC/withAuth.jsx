import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const withAuth = (Component) => {
  const user = useSelector((state) => state.user.user);
  const AuthenticatedComponent = (props) => {
    const isAuthenticated = user;

    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
