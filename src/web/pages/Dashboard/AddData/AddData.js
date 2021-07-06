import React from "react";
import { FormButton } from "../../../components/Form/Button.elements";
import Input from "../../../components/Form/Input/Input";
import { Form } from "../../../components/Form/Form.elements";
import { FormInputDescription } from "../../../components/Form/Input/Input.elements";
import { AddDataContainer } from "./AddData.elements";

const AddData = () => {
  return (
    <AddDataContainer>
      <Form>
        <Input type="date" label="Date" id="date" />
        <Input type="text" label="Meeting Name" id="meetingName" />
        <Input type="time" label="Start Time" id="startTime" />
        <Input
          type="time"
          placeholder="End Time"
          label="End Time"
          id="endTime"
        />
        <Input type="text" label="Meeting ID" id="meetingId" />
        <Input type="text" label="Meeting Password" id="meetingPassword" />
        <FormInputDescription
          placeholder="Meeting Description (if any)"
          cols="60"
          rows="5"
        />
        <FormButton>Submit</FormButton>
      </Form>
    </AddDataContainer>
  );
};

export default AddData;
