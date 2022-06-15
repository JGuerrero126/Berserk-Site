import React from "react";
import Progression from "../Progression";
import BandL from "../B&L";
import CandJ from "../C&J";
import PandD from "../P&D";
import HandD from "../H&D";
import Rage from "../Rage";

export default function Manga() {
  return (
    <section>
      <h2 className="head">The Artwork Of Berserk</h2>
      <div>
        <Progression />
        <BandL />
        <CandJ />
        <PandD />
        <HandD />
        <Rage />
      </div>
    </section>
  );
}
