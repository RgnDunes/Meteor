import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  width: calc(100% - 40px);
  top: 0;
  padding: 20px;
  border: none;
  border-bottom: 2px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background-color: rgb(255, 255, 255);
  color: black;
`;

export const NavLogo = styled.img`
  width: 40px;
  object-fit: contain;
  border-radius: 999px;
  margin-right: 20px;
`;

export const NavContainerSection = styled.div`
  display: flex;
  align-items: center;
  font-style: italic;
`;
