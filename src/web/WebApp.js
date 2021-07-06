import React, { useState, useEffect } from "react";
import { Container } from "./WebApp.elements";
import Navbar from "./components/Navbar/Navbar";
import NavSlider from "./pages/NavSlider/NavSlider";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddData from "./pages/Dashboard/AddData/AddData";

const WebApp = () => {
  const [sliderOpen, setSliderOpen] = useState(false);

  useEffect(() => {
    if (sliderOpen) {
      setTimeout(() => {
        setSliderOpen(false);
      }, 5000);
    }
  }, [sliderOpen]);

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
      <Dashboard />
      <AddData />
    </Container>
  );
};

export default WebApp;
