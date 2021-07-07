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
        setMeetingData(snapshot.docs.map(doc => ({
          id: doc.id,
          data : doc.data()})
        ))
      })
    }
  }, [])

  const viewDesc = (id) => {
    console.log(id);
  }

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

        {meetingData?.map(({ id, data}) => {
          let indivTableData =  (
            <TableRow key={id}>
              <TableData>{count}</TableData>
              <TableData>{data.meetingName}</TableData>
              <TableData>{data.date}</TableData>
              <TableData>{data.startTime}</TableData>
              <TableData>{data.endTime}</TableData>
              <TableData>
                <FormButton onClick={() => viewDesc(id)}>View</FormButton>
              </TableData>
            </TableRow>
          );
          count = count+1;
          return indivTableData;
        })}
      </Table>
    </DasboardContainer>
  );
};

export default Dasboard;
