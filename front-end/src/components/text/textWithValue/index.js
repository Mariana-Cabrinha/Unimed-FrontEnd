import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './styles';
import SimpleText from '../simpleText';
import { colors } from '../../../settings/colors/colors';

const TextWithValue = ({ label, value }) => {
    console.log(label, value)
    return (
        <Container>
            <SimpleText color={colors.green} label={`${label}:`}/>
            <SimpleText color={colors.strongGray} label={value}/>
        </Container>
    )
};

TextWithValue.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default TextWithValue;
