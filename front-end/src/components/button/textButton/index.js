import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

const TextButton = ({ label, onClick }) => {
    return (
        <Button onClick={onClick}
        >
          {label}
        </Button>
    )
};

TextButton.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default TextButton;
