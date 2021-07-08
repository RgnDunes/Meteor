import styled from "styled-components";

export const DasboardContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const DasboardLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const DashboardRowDataHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 15px;
`;

export const DashboardRowDataHeaderSection = styled.div`
  font-weight: bolder;
  text-transform: uppercase;
  font-size: larger;
  letter-spacing: 1.5px;

  &:first-child {
    text-align: center;
    flex: 1;
  }
`;

export const DashboardRowDataBody = styled.div`
  text-align: center;
  overflow: scroll;
  margin-bottom: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const DashboardRowDataBodyRow = styled.div`
  text-align: left;
  width: 100%;
  padding: 20px;

  &:nth-child(2) > a {
    padding: 5px 10px;
    border-radius: 9px;
    cursor: pointer;
    color: white;
    background-color: dodgerblue;
  }
`;

export const DashboardRowDataBodyRowSpan = styled.span`
  font-weight: bold;
`;
