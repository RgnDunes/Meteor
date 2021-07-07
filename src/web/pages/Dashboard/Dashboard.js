import React, {useState, useEffect} from "react";
import { DasboardContainer, DasboardLink } from "./Dashboard.elements";
import {
  Table,
  TableRow,
  TableHeading,
  TableData,
} from "../../components/Table/Table.elements";
import { FormButton } from "../../components/Form/Button.elements";
import { Link } from "react-router-dom";
import db from '../../../firebase';
import {useStateValue} from '../../../StateProvider';

const Dasboard = () => {
  const [meetingData, setMeetingData] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  var count = 1;

  useEffect(() => {
    if (user) {
      db.collection(user?.email)
      .onSnapshot(snapshot => {
        setMeetingData(snapshot.docs.map(doc => doc.data()
        ))
      })
    }
  }, [])

  return (
    <DasboardContainer>
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
          <TableHeading></TableHeading>
        </TableRow>

        {meetingData?.map(({ date, meetingName, meetingId, meetingPassword, meetingDesc, startTime, endTime }) => {
          let indivTableData =  (
            <TableRow>
              <TableData>{count}</TableData>
              <TableData>{meetingName}</TableData>
              <TableData>{date}</TableData>
              <TableData>{startTime}</TableData>
              <TableData>{endTime}</TableData>
              <TableData>
                <FormButton>View</FormButton>
              </TableData>
            </TableRow>
          );
          count = count+1;
          return indivTableData;
        })}

        {/* <TableRow>
          <TableData>1</TableData>
          <TableData>Sprint</TableData>
          <TableData>2021-07-10</TableData>
          <TableData>3:00 PM</TableData>
          <TableData>4:00 PM</TableData>
          <TableData>
            <FormButton>View</FormButton>
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>2</TableData>
          <TableData>Standup</TableData>
          <TableData>2021-07-10</TableData>
          <TableData>4:00 PM</TableData>
          <TableData>5:00 PM</TableData>
          <TableData>
            <FormButton>View</FormButton>
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>2</TableData>
          <TableData>Standup</TableData>
          <TableData>2021-07-10</TableData>
          <TableData>4:00 PM</TableData>
          <TableData>5:00 PM</TableData>
          <TableData>
            <FormButton>View</FormButton>
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>2</TableData>
          <TableData>Standup</TableData>
          <TableData>2021-07-10</TableData>
          <TableData>4:00 PM</TableData>
          <TableData>5:00 PM</TableData>
          <TableData>
            <FormButton>View</FormButton>
          </TableData>
        </TableRow> */}
      </Table>
    </DasboardContainer>
  );
};

export default Dasboard;
