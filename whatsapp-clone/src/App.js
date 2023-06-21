import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { Routes, Route, Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import Login from "./Login";
function App() {
  const [user, setUser] = useState(null);
  let auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser({
          img: data.photoURL,
          UID: data.uid,
          name: data.displayName,
        });
      } else setUser(null);
    });
  }, [auth]);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar user={user} />
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat user={user}/>} />
            <Route path="/" element={<Chat user={user}/>} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
