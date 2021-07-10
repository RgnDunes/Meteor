import React, { useState } from "react";
import { FormButton } from "../../../components/Form/Button.elements";
import Input from "../../../components/Form/Input/Input";
import { Form } from "../../../components/Form/Form.elements";
import { FormInputDescription } from "../../../components/Form/Input/Input.elements";
import { AddDataContainer } from "./AddData.elements";
import { useStateValue } from "../../../../StateProvider";
import db from "../../../../firebase";
import {
  Table,
  TableRow,
  TableHeading,
} from "../../../components/Table/Table.elements";
import { Link } from "react-router-dom";

const AddData = () => {
  const [{ user }, dispatch] = useStateValue();
  const [date, setDate] = useState("");
  const [meetingName, setMeetingName] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [meetingPassword, setMeetingPassword] = useState("");
  const [meetingDesc, setMeetingDesc] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    db.collection(user?.email)
      .doc("niguIP5Zk6MKgQKrbL9K")
      .collection("allMeetings")
      .add({
        date,
        meetingName,
        meetingId,
        meetingPassword,
        meetingDesc,
        startTime,
        endTime,
        meetingLink,
      });

    setDate("");
    setMeetingName("");
    setMeetingId("");
    setMeetingPassword("");
    setMeetingDesc("");
    setStartTime("");
    setEndTime("");
    setMeetingLink("");
  };

  return (
    <AddDataContainer>
      <Table>
        <TableRow>
          <TableHeading colSpan="4">- Add Meeting -</TableHeading>
          <TableHeading>
            <Link to="/dashboard">
              <FormButton>Back to Dashboard</FormButton>
            </Link>
          </TableHeading>
        </TableRow>
      </Table>
      <Form onSubmit={submitData}>
        <Input
          type="date"
          label="Date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required="required"
        />
        <Input
          type="text"
          label="Meeting Name"
          id="meetingName"
          value={meetingName}
          onChange={(e) => setMeetingName(e.target.value)}
          required="required"
        />
        <Input
          type="text"
          label="Meeting Link"
          id="meetingLink"
          value={meetingLink}
          onChange={(e) => setMeetingLink(e.target.value)}
          required="required"
        />
        <Input
          type="time"
          label="Start Time"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required="required"
        />
        <Input
          type="time"
          placeholder="End Time"
          label="End Time"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required="required"
        />
        <Input
          type="text"
          label="Meeting ID"
          id="meetingId"
          value={meetingId}
          onChange={(e) => setMeetingId(e.target.value)}
          required="required"
        />
        <Input
          type="text"
          label="Meeting Password"
          id="meetingPassword"
          value={meetingPassword}
          onChange={(e) => setMeetingPassword(e.target.value)}
          required="required"
        />
        <FormInputDescription
          placeholder="Meeting Description (if any)"
          cols="60"
          rows="5"
          value={meetingDesc}
          onChange={(e) => setMeetingDesc(e.target.value)}
          required=""
        />
        <FormButton type="submit">Submit</FormButton>
      </Form>
    </AddDataContainer>
  );
};

export default AddData;
