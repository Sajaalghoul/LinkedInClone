import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      });
      return () => unsubscribe();
    }, []);

    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
