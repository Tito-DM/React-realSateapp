import React from "react";
import Navbar from "../src/Components/navbar";
import GlobalStyle from "./globalStyled";
import Hero from "../src/Components/hero";
import { SliderData } from "./data/SliderData";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides ={SliderData} />
    </>
  );
}

export default App;
