import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <ChakraProvider>
      <PortfolioContainer />
    </ChakraProvider>
  );
}

export default App;
