import firebase from "firebase/compat/app";
import "firebase/compat/auth";
require("dotenv").config();

const app = firebase.initializeApp({
 
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

export const auth = app.auth();
export default app;
