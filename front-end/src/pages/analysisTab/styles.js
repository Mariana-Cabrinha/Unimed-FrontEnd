import styled from 'styled-components';
import { colors } from '../../settings/colors/colors';

export const TableContainer = styled.div`
  width: 80vw;
  overflow-x: auto;
  margin-top: 30px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 5px 0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: #4CAF50;
  color: white;
`;

export const TableBody = styled.tbody`
  &:nth-child(even) {
    background-color: #f5f5f5;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;

  &:first-child {
    text-align: left;
    font-weight: bold;
  }
`;
