import React, { useState, useEffect } from "react";
import Axios from "axios";
import { app } from "../firebase";
import useFirebase from "../hooks/useFirebase";
import Login from "./Login";


const functionUri = process.env.NODE_ENV == "development" ? "http://localhost:9000" : "/.netlify/functions"

const Dashboard = () => {
  //firebase custom react-hook function
  const firebaseState = useFirebase();

  
  const [errMessage, setErrMessage] = useState(null);
  const [secretMessage,setSecretMessage] = useState("")

  useEffect(()=>{

    if(firebaseState.connected){
        app.auth().currentUser.getIdToken()


        .then(IdToken => Axios.get(`${functionUri}/secretData?token=${IdToken}`))
        .then(result=>{
          setErrMessage(null)
          setSecretMessage(result.data.message)
        })
        .catch(err=>{
            setErrMessage(err.message)
        })
    }


  },[firebaseState.connected])

  if(!firebaseState.connected) return <Login />

  return (
    <div>
      {errMessage && <p style={{ color: "red" }}>{errMessage}</p>}
      <h3>Hello {firebaseState.user.email}</h3>
      <p>{secretMessage}</p>
    </div>
  );
};

export default Dashboard;
