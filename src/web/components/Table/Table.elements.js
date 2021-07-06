import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0 13px;
  background-color: white;
  border-radius: 9px;
`;

export const TableRow = styled.tr`
  transition: all 0.25s ease-in-out;

  &:nth-of-type(even) {
    background-color: rgb(247, 249, 250);
  }

  &:hover {
    background-color: lightyellow;
  }

  &:first-child,
  &:first-child:hover {
    background-color: rgb(255, 255, 255);
  }
`;

export const TableHeading = styled.th`
  padding: 15px 0;
  line-height: 1.75;
  font-weight: bolder;
  text-transform: uppercase;
  color: black;
`;

export const TableData = styled.td`
  padding: 3px 0;
  line-height: 1.75;
  font-weight: normal;
  color: black;
`;
