import styled from 'styled-components';
import {colors} from '../../../settings/colors/colors';
import CloseIcon from '@mui/icons-material/Close';
import SimpleText from '../../text/simpleText';

export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    gap: 35%
`;

export const Close = styled(CloseIcon)`
    cursor: pointer;
    color: ${colors.green};
`;

export const Text = styled(SimpleText)`
    color: ${colors.green};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  width: 60%;
  height: 40%;
  background-color: ${colors.white};
  padding: 20px;
  border: 2px solid ${colors.green};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;