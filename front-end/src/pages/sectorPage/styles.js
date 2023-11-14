import styled from 'styled-components';
import { LogoMini } from '../../components/logo/logoMini';
import { colors } from '../../settings/colors/colors';

export const Logo = styled(LogoMini)``;

export const GreenBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: ${colors.primaryDark};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
`;

export const TextInNav = styled.div`
  padding: 15px;
  padding-bottom: 12px;
  border-radius: 20px 20px 0 20px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  font-family: 'Nunito', sans-serif;
  font-size: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 30px;
`;