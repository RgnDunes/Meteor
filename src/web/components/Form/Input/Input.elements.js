import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 21%;
  margin: 25px;
`;

export const FormInputLabel = styled.label`
  color: black;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 4px 12px;
  line-height: 24px;
  height: 32px;
  font-size: 14px;
  border: 1px solid #dbdbdb;
  vertical-align: middle;
  outline: none;
  border-radius: 2px;
  background-color: transparent;
  color: gray;
  box-shadow: inset 0 1px 2px rgb(10 10 10 / 10%);
`;

export const FormInputDescription = styled.textarea`
  padding: 4px 12px;
  line-height: 24px;
  /* height: 32px; */
  font-size: 14px;
  border: 1px solid #dbdbdb;
  vertical-align: middle;
  /* padding: 10px; */
  /* border: 1px solid gray; */
  outline: none;
  border-radius: 2px;
  background-color: transparent;
  color: gray;
  flex: 1 0 21%;
  margin: 25px;
`;
