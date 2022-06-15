import React from "react";
import PuckBright from "../Images/PuckBright.png";
import PuckShock from "../Images/PuckShocked.jpg";
import Smile from "../Images/SchriekeSmile.png";
import SchriekeShock from "../Images/SchriekeShock.jpeg";

export default function CandJ() {
  return (
    <section>
      <h3 className="head">Comedy & Joy</h3>
      <p className="text">
        Despite being a mostly deeply dramatic and emotionally draining work of
        art, Berserk can sometimes have moments of comedy and profound joy.
      </p>
      <br></br>
      <img
        id="puckBright"
        className="mangashortimg"
        src={PuckBright}
        alt="Elf with chestnut shaped head staring at bright light"
      />
      <img
        id="puckShock"
        className="mangashortimg"
        src={PuckShock}
        alt="Elf with chestnut shaped head looking shocked and a man who looks tired"
      />
      <img
        id="smile"
        className="mangatallimg"
        src={Smile}
        alt="Little girl smiling very nicely with text 'Even with all that I can still smile'"
      />
      <img
        id="schriekeShock"
        className="mangatallimg"
        src={SchriekeShock}
        alt="Little girl with a very embarassed and shy face as she tries to feed a male figure"
      />
    </section>
  );
}
