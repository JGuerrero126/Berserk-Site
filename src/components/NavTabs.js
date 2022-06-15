import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li>
        <a
          id="home"
          href="#home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={
            currentPage === "Home" ? "nav-link active home" : "nav-link home"
          }
        >
          Homepage
        </a>
      </li>
      <li>
        <a
          id="plot"
          href="#plot"
          onClick={() => handlePageChange("Plot")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Plot" ? "nav-link active" : "nav-link"}
        >
          The Plot
        </a>
      </li>
      <li>
        <a
          id="characters"
          href="#characters"
          onClick={() => handlePageChange("Characters")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Characters" ? "nav-link active" : "nav-link"
          }
        >
          The Characters
        </a>
      </li>
      <li>
        <a
          id="themes"
          href="#themes"
          onClick={() => handlePageChange("Themes")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Themes" ? "nav-link active" : "nav-link"}
        >
          The Themes
        </a>
      </li>
      <li>
        <a
          id="adaptations"
          href="#adaptations"
          onClick={() => handlePageChange("Adaptations")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Adaptations" ? "nav-link active" : "nav-link"
          }
        >
          The Adaptations
        </a>
      </li>
      <li>
        <a
          id="manga"
          href="#artwork"
          onClick={() => handlePageChange("Manga")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Manga" ? "nav-link active" : "nav-link"}
        >
          The Artwork
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
