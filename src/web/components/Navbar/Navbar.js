import React, { useState, useEffect } from "react";
import { NavContainer, NavContainerSection, NavLogo } from "./Navbar.elements";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import WebLogo from "../../../meteor.jpeg";

const Navbar = ({ sliderOpen, toggleSliderClose, toggleSliderOpen }) => {
  return (
    <NavContainer>
      <NavContainerSection>
        <NavLogo src={WebLogo} />
        meteor
      </NavContainerSection>
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
