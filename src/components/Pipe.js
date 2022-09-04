import React, { useEffect, useState } from "react";
export default function Pipe({top,width,height,left}) {
  return <div id="pipe" style={{top:`${top}px`,width:`${width}px`,height:`${height}px`,left:`${left}px`}} />;
}
