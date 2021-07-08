import styled from "styled-components";

export const Table = styled.table`
  margin-top: 100px;
  width: 98%;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0 13px;
  background-color: white;
  border-radius: 9px;
`;

export const TableRow = styled.tr`
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:nth-of-type(odd) {
    background-color: rgb(247, 249, 250);
  }

  &:hover {
    background-color: lightyellow;
  }

  &:first-child,
  &:nth-child(2),
  &:nth-child(2):hover {
    background-color: rgb(255, 255, 255);
  }

  &:first-child {
    font-size: 1.5em;
    letter-spacing: 5px;
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

export const TableSpan = styled.span`
  border-bottom: 2px dotted dodgerblue;
  color: dodgerblue;
  cursor: pointer;
`;
