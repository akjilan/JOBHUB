import React, { createContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase/firebase.init";
export const Authhcontext = createContext();
const AuthProvider = ({ Children }) => {
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (loggedUser) => {
      console.log("state changed", loggedUser);
    });
  }, []);
  const value = { loggedUser };

  return (
    <div>
      <Authhcontext.Provider value={value}>{Children}</Authhcontext.Provider>
    </div>
  );
};

export default AuthProvider;
