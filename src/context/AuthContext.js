import { createContext, useEffect, useState } from "react";
import { getTokenUser } from "../utils";

export const AuthContext = createContext();

export const AuthProvComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  console.info(localStorage);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getTokenUser({ token });
        setUser(data);
      } catch (error) {
        logout();
      }
    };

    if (token && user) getUserData();
  }, [token, user]);
  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
