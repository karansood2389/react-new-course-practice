import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logoutHandler: () => {},
  loginHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const loginInformationInLocalStorage = localStorage.getItem("isLoggedIn");
    if (loginInformationInLocalStorage === "1") {
      setIsLoggedIn(true);
    }
    setShowComponent(true);
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const JSXcontent = showComponent ? (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        logoutHandler,
        loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  ) : null;
  return  JSXcontent ;
};

export default AuthContext;
