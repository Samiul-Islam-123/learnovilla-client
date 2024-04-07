// UserContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context to store the user ID
const UserContext = createContext();

// Custom hook to access the user ID
export const useUser = () => {
  return useContext(UserContext);
};

// UserProvider component to wrap around components that need access to the user ID
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null); // Initialize userId as null
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);

  // Function to set the user ID
  const setUser = (id) => {
    setUserId(id);
  };

  const updateUsername = (username) => {
    setUsername(username);
  }

  const updateEmail = (email) => {
    setEmail(email)
  }

  return (
    <UserContext.Provider value={{ userId, setUser , updateUsername, updateEmail, username, email}}>
      {children}
    </UserContext.Provider>
  );
};
