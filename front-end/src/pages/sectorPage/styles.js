import styled from 'styled-components';
import {LogoMini} from '../../components/logo/logoMini';
import { colors } from '../../settings/colors/colors';

export const GreenBanner = styled.div`
  background-color: ${colors.green};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(LogoMini)`
`;

export const TextInNav = styled.div`
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
  font-family: pt-sans;
  border: 2px solid ${colors.white};
  border-radius: 10px 10px 0px 10px;
  padding: 13px;

`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;
  margin: 20px 20px 20px 20px;
`;