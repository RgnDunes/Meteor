import React, { useState, useEffect } from "react";
import { NavContainer, NavContainerSection } from "./Navbar.elements";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = ({ sliderOpen, toggleSliderClose, toggleSliderOpen }) => {
  return (
    <NavContainer>
      <NavContainerSection>meteor</NavContainerSection>
      <NavContainerSection>
        {!sliderOpen ? (
          <MenuIcon onClick={() => toggleSliderOpen()} />
        ) : (
          <CloseIcon onClick={() => toggleSliderClose()} />
        )}
      </NavContainerSection>
    </NavContainer>
  );
};

export default Navbar;
