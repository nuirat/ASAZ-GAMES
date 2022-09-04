import React, { useEffect, useState } from "react";
import Bird from "./Bird";
export default function GameBox(top) {
  return (
    <div id="gameBox">
      <Bird top={top}/>
    </div>
  );
}
