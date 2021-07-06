import React from "react";
import { Container, NavSliderRow, NavSliderButton } from "./NavSlider.elements";
import { Link } from "react-router-dom";

const NavSlider = ({ sliderOpen }) => {
  return (
    <Container sliderOpen={sliderOpen}>
      <Link to="/home">
        <NavSliderRow>Home</NavSliderRow>
      </Link>
      <Link to="/dashboard">
        <NavSliderRow>Dashboard</NavSliderRow>
      </Link>
      <Link to="mailto:singh.divyansh1802@gmail.com">
        <NavSliderRow>Contact Us</NavSliderRow>
      </Link>
      <Link to="https://rgndunes-v3.web.app/">
        <NavSliderRow>Developers</NavSliderRow>
      </Link>
      <NavSliderButton>Login / Register</NavSliderButton>
    </Container>
  );
};

export default NavSlider;
