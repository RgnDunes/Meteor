import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 21%;
  margin: 25px;
`;

export const FormInputLabel = styled.label`
  color: gray;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 5px;
  border: 1px solid gray;
  outline: none;
  border-radius: 2px;
  background-color: transparent;
  color: gray;
`;

export const FormInputDescription = styled.textarea`
  padding: 10px;
  border: 1px solid gray;
  outline: none;
  border-radius: 2px;
  background-color: transparent;
  color: gray;
  flex: 1 0 21%;
  margin: 25px;
`;
