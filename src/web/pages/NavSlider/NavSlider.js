import React from "react";
import { Container, NavSliderRow, NavSliderButton } from "./NavSlider.elements";
import { Link } from "react-router-dom";
import { auth, provider } from "../../../firebase";
import { useStateValue } from "../../../StateProvider";
import { actionTypes } from "../../../reducer";

const NavSlider = ({ sliderOpen }) => {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
    // console.log(user);
  };

  return (
    <Container sliderOpen={sliderOpen}>
      <Link to="/home">
        <NavSliderRow>Home</NavSliderRow>
      </Link>
      {user && (
        <Link to="/dashboard">
          <NavSliderRow>Dashboard</NavSliderRow>
        </Link>
      )}
      <a href="mailto:singh.divyansh1802@gmail.com">
        <NavSliderRow>Contact Us</NavSliderRow>
      </a>
      <a href="https://rgndunes-v3.web.app/">
        <NavSliderRow>Developers</NavSliderRow>
      </a>
      <NavSliderButton onClick={() => signIn()}>
        Login / Register
      </NavSliderButton>
    </Container>
  );
};

export default NavSlider;
