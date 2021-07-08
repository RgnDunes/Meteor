import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  z-index: 50;
  height: 100%;
  position: fixed;
  width: ${({ left }) => (left ? "30%" : "20%")};
  transform: ${({ sliderOpen, left }) =>
    sliderOpen
      ? left
        ? "translateX(calc(100vw - 100%))"
        : ""
      : left
      ? "translateX(100vw)"
      : "translateX(-100%)"};
  transition: all 0.45s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgb(230, 230, 230);
  color: black;
`;

export const NavSliderRow = styled.div`
  width: calc(100% - 40px);
  text-align: center;
  padding: 20px;
  transition: all 0.25s ease-in-out;
  color: black;

  &:hover {
    background-color: rgb(220, 220, 220);
    border-radius: 9px;
  }
`;

export const NavSliderButton = styled.button`
  width: calc(100% - 80px);
  display: inline-block;
  text-align: center;
  padding: 20px;
  transition: all 0.25s ease-in-out;
  background-color: rgb(103, 104, 246);
  color: white;
  font-weight: bolder;
  line-height: 1.5;
  letter-spacing: 1.5;
  outline: none;
  border: none;
  border-radius: 9px;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    background-color: rgb(52, 128, 197);
  }
`;
