import react from "react";
import { useState } from "react";
import Board from "./Board";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import FlappyBird from "./FlappyBird";
export default function Game({ socket, user, room }) {
  const [result, setResult] = useState({
    winner: "none",
    state: "none",
    player: "none",
  });
  const resetGame = () => {
    setResult({
      winner: "none",
      state: "none",
      player1: "none",
      player2: "none",
    });
  };
  const { width, height } = useWindowSize();
  console.log(result);
  return (
    <div>
      <audio  id="music" loop autoPlay>
        <source src="https://cdn01.ytapi.download/dl?hash=aQOn%2B6Ked7Fqp%2FGcBjPgrzM3F9kFjv3nI9WJYwCloLN9ZMVevSHh9PZadOj38vWVJTzV13ZNAlYKab3YjSnK3xMvwvCDoHlWB94uSEAiPopMUKkfSjHqwViORtoMdA3KDtwBpA9z0REpYPom0IyBAT4WBIgxOrz6szG5q9ckWrTnXDy%2BbA5zrgbdv6gcMzdgRreBnH0z24nSU0Qtna%2FqXiumIjOQ2KV%2BMfmD6PASBqE%3D" />
      </audio>
      <FlappyBird />
    </div>

    //    return( <div className="Game">
    //       <Board
    //         socket={socket}
    //         user={user}
    //         room={room}
    //         result={result}
    //         setResult={setResult}
    //       />
    //        {result.state === "won" && <div> {result.winner} Won The Game</div>}
    //     {  result.state === "won"? <Confetti
    //       width={width}
    //       height={height}
    //     />
    // :null
    // }
    //       {result.state === "tie" && <div> Game Tieds</div>}
    //     </div>
  );
}
