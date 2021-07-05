import React, { useState, useEffect } from "react";
import { Container } from "./WebApp.elements";
import Navbar from "./components/Navbar/Navbar";
import NavSlider from "./pages/NavSlider/NavSlider";
import LandingPage from "./pages/LandingPage/LandingPage";

const WebApp = () => {
  const [sliderOpen, setSliderOpen] = useState(false);

  const toggleSliderOpen = () => {
    setSliderOpen(true);
  };

  const toggleSliderClose = () => {
    setSliderOpen(false);
  };

  return (
    <Container>
      <Navbar
        sliderOpen={sliderOpen}
        toggleSliderOpen={toggleSliderOpen}
        toggleSliderClose={toggleSliderClose}
      />
      <NavSlider sliderOpen={sliderOpen} />
      <LandingPage />
    </Container>
  );
};

export default WebApp;
