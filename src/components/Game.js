import react from "react";
import { useState } from "react";
import Board from "./Board";

export default function Game({ socket, user, room }) {
  const [result, setResult] = useState({ winner: "none", state: "none" });
 const resetGame=()=>{
   setResult({ winner: "none", state: "none" })
  }
  return (
    <div className="Game">
      <Board
        socket={socket}
        user={user}
        room={room}
        result={result}
        setResult={setResult}
      />
       {result.state === "won" && <div> {result.winner} Won The Game</div>}

      {result.state === "tie" && <div> Game Tieds</div>}
    </div>
  );
}
