import styled from "styled-components";

export const Table = styled.table`
  width: 50%;
  margin: 20px auto;
  text-align: center;
  box-shadow: 2px 2px 10px 10px rgba(0,0,0,0.50);
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #25b0d3;
  color: white;
`;

export const HeadTableData = styled.th`
  padding: 10px 0;
  outline: 1px solid #e7f5f9;
`;

export const TableRow = styled.tr`
  background-color: #ffffff;
  &:nth-of-type(2n) {
    background-color: #ecf1f4;
  }
`;

export const TableData = styled.td`
  padding: 10px 0;
  outline: 2px solid #e7f5f9;
`;