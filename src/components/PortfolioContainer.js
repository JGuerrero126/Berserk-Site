import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Plot from "./pages/Plot";
import Characters from "./pages/Characters";
import Themes from "./pages/Themes";
import Adaptations from "./pages/Adaptations";
import Footer from "./pages/Footer";
import Music from "./pages/Music";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Plot") {
      return <Plot />;
    }
    if (currentPage === "Characters") {
      return <Characters />;
    }
    if (currentPage === "Themes") {
      return <Themes />;
    }
    return <Adaptations />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Music />
      <Footer />
    </div>
  );
}
