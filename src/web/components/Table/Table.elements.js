import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0 13px;
`;

export const TableRow = styled.tr`
  &:not(:first-child) {
    /* background-color: rgb(255, 255, 255); */
  }
`;

export const TableHeading = styled.th`
  padding: 15px 0;
  line-height: 1.75;
  font-weight: bolder;
  text-transform: uppercase;
`;

export const TableData = styled.td`
  padding: 15px 0;
  line-height: 1.75;
  font-weight: normal;
`;
