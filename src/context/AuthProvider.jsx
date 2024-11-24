import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // this will set the local storage with the employees and admin data
  useEffect(() => {
    setLocalStorage();
    const { employee } = getLocalStorage();
    setUserData( employee );
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

// export default AuthProvider;
export default AuthProvider;
