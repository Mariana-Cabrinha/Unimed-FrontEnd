import React from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input } from './styles';

const TextArea = ({ label, value, onChange }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Input
             value={value}
             onChange={onChange}
            />
        </Container>
    );
};

TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default TextArea;

