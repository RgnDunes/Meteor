import React, { useState, useEffect } from "react";
import { Container } from "./WebApp.elements";
import Navbar from "./components/Navbar/Navbar";
import NavSlider from "./pages/NavSlider/NavSlider";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddData from "./pages/Dashboard/AddData/AddData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const WebApp = () => {
  const [sliderOpen, setSliderOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();

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
      <Router>
        <Navbar
          sliderOpen={sliderOpen}
          toggleSliderOpen={toggleSliderOpen}
          toggleSliderClose={toggleSliderClose}
        />
        <NavSlider sliderOpen={sliderOpen} />
        <Switch>
          <Route path="/home">
            <LandingPage />
          </Route>
          {user && (
            <Route path="/dashboard/add_data">
              <AddData />
            </Route>
          )}
          {user && (
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          )}

          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default WebApp;
