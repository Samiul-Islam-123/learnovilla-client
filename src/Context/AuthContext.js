import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Create a new context
const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component for the authentication context
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if 'access_token' cookie exists on component mount
  useEffect(() => {
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Function to update the isLoggedIn state when 'access_token' cookie is set
  const updateLoginStatus = () => {
    const accessToken = Cookies.get('access_token');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, updateLoginStatus  }}>
      {children}
    </AuthContext.Provider>
  );
};
