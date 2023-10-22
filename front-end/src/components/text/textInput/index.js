import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input } from './styles';

const TextInput = ({ label, value, onChange }) => (
  <Container>
    <Label>{label}</Label>
    <Input value={value} onChange={onChange} />
  </Container>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;