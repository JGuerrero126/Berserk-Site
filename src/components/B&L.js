import React from "react";
import GutsRest from "../Images/GutsResting.jpg";
import Kiss from "../Images/GutsCascaKiss.jpg";
import SaveCasca from "../Images/GutsSaveCasca.jpg";

export default function BandL() {
  return (
    <section>
      <h3 className="head">Beauty & Love</h3>
      <p className="text">
        Berserk's artwork can be some of the most beautiful art in all of manga,
        even when the context is anything but.
      </p>
      <br></br>
      <img
        id="gutsRest"
        className="mangaimg"
        src={GutsRest}
        alt="One-Eyed Male Warrior wrapped in black cloak laying against tree stump, facing the rising sun"
      />
      <img
        id="kiss"
        className="mangaimg"
        src={Kiss}
        alt="Armor-clad man and woman passionately kiss in front of a waterfall, the man's cape flows and loosely wraps around the female"
      />
      <img
        id="saveCasca"
        className="mangaimg"
        src={SaveCasca}
        alt="Corpses fall as a One-Eyed Male Warrior in black armor with a flowing cloak stands after killing them to save a woman, the womans looks on at the one-eyed man as they share a silent reunion"
      />
    </section>
  );
}
