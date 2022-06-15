import React from "react";
import Anger from "../Images/GutsAngry.jpg";
import Raging from "../Images/Rage.png";
import Flame from "../Images/guts-flame.png";
import Scream from "../Images/Scream.jpg";

export default function Rage() {
  return (
    <section>
      <h3 className="head">Rage</h3>
      <p className="text">
        Rage and Anger is a very key aspect of Berserk, specifically the emotion
        "Berserk" that Guts feels. In fact, it's so important that the entire
        series is named after it.
      </p>
      <br></br>
      <img
        id="anger"
        className="mangashortimg"
        src={Anger}
        alt="One eyed Man covered in blood with eyes blinded by rage steps forward"
      />
      <img
        id="rage"
        className="mangatallimg"
        src={Raging}
        alt="One eyed Man swings sword, becoming a blur of rage and malice in the process"
      />
      <img
        id="flame"
        className="mangashortimg"
        src={Flame}
        alt="A torrent of flames and rage in the shape of a man with one eye"
      />
      <img
        id="scream"
        className="mangashortimg"
        src={Scream}
        alt="One eyed man screaming in anger"
      />
    </section>
  );
}
