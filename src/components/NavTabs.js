import { Link, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Wrap justify="center" spacing="4rem">
      <WrapItem>
        <Link
          id="home"
          href="#home"
          _hover={{ color: "white" }}
          onClick={() => handlePageChange("Home")}
          className={
            currentPage === "Home" ? "nav-link active home" : "nav-link home"
          }
        >
          Homepage
        </Link>
      </WrapItem>
      <WrapItem>
        <Link
          id="plot"
          href="#plot"
          _hover={{ color: "white" }}
          onClick={() => handlePageChange("Plot")}
          className={currentPage === "Plot" ? "nav-link active" : "nav-link"}
        >
          Plot
        </Link>
      </WrapItem>
      <WrapItem>
        <Link
          id="characters"
          href="#characters"
          _hover={{ color: "white" }}
          onClick={() => handlePageChange("Characters")}
          className={
            currentPage === "Characters" ? "nav-link active" : "nav-link"
          }
        >
          Characters
        </Link>
      </WrapItem>
      <WrapItem>
        <Link
          id="themes"
          href="#themes"
          _hover={{ color: "white" }}
          onClick={() => handlePageChange("Themes")}
          className={currentPage === "Themes" ? "nav-link active" : "nav-link"}
        >
          Themes
        </Link>
      </WrapItem>
      <WrapItem>
        <Link
          id="adaptations"
          href="#adaptations"
          _hover={{ color: "white" }}
          onClick={() => handlePageChange("Adaptations")}
          className={
            currentPage === "Adaptations" ? "nav-link active" : "nav-link"
          }
        >
          Adaptations
        </Link>
      </WrapItem>
      <WrapItem>
        <Link
          id="manga"
          href="#artwork"
          _hover={{ color: "white" }}
          onClick={() => handlePageChange("Manga")}
          className={currentPage === "Manga" ? "nav-link active" : "nav-link"}
        >
          Artwork
        </Link>
      </WrapItem>
    </Wrap>
  );
}

export default NavTabs;
