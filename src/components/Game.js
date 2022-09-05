import react from "react";
import { useState } from "react";
import Board from "./Board";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import FlappyBird from "./FlappyBird";
export default function Game({ socket, user, room }) {
  const [result, setResult] = useState({ winner: "none", state: "none",player:"none"});
 const resetGame=()=>{
   setResult({ winner: "none", state: "none" ,player1:"none",player2:"none"})
  }
  const { width, height } = useWindowSize()
  console.log(result);
 // return (<FlappyBird/>
    return(
    <div className="Game">
      <Board
        socket={socket}
        user={user}
        room={room}
        result={result}
        setResult={setResult}
      />
       {result.state === "won" && <div> {result.winner} Won The Game</div>}
    {  result.state === "won"? <Confetti
      width={width}
      height={height}
    />
:null
}
      {result.state === "tie" && <div> Game Tieds</div>}
    </div>
   );
}
