import React from "react";
import GameCard from "./GameCard";
import "../styles/Landing.css";

const Landing = (props) => {
  // const games = props.games
  return (
    <div className="landing">
      <h1>games</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolores.
      </p>
      <div className="games-container">
        {/* {props.games.map((g) => <GameCard />)} */}
      </div>
    </div>
  );
};

export default Landing;
