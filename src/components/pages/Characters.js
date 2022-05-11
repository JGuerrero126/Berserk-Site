import React from "react";
import GutsImg from "../../Images/guts-standing.jpg";
import CascaImg from "../../Images/cascaberserk.png";
import GriffithImg from "../../Images/griffith.jpg";
import FemtoImg from "../../Images/femtostanding.jpg";

export default function Characters() {
  return (
    <section>
      <h2 className="head">The Characters Of Berserk</h2>
      <h3 className="head">Guts</h3>
      <img
        className="gutsimg"
        src={GutsImg}
        alt="Man with black armor standing and holding a very big sword"
      />
      <p className="text">
        Berserk centers around the life and struggles of three characters. The
        first one I'd like to describe is the main character. The 100-Man Slayer
        himself, Guts. <br />
        <br />
        When we first see Guts we see an asshole, a mean person who cares about
        nothing besides some vague revenge that he doesn't talk much about. But
        soon enough we see cracks in that personality. We see it for what it
        truly is, a facade. Unbeknownst to us at the time, is that the Guts we
        are seeing is only there as a result of unspeakable horror and trauma he
        has just gone through. After a relatively short prelude we are sent back
        to his birth to find out how he got to where he is. The person we find
        throughout this flashback is rough and angry. He is cocky and quick to
        fight. But he is also a kind-hearted man who from the moment he was born
        has had the entire world step on him time and time again. We go with him
        on his journey as he finds where he belongs, loses everything, abandons
        all hope and then through the process of regaining that hope he finds a
        true family and something worth fighting for.
      </p>
      <br />
      <br />
      <h3 className="head">Casca</h3>
      <img
        className="img"
        src={CascaImg}
        alt="Woman in armor standing proud with sword extended"
      />
      <p className="text">
        The Second character I'd like to talk about is just as important as the
        man [Guts] himself. The "Big Sis" of the Band Of The Hawk, the badass
        known as Casca. <br />
        <br />
        Casca goes on a very different but also very similar journey to Guts.
        She is placed in constant peril, constant horrific situations, unending
        despair and hopelessness. She loses everything she held near and dear.
        But throughout the story of Berserk we see that she is a woman who wants
        to love and be loved. Casca is considered by many to one of the most
        complete and best female characters in all of manga because we see her
        fully. We see her succeed, we see her fail. We see her grow to take on
        ever increasing enemies and impossible situations. We see her be a
        complete badass, one of the leaders of the fearsome Band Of The Hawk who
        rose to Nobility through actions and deeds. We also see her left in
        state that some can consider worse than death. Casca struggles
        throughout the story, clinging to various dreams and goals despite the
        hand that fate has given her and those she cares about.
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
        The final person in our trio of leads is arguably the most important. He
        is the villain, the Hawk Of Darkness, the leader of the Band Of The
        Hawk, the Hawk himself! Griffith. <br />
        <br />
        Griffith is one of the most difficult to talk about characters. He is
        simultaneously revered and hated. He is the savior of the story, but he
        is also the devil of it. He is the one who brings our beloved characters
        to the very height of Nobility. He saves them. But he is also the one
        who damns them. Griffith is an example of ambition leading one to
        abandon those they care about, throwing away their humanity in the name
        of chasing their dreams and goals. He does undergo a character arc but
        it goes in a direction that even those who understand his actions cannot
        agree with. Griffith's role in the story is the catalyst. If there was
        no Griffith then there would be no Berserk. But maybe that would've been
        better? Or would it have been? That's the key dichotomy with Griffith
      </p>
      <br />
      <br />
    </section>
  );
}
