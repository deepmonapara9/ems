/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
   return (
      <div>
         <AuthContext.Provider value={"FingerChips"}>
            {children}
         </AuthContext.Provider>
      </div>
   )
}

// export default AuthProvider;
export default AuthProvider;
