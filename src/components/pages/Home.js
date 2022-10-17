import React from "react";
import berserkhead from "../../Images/berserkhead.png";

export default function Home() {
  return (
    <div className="heightvh">
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
      <a href="https://www.reddit.com/user/Jacko_2026/" className="credit">
        Image courtesy of u/Jacko_2026 on Reddit.
      </a>
    </div>
  );
}
