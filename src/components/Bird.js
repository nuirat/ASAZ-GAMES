import React, { useEffect, useState } from "react";
export default function Bird({top}) {
  return <div id="bird" style={{top:`${top}px`}} />;
}
