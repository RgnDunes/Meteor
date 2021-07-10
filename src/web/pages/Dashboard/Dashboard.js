import React, { useState, useEffect } from "react";
import {
  DasboardContainer,
  DasboardLink,
  DashboardRowDataBody,
  DashboardRowDataHeader,
  DashboardRowDataHeaderSection,
  DashboardRowDataBodyRow,
  DashboardRowDataBodyRowSpan,
} from "./Dashboard.elements";
import {
  FormInput,
  FormInputDescription,
} from "../../components/Form/Input/Input.elements";
import {
  Table,
  TableRow,
  TableHeading,
  TableData,
  TableSpan,
} from "../../components/Table/Table.elements";
import { Container, NavSliderRow } from "../NavSlider/NavSlider.elements";
import { FormButton } from "../../components/Form/Button.elements";
import { Link } from "react-router-dom";
import db from "../../../firebase";
import { useStateValue } from "../../../StateProvider";
import CloseIcon from "@material-ui/icons/Close";

const Dasboard = () => {
  const [{ user }, dispatch] = useStateValue();
  const [meetingData, setMeetingData] = useState([]);
  const [openDescSlider, setOpenDescSlider] = useState(false);
  const [idSelected, setIdSelected] = useState("");
  const [dataSelected, setdataSelected] = useState({});

  const [updatedDate, setUpdatedDate] = useState("");
  const [updatedMeetingName, setUpdatedMeetingName] = useState("");
  const [updatedStartTime, setUpdatedStartTime] = useState("");
  const [updatedEndTime, setUpdatedEndTime] = useState("");
  const [updatedMeetingId, setUpdatedMeetingId] = useState("");
  const [updatedMeetingPassword, setUpdatedMeetingPassword] = useState("");
  const [updatedMeetingDesc, setUpdatedMeetingDesc] = useState("");

  var count = 1;

  useEffect(() => {
    if (user) {
      db.collection(user?.email)
        .doc("niguIP5Zk6MKgQKrbL9K")
        .collection("allMeetings")
        .onSnapshot((snapshot) => {
          setMeetingData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, []);

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

  const deleteData = (id) => {
    var promptData = prompt("Please type 'DELETE' to confirm.");
    if (promptData == "DELETE") {
      db.collection(user?.email)
        .doc("niguIP5Zk6MKgQKrbL9K")
        .collection("allMeetings")
        .doc(id)
        .delete();
      toggleDescSliderClose();
      setIdSelected("");
      setdataSelected("");
    }
  };

  const updateMeetingData = () => {
    db.collection(user?.email)
      .doc("niguIP5Zk6MKgQKrbL9K")
      .collection("allMeetings")
      .doc(idSelected)
      .update({
        date: updatedDate,
        meetingName: updatedMeetingName,
        meetingId: updatedMeetingId,
        meetingPassword: updatedMeetingPassword,
        meetingDesc: updatedMeetingDesc,
        startTime: updatedStartTime,
        endTime: updatedEndTime,
        meetingLink: dataSelected.meetingLink,
      });
  };

  const toggleDescSliderClose = () => {
    setOpenDescSlider(false);
  };

  const toggleDescSliderOpen = (data, id) => {
    setIdSelected(id);
    setdataSelected(data);
    setOpenDescSlider(true);
    setUpdatedDate(data.date);
    setUpdatedEndTime(data.endTime);
    setUpdatedMeetingName(data.meetingName);
    setUpdatedMeetingDesc(data.meetingDesc);
    setUpdatedStartTime(data.startTime);
    setUpdatedMeetingPassword(data.meetingPassword);
    setUpdatedMeetingId(data.meetingId);
  };

  return (
    <DasboardContainer>
      <Container sliderOpen={openDescSlider} left={true}>
        <DashboardRowDataHeader>
          <DashboardRowDataHeaderSection>
            <FormInput
              type="text"
              value={updatedMeetingName}
              updateField={true}
              fontSize="20px"
              fontWeight="bolder"
              onChange={(e) => setUpdatedMeetingName(e.target.value)}
            />
          </DashboardRowDataHeaderSection>
          <DashboardRowDataHeaderSection>
            <CloseIcon onClick={toggleDescSliderClose} />
          </DashboardRowDataHeaderSection>
        </DashboardRowDataHeader>
        <DashboardRowDataBody>
          <DashboardRowDataBodyRow>
            <DashboardRowDataBodyRowSpan>Date :</DashboardRowDataBodyRowSpan>{" "}
            <FormInput
              value={updatedDate}
              type="date"
              updateField={true}
              fontSize="14px"
              fontWeight="normal"
              onChange={(e) => setUpdatedDate(e.target.value)}
            />
          </DashboardRowDataBodyRow>
          {dataSelected.meetingLink && (
            <DashboardRowDataBodyRow>
              <a href={dataSelected.meetingLink} target="_blank">
                Open Meeting 🔗
              </a>
            </DashboardRowDataBodyRow>
          )}
          <DashboardRowDataBodyRow>
            <DashboardRowDataBodyRowSpan>
              Start Time
            </DashboardRowDataBodyRowSpan>{" "}
            <FormInput
              value={updatedStartTime}
              type="time"
              updateField={true}
              fontSize="14px"
              fontWeight="normal"
              onChange={(e) => setUpdatedStartTime(e.target.value)}
            />
          </DashboardRowDataBodyRow>
          <DashboardRowDataBodyRow>
            <DashboardRowDataBodyRowSpan>
              End Time :
            </DashboardRowDataBodyRowSpan>{" "}
            <FormInput
              value={updatedEndTime}
              type="time"
              updateField={true}
              fontSize="14px"
              fontWeight="normal"
              onChange={(e) => setUpdatedEndTime(e.target.value)}
            />
          </DashboardRowDataBodyRow>
          <DashboardRowDataBodyRow>
            <DashboardRowDataBodyRowSpan>
              Meeting ID :
            </DashboardRowDataBodyRowSpan>{" "}
            <FormInput
              value={updatedMeetingId}
              type="text"
              updateField={true}
              fontSize="14px"
              fontWeight="normal"
              onChange={(e) => setUpdatedMeetingId(e.target.value)}
            />
          </DashboardRowDataBodyRow>
          <DashboardRowDataBodyRow>
            <DashboardRowDataBodyRowSpan>
              Meeting Password :
            </DashboardRowDataBodyRowSpan>{" "}
            <FormInput
              value={updatedMeetingPassword}
              type="text"
              updateField={true}
              fontSize="14px"
              fontWeight="normal"
              onChange={(e) => setUpdatedMeetingPassword(e.target.value)}
            />
          </DashboardRowDataBodyRow>
          <DashboardRowDataBodyRow>
            <DashboardRowDataBodyRowSpan>
              Description :
            </DashboardRowDataBodyRowSpan>{" "}
            <FormInputDescription
              value={updatedMeetingDesc}
              rows="4"
              cols="25"
              updateField={true}
              fontSize="14px"
              fontWeight="normal"
              onChange={(e) => setUpdatedMeetingDesc(e.target.value)}
            />
          </DashboardRowDataBodyRow>
          <FormButton onClick={updateMeetingData}>Update</FormButton>
        </DashboardRowDataBody>
      </Container>

      <Table>
        <TableRow>
          <TableHeading colSpan="4">- Your Meetings -</TableHeading>
          <TableHeading>
            <Link to="/dashboard/add_data">
              <FormButton>+ Add Meeting</FormButton>
            </Link>
          </TableHeading>
        </TableRow>

        <TableRow>
          <TableHeading>S.No</TableHeading>
          <TableHeading>Meeting Name</TableHeading>
          <TableHeading>Date (yyyy-mm-dd)</TableHeading>
          <TableHeading>Start Time</TableHeading>
          <TableHeading>End Time</TableHeading>
          <TableHeading>🔍</TableHeading>
          <TableHeading>🗑</TableHeading>
        </TableRow>

        {meetingData?.map(({ id, data }) => {
          let indivTableData = (
            <TableRow key={id}>
              <TableData>{count}</TableData>
              <TableData>
                <TableSpan>
                  <a href={data.meetingLink} target="_blank">
                    {data.meetingName}
                  </a>
                </TableSpan>
              </TableData>
              <TableData>{data.date}</TableData>
              <TableData>{timeConversion(data.startTime)}</TableData>
              <TableData>{timeConversion(data.endTime)}</TableData>
              <TableData>
                <FormButton onClick={() => toggleDescSliderOpen(data, id)}>
                  🔍 View / Edit
                </FormButton>
              </TableData>
              <TableData>
                <FormButton deleteBtn="true" onClick={() => deleteData(id)}>
                  🗑 Delete
                </FormButton>
              </TableData>
            </TableRow>
          );
          count = count + 1;
          return indivTableData;
        })}
      </Table>
    </DasboardContainer>
  );
};

export default Dasboard;
