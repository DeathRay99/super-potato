import {
  AttachFile,
  InsertEmoticon,
  Logout,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { app, database } from "./firebase.js";
import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { signOut, getAuth } from "firebase/auth";

function Chat({ user }) {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  let auth = getAuth();
  useEffect(() => {
    if (roomId) {
      const docRef = doc(database, "rooms", roomId);
      const collectionRef = collection(database, "rooms", roomId, "messages");
      const q = query(collectionRef, orderBy("timestamp", "asc"));
      onSnapshot(docRef, (data) => {
        setRoomName(data.data().name);
      });
      onSnapshot(q, (data) => {
        setMessages(data.docs.map((doc) => doc.data()));
      });
    }
  }, [roomId]);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const collectionRef = collection(database, "rooms", roomId, "messages");
    addDoc(collectionRef, {
      message: input,
      name: user.name,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>
            last seen{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          <IconButton
            onClick={() => {
              signOut(auth);
            }}
          >
            <Logout />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.name && "chat__receiver"
            }`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={handleSendMessage}>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
