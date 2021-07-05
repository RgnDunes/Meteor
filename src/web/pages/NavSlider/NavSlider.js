import React from "react";
import { Container, NavSliderRow, NavSliderButton } from "./NavSlider.elements";

const NavSlider = ({ sliderOpen }) => {
  return (
    <Container sliderOpen={sliderOpen}>
      <NavSliderRow>Home</NavSliderRow>
      <NavSliderRow>Add</NavSliderRow>
      <NavSliderRow>Contact Us</NavSliderRow>
      <NavSliderRow>Developers</NavSliderRow>
      <NavSliderButton>Login / Register</NavSliderButton>
    </Container>
  );
};

export default NavSlider;
