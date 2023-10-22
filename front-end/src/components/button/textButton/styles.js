import styled from 'styled-components';
import { colors } from '../../../settings/colors/colors';

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 153, 92, 0.6);
  border-radius: 10px;
  font-family: 'Nunito', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 153, 92, 0.6);
  }

  &:active {
    background-color: ${colors.primaryLight};
    transition: background-color 0.3s ease;
  }

  cursor: pointer;
`;