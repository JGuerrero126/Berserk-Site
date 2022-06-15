import React from "react";
import BlackSword from "../Images/BlackSwordsman.jpg";
import SkullKnightSmoke from "../Images/SkullKnightSmokey.jpg";
import GutsHeavy from "../Images/GutsHeavyRain.jpg";
import Darkness from "../Images/GutsDarkness.jpg";

export default function PandD() {
  return (
    <section>
      <h3 className="head">Pain & Dread</h3>
      <p className="text">
        Berserk is most well known for its often horrific artwork, but it also
        shines in the moments just before those horrific event's occur as well
        illustrating moments of emotional trauma and pain.
      </p>
      <br></br>
      <img
        id="blackSword"
        className="mangashortimg"
        src={BlackSword}
        alt="Stoic looking man standing in front of a fire with dead eyes"
      />
      <img
        id="skullKnightSmoke"
        className="mangaimg"
        src={SkullKnightSmoke}
        alt="Moonlit silouette of a horse-riding figure in thick fog"
      />
      <img
        id="gutsHeavy"
        className="mangaimg"
        src={GutsHeavy}
        alt="Man lifting sword to strike while being beaten down by a very heavy rain storm"
      />
      <img
        id="darkness"
        className="mangashortimg"
        src={Darkness}
        alt="Ghastly looking faces behind man with one eye surrounded by darkness"
      />
    </section>
  );
}
