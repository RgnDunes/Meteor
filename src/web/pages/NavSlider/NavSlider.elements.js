import styled from "styled-components";

export const Container = styled.div`
  z-index: 50;
  height: 100%;
  position: fixed;
  width: 100%;
  transform: ${({ sliderOpen }) => (sliderOpen ? "" : "translateX(-100%)")};
  transition: all 0.75s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgb(40, 40, 40);
`;

export const NavSliderRow = styled.div`
  width: calc(100% - 40px);
  text-align: center;
  padding: 20px;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: rgb(51, 51, 51);
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
