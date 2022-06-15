import React from "react";
import FirstGuts from "../Images/GutsFA.jpg";
import UpdatedGuts from "../Images/GutsUA.png";
import FirstFemto from "../Images/FemtoFA.png";
import UpdatedFemto from "../Images/FemtoUA.jpg";

export default function Progression() {
  return (
    <section>
      <h3 className="head">The Progression</h3>
      <p className="text">
        Berserk's author, Kentaro Muira, undergoes quite the artistic journey
        throughout the story of Berserk. Despite having considerable skill from
        the start, his art becomes simply masterful. Here's an example of Guts
        from the very first chapter of Berserk.
      </p>
      <br></br>
      <img
        id="firstGuts"
        className="mangatallimg"
        src={FirstGuts}
        alt="One-Eyed Male Warrior clad in black armor reloading crossbow attached to arm"
      />
      <p className="text">
        Here is Guts at the same point of time but drawn much later in Muira's
        career
      </p>
      <br></br>
      <img
        id="updatedGuts"
        className="mangatallimg"
        src={UpdatedGuts}
        alt="One-Eyed Male Warrior clad in black armor with flowing cape and large sword standing above child"
      />
      <p className="text">
        This is Femto, the series Antagonist, from one of the first chapters of
        Berserk
      </p>
      <br></br>
      <img
        id="firstFemto"
        className="mangatallimg"
        src={FirstFemto}
        alt="Very buff demonic looking figure with bird-skull like helmet and skin like latex with wings hanging over arms, standing"
      />
      <p className="text">
        Here is Femto from around the same point in time but drawn much later in
        Muira's career
      </p>
      <br></br>
      <img
        id="updatedFemto"
        className="mangatallimg"
        src={UpdatedFemto}
        alt="Very buff demonic looking figure with bird-skull like helmet and skin like latex with wings hanging over arms, standing atop ground that looks like faces of babies"
      />
    </section>
  );
}
