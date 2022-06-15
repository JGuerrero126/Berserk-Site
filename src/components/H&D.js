import React from "react";
import Eclipse from "../Images/BerserkEclipse.jpg";
import RedLake from "../Images/Manga_E95_Red_Lake.png";
import Hell from "../Images/Hell.png";
import Skin from "../Images/SkinHawk.png";

export default function HandD() {
  return (
    <section>
      <h3 className="head">Horror & Despair</h3>
      <p className="text">
        The horror and outright despair that Berserk brings to the page are
        unmatched in their scale, detail, and feeling of absolute hopelessness
        they often evoke.
      </p>
      <br></br>
      <img
        id="eclipse"
        className="mangaimg"
        src={Eclipse}
        alt="An ocean of demonic looking figures about to attack an army of scared soldiers"
      />
      <img
        id="redLake"
        className="mangatallimg"
        src={RedLake}
        alt="A lake of blood filled with dismembered and ripped apart corpses"
      />
      <img
        id="hell"
        className="mangaimg"
        src={Hell}
        alt="A series of ghastly faces made of human corpses approach two figures"
      />
      <img
        id="skin"
        className="mangatallimg"
        src={Skin}
        alt="A woman looks up at an effigy made of human skin and faces in the shape of a hawk"
      />
    </section>
  );
}
