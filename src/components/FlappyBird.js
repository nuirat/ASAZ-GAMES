import React, { useEffect, useState } from "react";
import Bird from "./Bird";
import GameBox from "./GameBox";
export default function FlappyBird() {
  const GRAVITY = 6;
  const JUMPHEGHIT = 100;
  const PIPE_WIDTH = 60;
  const PIPE_GAP = 200;

  const [birdPosition, setBirdPosition] = useState(350);
  const [gameHasStarted, setGameStarted] = useState(false);
  const [pipeHeghit, setPipeHeghit] = useState(200);
  const [pipeLeft, setPipeLeft] = useState(500 - PIPE_WIDTH);
  const [score,setScore]=useState(0)
  const BOTTOM_PIPE_HEGHIT = 500 - PIPE_GAP - pipeHeghit;

  useEffect(() => {
    let time;
    if (gameHasStarted && birdPosition < 644) {
      time = setInterval(() => {
        setBirdPosition(birdPosition + GRAVITY);
      }, 24);
    }
    return () => {
      clearInterval(time);
    };
  }, [birdPosition, gameHasStarted]);

  useEffect(() => {
    let pipe;
    if (gameHasStarted && pipeLeft >= -PIPE_WIDTH) {
      pipe = setInterval(() => {
        setPipeLeft(pipeLeft-5)
      }, 24);
      return () => {
        clearInterval(pipe);
      };
    }
   
    else{
    setPipeLeft(500-PIPE_WIDTH)
    setPipeHeghit(Math.floor(Math.random()*(500-PIPE_GAP)))
    }
    setScore(score+1)
  }, [birdPosition, gameHasStarted]);
useEffect(()=>{
    const touchTopPipe=birdPosition>=0&&birdPosition<pipeHeghit
    const touchBottomPipe=birdPosition<=500&&birdPosition>BOTTOM_PIPE_HEGHIT
    if(pipeLeft>=0&&pipeLeft<=PIPE_WIDTH&&(touchTopPipe||touchBottomPipe))
  {  setGameStarted(false)
  setScore(0)
    }
})
  const jumpBird = () => {
    if (!gameHasStarted) {
      setGameStarted(true);
    }
    let newBirdPosition = birdPosition - JUMPHEGHIT;
    if (newBirdPosition < 170) setBirdPosition(170);
    else setBirdPosition(newBirdPosition);
  };
  return (
    <div id="flappyGame">
      <GameBox
        score={score}
        birdTop={birdPosition}
        pipeLeft={pipeLeft}
        pipeHeghit={pipeHeghit}
        pipeWidth={PIPE_WIDTH}
        bottom={BOTTOM_PIPE_HEGHIT}
        jumpBird={jumpBird}
      />
    </div>
  );
}
