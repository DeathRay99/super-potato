import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { app, database } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, id, name }) {
  const collectionRef = collection(database, "rooms");
  const [messages, setMessages] = useState("");
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  useEffect(() => {
    if (id) {
      const messagesRef = collection(database, "rooms", id, "messages");
      const q = query(messagesRef, orderBy("timestamp", "desc"));
      onSnapshot(q, (data) => {
        setMessages(data.docs.map((doc) => doc.data()));
      });
    }
  }, [id]);
  const createChat = () => {
    const roomName = prompt("please enter name for chat");
    if (roomName) {
      addDoc(collectionRef, {
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
