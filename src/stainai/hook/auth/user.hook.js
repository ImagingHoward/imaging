import React, { createContext, useState, useEffect } from 'react';

// Create the context
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize the state with the user from localStorage if it exists
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('STAINAI_USER_PROFILE');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
