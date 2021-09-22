import React, { useEffect, useState, useContext } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function forgotPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function loginWithGoogle() {
    let provider = new GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    forgotPassword,
    updateEmail,
    updatePassword,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
