import { Center, Image, Link } from "@chakra-ui/react";
import React from "react";
import berserkhead from "../../Images/berserkhead.png";

export default function Home() {
  return (
    <div className="heightvh">
      <div>
        <Center>
          <Image
            src={berserkhead}
            alt="Man in armor sitting above BERSERK logo"
          />
        </Center>
      </div>
      <header>
        <h1 className="heading">Welcome to my Berserk Fan Site!</h1>
      </header>
      <Center>
        <Link href="https://www.reddit.com/user/Jacko_2026/">
          Image courtesy of u/Jacko_2026 on Reddit.
        </Link>
      </Center>
    </div>
  );
}
