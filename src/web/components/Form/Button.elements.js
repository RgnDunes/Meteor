import styled from "styled-components";

export const FormButton = styled.button`
  width: calc(100% - 80px);
  /* display: inline-block; */
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
