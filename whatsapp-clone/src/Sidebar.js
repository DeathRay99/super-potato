import { Avatar, IconButton } from "@mui/material";
import {
  Chat,
  DonutLargeOutlined,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { useEffect, useState } from "react";
import { app, database } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

function Sidebar({user}) {
  const [rooms, setRooms] = useState([]);
  const collectionRef = collection(database, "rooms");
  useEffect(() => {
    onSnapshot(collectionRef, (data) => {
      setRooms(
        data.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          <Avatar src={user?.img}/>
        </IconButton>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeOutlined />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or Start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => {
          return (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
