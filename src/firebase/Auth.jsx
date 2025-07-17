import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Auth = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    onLogin(userCred.user);
  };

  const handleLogin = async () => {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    onLogin(userCred.user);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    onLogin(result.user);
  };

  return (
    <div>
      <h2>Login / Signup</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Auth;
