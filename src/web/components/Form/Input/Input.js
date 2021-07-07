import React from "react";
import { FormInput, FormInputLabel, InputContainer } from "./Input.elements";

const Input = ({ type, label, id, value, onChange }) => {
  return (
    <InputContainer>
      <FormInputLabel for={id}>{label}</FormInputLabel>
      <FormInput
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      ></FormInput>
    </InputContainer>
  );
};

export default Input;
