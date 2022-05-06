import React from "react";
import berserkhead from "../../Images/berserkanimelogo.png";

export default function Home() {
  return (
    <div>
      <div>
        <img
          className="hero"
          src={berserkhead}
          alt="Man in armor sitting above BERSERK logo"
        />
      </div>
      <header>
        <h1 className="heading">Welcome to my Berserk Fan Site!</h1>
      </header>
    </div>
  );
}
