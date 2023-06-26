import styled from 'styled-components';
import { colors } from '../../../settings/colors/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    height: 44px;
    border: 1px solid ${colors.strongGray};
    border-radius: 10px;
    padding: 0 10px;
    font-size: 17px;
    font-family: PT Sans;
    color: ${colors.green};
    outline: none;
    &:focus {
        border: 3px solid ${colors.green};
    }
`;
export const Label = styled.label`
    font-size: 17px;
    font-family: PT Sans;
    color: ${colors.green};
    font-weight: bold;
`;
