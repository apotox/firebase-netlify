import React, { useState } from "react";
import { app } from "../firebase";

const Login = () => {
  const [errMessage, setErrMessage] = useState(null);

  const [email, setEmail] = useState(process.env.REACT_APP_FIREBASE_USER);
  const [password, setPassword] = useState(process.env.REACT_APP_FIREBASE_PASSWORD);

  //hanle Signin button click
  const handleLogin = () => {
    app
      .auth()
      //sign in using a firebase user
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        //after signig-in, onAuthStateChanged (in useFirebase custom react hook)
        //event will be triggred
        console.log("success login", result);
        setErrMessage(null);
      })
      .catch(err => {
        setErrMessage(err.message);
      });
  };

  return (
    <div className="login">
      {errMessage && <p style={{ color: "red" }}>{errMessage}</p>}
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="****"
      />
      <button onClick={handleLogin}>Sign in</button>
    </div>
  );
};

export default Login;
