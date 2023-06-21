import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
function Login() {
  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();
  
  const signIn = async(event) => {
    event.preventDefault();
    try {
      const response = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign in With Google</Button>
      </div>
    </div>
  );
}

export default Login;
