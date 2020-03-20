import React from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard";
import useFirebase from "./hooks/useFirebase";
import { app } from "./firebase";

function App() {

  const firebaseState = useFirebase()

  return (
    <div className="App">
      <header className="App-header">
        <a href=""><h4>Firebase Auth + Netlify functions</h4></a>
        {firebaseState.connected && <button onClick={()=>app.auth().signOut()}>X</button>}
      </header>

      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
