import React from "react";
import { FormInput, FormInputLabel, InputContainer } from "./Input.elements";

const Input = ({ type, label, id }) => {
  return (
    <InputContainer>
      <FormInputLabel for={id}>{label}</FormInputLabel>
      <FormInput type={type} id={id}></FormInput>
    </InputContainer>
  );
};

export default Input;
