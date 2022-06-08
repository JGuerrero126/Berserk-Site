import React from "react";
import GutsImg from "../../Images/guts-standing-big.jpg";
import CascaImg from "../../Images/cascaberserk.png";
import GriffithImg from "../../Images/griffith.jpg";
import FemtoImg from "../../Images/femtostanding.jpg";
import BlackSwordImg from "../../Images/guts-flame.png";
import CurrentCasca from "../../Images/casca-current.png";

export default function Characters() {
  return (
    <section>
      <h2 className="head">The Characters Of Berserk</h2>
      {/* This is the wider div that allows the image and name to change on hover */}
      <div className="gutschange">
        {/* This is the first group, with Guts actual name and image */}
        <div className="guts">
          <h3 className="head">Guts</h3>
          <img
            className="gutsimg"
            src={GutsImg}
            alt="Man with black armor standing and holding a very big sword"
          />
        </div>
        {/* This is the second group with Guts' alt name and image */}
        <div className="blacksword">
          <h3 className="head">The Black Swordsman</h3>
          <img
            className="gutsimg"
            src={BlackSwordImg}
            alt="Man with black armor standing and holding a very big sword"
          />
        </div>
      </div>
      {/* The following text does not change on hover */}
      <p className="text">
        The Struggler
        <br />
        <br />
        On first introduction, Guts comes off as the typical tough guy
        stereotype. He kills just because he wants to, he doesn't care about
        anyone around him, and he even actively talks down to those trying to
        help him.
        <br />
        <br />
        However, throughout the story Guts is revealed to be an incredibly
        complex and conflicted character. A character that is just trying to
        find his way through his life. The key elements of conflict in the story
        all involve Guts losing things he loves. Whether it's the woman he
        loves, the only family he has ever had, or even losing himself he is
        constantly struggling to pick up the pieces of his life. It is through
        this struggle that we come to appreciate him and even take notes from
        him on how we can approach hard times in our own lives.
      </p>
      {/* Line breaks for visual styling with no css */}
      <br />
      <br />
      {/* This group is different, only the image changes so no wider div is needed besides the one that wraps the entire name and image elements together
       */}
      <div className="casca">
        <h3 className="head">Casca</h3>
        <img
          id="pastCasca"
          className="img"
          src={CascaImg}
          alt="Woman in armor standing proud with sword extended"
        />
        <img
          id="currentCasca"
          className="img"
          src={CurrentCasca}
          alt="Woman in armor standing proud with sword extended"
        />
      </div>
      <p className="text">
        The Tortured Mind
        <br />
        <br />
        Casca is a character of immense tragedy and pain. However, when we first
        meet her she comes off as another stereotype, this times its one of the
        unstoppable female commander who hates the main character. Much like
        Guts though, we come to understand that her life has been full of pain
        and tragedy and that she too is just trying to find her way forward in a
        world that seemingly means to take everything from her just because of
        who she is.
        <br />
        <br />
        Casca goes through what some would say is the worst pain and horror any
        character in Berserk has to go through. Losing even more than Guts in
        some ways and being left in an even worse state. But her tragedy only
        works because we see her as the commander we have grown to know and
        love, not the seemingly absent minded shell of a person she ends up as.
      </p>
      <br />
      <br />
      <div className="grif">
        <div id="griffith">
          <h3 className="griffithtext head">Griffith</h3>
          <img
            className="img"
            src={GriffithImg}
            alt="Androgynous looking person standing while wearing armor"
          />
        </div>
        <div id="femto">
          <h3 className="femtotext head">Femto</h3>
          <img className="img" src={FemtoImg} alt="Demon staring at you" />
        </div>
      </div>
      <p className="text">
        The Hawk <br />
        <br />
        Griffith can only be described as a God walking the earth, even before
        he actually was one. He is a shining example of someone who's ambition
        will lead them to destroy everyone they know and love. However, this
        ambition is something to behold. From the moment we are introduced to
        him it is as if we are witnessing the origin tale of a legend.
        <br />
        <br />
        That legend is the story of a commoner who lead on army of commoners to
        the heights of nobility. Enlisting the very best he could find, like
        Guts and Casca, and leading them to victory after victory. Then, in a
        moment of weakness, he condemns them all to an eternity of torment in
        hell so he can be reborn as a God. Griffith is very much the catalyst
        for all of Berserk, he set most of the major plot into motion. But this
        makes it even harder to not feel the shock as he damns those who choose
        to fight at his side for the sake of him ambition. But as he says
        himself at a certain point in the story, "You should have known. This is
        the man I am. You of all people.", and he is right. From the beginning,
        we knew who he was. What kind of man he was. But like everyone else in
        the story, we fell for it.
      </p>
      <br />
      <br />
    </section>
  );
}
