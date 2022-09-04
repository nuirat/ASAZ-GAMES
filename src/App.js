import "./App.css";
import io from "socket.io-client";
import axios from "axios";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Game from "./components/Game";
import Landing from "./components/Landing";

const App = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [games, setGames] = useState([]);

  const socket = io.connect("http://localhost:3000");
  const joinRoom = () => {
    if (user !== "" && room !== "") {
      socket.emit("joinRoom", room);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:4000/games").then(function (response) {
      let newGames = response.data;
      setGames(newGames);
    });
  },[]);
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={games?<Landing games={games}/>:null} />
        </Routes>
      </BrowserRouter>
      <h3>Join A Chat</h3>
      <input
        type="text"
        placeholder="zain..."
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="room id..."
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={joinRoom}>Join a room</button>
      <Chat socket={socket} user={user} room={room} />
      <Game socket={socket} user={user} room={room} />
    </div>
  );
};

export default App;
