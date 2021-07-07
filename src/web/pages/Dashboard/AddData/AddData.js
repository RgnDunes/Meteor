import React, { useState } from "react";
import { FormButton } from "../../../components/Form/Button.elements";
import Input from "../../../components/Form/Input/Input";
import { Form } from "../../../components/Form/Form.elements";
import { FormInputDescription } from "../../../components/Form/Input/Input.elements";
import { AddDataContainer, AddDataContainerHeading } from "./AddData.elements";
import {useStateValue} from '../../../../StateProvider';
import db from '../../../../firebase';

const AddData = () => {
  const [{ user }, dispatch] = useStateValue();
  const [date, setDate] = useState("");
  const [meetingName, setMeetingName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [meetingPassword, setMeetingPassword] = useState("");
  const [meetingDesc, setMeetingDesc] = useState("");

  const timeConversion = (time) => {
    let timeLst = time.split(":");
    let hr = "";
    let _time = "";
    let sals = "";
    sals =
      parseInt(timeLst[0]) <= 11 ||
      (parseInt(timeLst[0]) > 11 &&
        parseInt(timeLst[0]) < 12 &&
        parseInt(timeLst[1]) <= 59) ||
      (parseInt(timeLst[0]) == 12 && parseInt(timeLst[1]) < 1)
        ? "AM"
        : "PM";
    hr =
      parseInt(timeLst[0]) > 12
        ? (parseInt(timeLst[0]) - 12).toString()
        : timeLst[0];
    let _hr = parseInt(hr) > 9 ? hr : "0" + hr;
    _time = hr + ":" + timeLst[1] + " " + sals;
    return _time;
  };

  const submitData = (e) => {
    e.preventDefault();
    let _startTime = timeConversion(startTime);
    let _endTime = timeConversion(endTime);
    db.collection(user?.email).add({
      date,
      meetingName,
      meetingId,
      meetingPassword,
      meetingDesc,
      startTime: _startTime,
      endTime:_endTime
    });

    setDate("");
    setMeetingName("");
    setMeetingId("");
    setMeetingPassword("");
    setMeetingDesc("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <AddDataContainer>
      <AddDataContainerHeading>- ADD MEETING -</AddDataContainerHeading>
      <Form>
        <Input
          type="date"
          label="Date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          type="text"
          label="Meeting Name"
          id="meetingName"
          value={meetingName}
          onChange={(e) => setMeetingName(e.target.value)}
        />
        <Input
          type="time"
          label="Start Time"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <Input
          type="time"
          placeholder="End Time"
          label="End Time"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <Input
          type="text"
          label="Meeting ID"
          id="meetingId"
          value={meetingId}
          onChange={(e) => setMeetingId(e.target.value)}
        />
        <Input
          type="text"
          label="Meeting Password"
          id="meetingPassword"
          value={meetingPassword}
          onChange={(e) => setMeetingPassword(e.target.value)}
        />
        <FormInputDescription
          placeholder="Meeting Description (if any)"
          cols="60"
          rows="5"
          value={meetingDesc}
          onChange={(e) => setMeetingDesc(e.target.value)}
        />
        <FormButton onClick={(e) => submitData(e)}>Submit</FormButton>
      </Form>
    </AddDataContainer>
  );
};

export default AddData;
