import React from "react";
import { FormInput, FormInputLabel, InputContainer } from "./Input.elements";

const Input = ({ type, label, id, value, onChange, required }) => {
  return (
    <InputContainer>
      <FormInputLabel for={id}>{label}</FormInputLabel>
      <FormInput
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      ></FormInput>
    </InputContainer>
  );
};

export default Input;
