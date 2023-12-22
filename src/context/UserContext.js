// UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const checkIsLoggedIn = localStorage.getItem("isLoggedIn");
    return checkIsLoggedIn ? JSON.parse(checkIsLoggedIn) : false;
  });
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : {
          id: "",
          email: "",
          name: "",
          role: "AUDITOR",
        };
  });

  const setUserDetails = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const setUserIsLoggedIn = () => {
    const newIsLoggedIn = !isLoggedIn;
    setIsLoggedIn(newIsLoggedIn);
    localStorage.setItem("isLoggedIn", JSON.stringify(newIsLoggedIn));
  };

  return (
    <UserContext.Provider
      value={{ user, setUserDetails, isLoggedIn, setUserIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
