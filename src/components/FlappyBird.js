import React, { useEffect, useState } from "react";
import Bird from "./Bird";
import GameBox from "./GameBox";
export default function FlappyBird() {
 const [birdPosition,setBirdPosition]=useState(250)
  return (
    <div id="flappyGame">
      <GameBox top={birdPosition}/>
    </div>
  );
}
