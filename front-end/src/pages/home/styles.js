import styled from 'styled-components';
import Select from 'react-select';
import { LogoUnimed } from '../../components/logo/logoBig';
import { colors } from '../../settings/colors/colors';

export const Logo = styled(LogoUnimed)`
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.green};
`;

export const Label = styled.label`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.white};
  font-family: pt-sans;
`;

export const Dropdown = styled(Select)`
  font-size: 20px;
  width: 424px;
  height: 44px;
  font-family: PT Sans;
  option {
    &:hover {
      background-color: ${colors.green}; /* Altere a cor aqui */
    }
  };
`;

export const Button = styled.button`
  margin-top: 150px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  font-family: pt-sans;
  width: 200px;
  background-color: ${colors.white};
  color: ${colors.green};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const LabelAndDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;