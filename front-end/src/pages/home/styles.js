import styled from 'styled-components';
import Select from 'react-select';
import { LogoUnimed } from '../../components/logo/logoBig';
import { colors } from '../../settings/colors/colors';

export const Logo = styled(LogoUnimed)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.primaryDark};
  font-family: 'Nunito', sans-serif;
`;

export const Label = styled.label`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  color: ${colors.dark};
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Dropdown = styled(Select)`
  font-size: 16px;
  width: 103%;
  color: ${colors.strongGray};
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 1px ${colors.primaryLight};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px 4px ${colors.primaryLight};
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 12px 24px;
  box-shadow: 0 4px 10px rgba(0, 153, 92, 0.6);
  border-radius: 10px;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 153, 92, 0.6);
  }

  &:active {
    background-color: ${colors.primaryLight};
    transition: background-color 0.3s ease;
  }

  &:disabled {
    background-color: ${colors.primaryLight};
    box-shadow: none;
    cursor: not-allowed;
  }

  cursor: pointer;
`;

export const LabelAndDropdown = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  gap: 8px;
  width: 300px;
  margin: 20px;
  padding: 20px;
  padding-bottom: 30px;
  padding-right: 30px;
`;