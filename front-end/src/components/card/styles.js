import styled from 'styled-components';
import {colors} from '../../settings/colors/colors';

export const Container = styled.div`
  background-color: ${colors.white};
  border: 2px solid ${colors.green};
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
  width: 314px;
  height: 140px;
`;

export const CardTitle = styled.div`
  color: ${colors.white};
  background-color: ${colors.green};  
  border-radius: 10px 10px 0px 0px;
  font-size: 20px;
  text-align: center;
  margin: none;
  padding: 5px;
  height: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

