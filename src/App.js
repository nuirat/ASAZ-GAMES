import "./App.css";
import io from "socket.io-client";
import { useState,useEffect } from "react";
import Chat from "./components/Chat";
import Game from "./components/Game";

const App = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const socket = io.connect("http://localhost:3001");
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  const joinRoom = () => {
    if (user && room) socket.emit("joinRoom", room);
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
    <button onClick={toggleTheme} id="theme"></button>
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
