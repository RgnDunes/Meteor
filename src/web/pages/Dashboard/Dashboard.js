import React from "react";
import { DasboardContainer, DasboardLink } from "./Dashboard.elements";
import {
  Table,
  TableRow,
  TableHeading,
  TableData,
} from "../../components/Table/Table.elements";
import { FormButton } from "../../components/Form/Button.elements";

const Dasboard = () => {
  return (
    <DasboardContainer>
      <Table>
        <TableRow>
          <TableHeading>S.No</TableHeading>
          <TableHeading>Meeting Name</TableHeading>
          <TableHeading>Start Time</TableHeading>
          <TableHeading>End Time</TableHeading>
          <TableHeading>View</TableHeading>
        </TableRow>

        <TableRow>
          <TableData>1</TableData>
          <TableData>Sprint</TableData>
          <TableData>3:00 PM</TableData>
          <TableData>4:00 PM</TableData>
          <TableData>
            <FormButton>View</FormButton>
          </TableData>
        </TableRow>

        <TableRow>
          <TableData>2</TableData>
          <TableData>Standup</TableData>
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
