import React from "react";

export default function Adaptations() {
  return (
    <div>
      <section>
        {/* This section is a description and review of all the various adaptations of Berserk */}
        <div>
          <h2 className="head">The Adaptations</h2>
          <p className="text">
            Berserk has had many different adaptations over the years. There
            have been video games, anime, even a trilogy of movies. Below is a
            video that will give a brief overview of the many different ways
            people have tried to tell the story of Berserk as well as a bit of
            info about the Manga itself. Make sure to check out the video on
            youtube and give it a like!
          </p>
          {/* This embedded video links to a youtube video I got permission to use which talks about the various adaptations of Berserk */}
          <iframe
            className="embedded"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tgWZ1H46144"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* From this point on, the rest of the opinions are my own */}
          {/* <p className="smalltext">
        The following are my thoughts on the various adaptations of Berserk.
      </p> */}
        </div>
        {/* This Section goes through all the Berserk Video Games */}
        <h3 className="head">The Games</h3>
        <div>
          <h5 className="smallhead">Sword of the Berserk: Guts' Rage</h5>
          <img
            alt="Cover Art for the game"
            className="shortgameimg"
            src={require("../../Images/SOTBGR.jpeg")}
          />
          <p className="text">
            Sword of the Berserk for the Sega Dreamcast is a pretty unique game
            because the author of Berserk actually wrote the plot for the game.
            The game revolves around Guts and Casca getting wind of a potential
            cure for all illnesses and diseases, however the cure proves to be
            deadly with quite a bit of lives lost as Guts tries to unravel the
            mystery in hopes of curing his beloved Casca. It can also be
            considered canon and part of the official Berserk story. Both the
            Berserk community and game critics agree that the game has
            responsive gameplay with a decent plot and if you are fan of Berserk
            you should definitely play it!
          </p>
        </div>
        <div>
          <h5 className="smallhead">Berserk: Millennium Falcon</h5>
          <img
            alt="Cover Art for the game"
            className="longgameimg"
            src={require("../../Images/BMF.jpg")}
          />
          <p className="text">
            Berserk: Millennium Falcon for the Playstation 2 follows more
            closely to the traditional adaption route of simply adapting the
            story of the Berserk into the medium of video games as opposed to
            being an original story within Berserk like Sword of the Berserk
            was. A significant increase in budget was given for this game so the
            graphics and gameplay see various improvements. The story follows
            the events of volume 22 - 27 of the manga.
          </p>
        </div>
        <div>
          <h5 className="smallhead">Berserk and the Band of the Hawk</h5>
          <img
            alt="Cover Art for the game"
            className="longgameimg"
            src={require("../../Images/BATBOTH.jpg")}
          />
          <p className="text">
            Berserk and the Band of the Hawk or Berserk Musou as it is also
            called is the most high profile and most recent video game based on
            Berserk. It made the monumental effort of trying to adopt almost the
            entirety of Berserk's story and succeeded to mixed results. This
            particular adaptation takes the biggest leap in not only production
            but style of gameplay from the rest of the video games based on
            Berserk. This is due to this entry actually being a spinoff of the
            famous Dynasty Warriors franchise from Japan that involves taking on
            hordes and hordes of fodder enemies all at once which actually works
            well with Berserk. It also features full scenes from the movie
            trilogy which came out around the same time. It is considered a must
            play for fans of Berserk.
          </p>
        </div>
        {/* The following is all about the two anime adaptations */}
        <h3 className="head">The Animes</h3>
        <div>
          <h5 className="smallhead">Berserk 1997</h5>
          <img
            alt="Cover Art for the game"
            className="longgameimg"
            src={require("../../Images/B97dvd.jpg")}
          />
          <p className="text">
            Berserk 1997 mainly adapts the "Golden Age" arc from Berserk with
            quite a few things cut out and/or changed from the manga. Despite
            this, it is considered one of most beloved adaptations of Berserk
            and holds a dear place in many Berserk fans' hearts. Despite it
            leaving the story unfinished as the anime abruptly cuts towards the
            end of the arc, it's classic and nostalgic look as well as its
            beloved soundtrack have even extended its reach to the modern day
            with a resurgence on the popular social media app TikTok.
          </p>
        </div>
        <div>
          <h5 className="smallhead">Berserk 2016</h5>
          <img
            alt="Cover Art for the game"
            className="longgameimg"
            src={require("../../Images/b2016.jpg")}
          />
          <p className="text">
            This adaptation is by far the most controversial Berserk adaptation,
            it is outright despised by the majority of Berserk fans for not only
            being a particularly bad adaptation but also a bad anime in it's own
            right. While the 1997 adaptation cut some elements of the story out,
            2016 seems to be like various elements of the story were randomly
            mixed together without reason. Locations are added or changed, story
            beats are skipped, entire arcs are ignored, not to mention the
            various techinical issues the anime has. This adaptation is best
            left forgotten.
          </p>
        </div>
        {/* This section is about the movie trilogy */}
        <h3 className="head">The Movie Trilogy</h3>
        <div>
          <h5 className="smallhead">
            Berserk: Golden Age Arc I The Egg Of The King
          </h5>
          <img
            alt="Cover Art for the game"
            className="longgameimg"
            src={require("../../Images/BM1.jpg")}
          />
          <p className="text">
            The trilogy of films were another adaptation of the "Golden Age" arc
            of Berserk, just the same as the 1997 anime, with this film in
            particular covering the first third of the arc up to Griffith's
            speech about dreams that Guts overhears. However, while the trilogy
            are higher profile with bigger production, they are not as beloved
            as that anime. This comes from the films being a retread of material
            already covered as well the trouble the films took to finally get
            their footing. This film in particular struggles to decide whether
            to stick with 2D animation or use 3D. While it does cover some of
            the plot elements missing in the previously mentioned adaptation, it
            skips over or changes others. However, this film is far from bad and
            is considered a somewhat rocky start to a trilogy of films that will
            eventually give some of the most emotional scenes in the "Golden
            Age" arc the treatment they deserve.
          </p>
        </div>
        <div>
          <h5 className="smallhead">
            Berserk: Golden Age Arc II The Battle For Doldrey
          </h5>
          <img
            alt="Cover Art for the game"
            className="longgameimg"
            src={require("../../Images/BM2.jpg")}
          />
          <p className="text">
            The second film in the trilogy sees improvements in the 3D vs 2D
            issue but somehow is worse with changing the story being told. The
            wider elements remain mostly unchanged, but certain particulars are
            shifted or completely changed entirely. This is confusing for those
            who know Berserk's story and leads to many questioning, just who is
            this trilogy for? Is it for fans of Berserk? If it is then why
            change the story so much? Is it for new fans? Then why skip over
            elements so as to leave first time viewers confused and somewhat
            lost? But when the film shines, it truly shines. Despite some issues
            remaining, this film continues the trilogy on more solid footing and
            includes some of Berserk's most iconic bits and pieces brought to
            the screen beautifully as well as ending on one heck of a cliff
            hanger as we see our main characters in deathly peril.
          </p>
        </div>
        <div>
          <h5 className="smallhead">Berserk: Golden Age Arc III The Advent</h5>
          <img
            alt="Cover Art for the game"
            className="longgameimg"
            src={require("../../Images/BM3.jpg")}
          />
          <p className="text">
            The finale of the trilogy sees the films finally find their footing,
            with the ending of the Golden Age being as powerful as it is, full
            force is put into bringing the events to the screen as faithfully as
            possible. While a particular villian is skipped over, but honestly
            no one really likes him so it's not that big of a deal, the main
            events of the story are shown in all their unbearable horror. Some
            consider the films depiction of the ending of the arc to be even
            harder to watch or observe than the manga they come from and it's
            hard for to disagree. The pain and trauma are brought to life with
            agonizing detail with some details made even more painful, however
            the main thing that sets this adaptation apart is that this film
            contains the ending of the arc. This allows all the emotions to find
            their conclusion and gets past the abrupt ending of the 1997 anime,
            with a particular section towards the end of the film being one of
            the powerful scenes in all of animation.
          </p>
        </div>
      </section>
      <br></br>
      <br></br>
      <section>
        <p className="smalltext">
          The images used on this page belong to their respective copyright
          holders, I do not claim ownership
        </p>
      </section>
    </div>
  );
}
