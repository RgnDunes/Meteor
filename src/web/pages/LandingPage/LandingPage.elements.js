import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Section = styled.div`
  padding: 120px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? "rgb(255, 255, 255)" : ""};
  margin: 1rem;
  overflow: hidden;
  border-radius: 11px;
`;

export const SectionImg = styled.img`
  object-fit: contain;
  width: 20%;
  flex: 0;
  padding: 10px;
`;

export const SectionContext = styled.div`
  color: rgb(136, 136, 136);
  flex: 1;
  padding: ${({ reverse }) => (reverse ? "0 120px 0 0" : "0 0 0 120px")};
  display: grid;
  place-items: center;
`;

export const SectionContextHeading = styled.h3`
  /* color: ${({ heading }) => (heading ? "rgb(118, 118, 118)" : "white")}; */
  color: ${({ heading }) =>
    heading ? "rgb(65, 65, 65)" : "rgb(118, 118, 118)"};

  font-size: ${({ heading }) => (heading ? "1.7em" : "2em")};
  font-weight: ${({ heading }) => (heading ? "900" : "normal")};
  padding-bottom: 10px;
`;

export const SectionContextDescription = styled.div`
  color: rgb(136, 136, 136);
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

export const SectionLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 20px;
`;

export const SectionButton = styled.button`
  color: inherit;
  background-color: rgb(103, 104, 246);
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  padding: 10px 20px;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: rgb(52, 128, 197);
  }
`;
