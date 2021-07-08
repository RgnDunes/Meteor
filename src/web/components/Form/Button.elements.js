import styled from "styled-components";

export const FormButton = styled.button`
  width: calc(100% - 40px);
  text-align: center;
  transition: all 0.25s ease-in-out;
  background-color: ${({ deleteBtn }) =>
    deleteBtn ? "red" : "rgb(103, 104, 246)"};
  color: white;
  font-weight: bolder;
  letter-spacing: 1.5;
  outline: none;
  border: none;
  border-radius: 9px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  line-height: 32px;
  white-space: nowrap;
  border: 0;
  cursor: pointer;
  box-shadow: 0 3px 13px rgb(0 0 0 / 9%), 0 1px 5px 0 rgb(0 0 0 / 14%);
  user-select: none;
  color: #fff;
  padding: 5px 16px;

  &:hover {
    background-color: ${({ deleteBtn }) =>
      deleteBtn ? "orange" : "rgb(52, 128, 197)"};
  }
`;
