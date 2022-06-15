import React from "react";
import Theme from "../Music/Guts Theme.mp3";

function Music() {
  return (
    <div>
      <audio controls loop src={Theme} className="music"></audio>
    </div>
  );
}

export default Music;
