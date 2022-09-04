import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./components/Chat";
import Game from "./components/Game";

const App = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");

  const socket = io.connect("http://localhost:3001");

  const joinRoom = () => {
    if (user && room) socket.emit("joinRoom", room);
  };
  return (
    <div className="App">
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
