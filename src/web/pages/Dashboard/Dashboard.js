import React from "react";
import { DasboardContainer, DasboardLink } from "./Dashboard.elements";
import {
  Table,
  TableRow,
  TableHeading,
  TableData,
} from "../../components/Table/Table.elements";
import { FormButton } from "../../components/Form/Button.elements";
import { Link } from "react-router-dom";

const Dasboard = () => {
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

        <TableRow>
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
        </TableRow>
      </Table>
    </DasboardContainer>
  );
};

export default Dasboard;
