import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Logo, Container, Label, LabelAndDropdown, Button, Dropdown } from './styles';
import { useNavigate } from 'react-router-dom';

const Home = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleEnter = () => {
    navigate(`/setor/${selectedOption.id}`);
  };

  return (
    <Container>
      <Logo />
      <LabelAndDropdown>
      <Label>Selecione o Setor</Label>
      <Dropdown
        options={options}
        value={selectedOption}
        placeholder= {selectedOption ? selectedOption : "Selecione o Setor"}
        onChange={(selectedOption) => handleOptionChange(selectedOption)}
        getOptionLabel={(option) => option.value}
        getOptionValue={(option) => option.value}
        theme={(theme) => ({
          ...theme, 
          colors: {
            ...theme.colors,
            primary: '#4caf50', // Cor do dropdown selecionado
          },
        })}
        styles={{
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#4caf50' : 'transparent', // Cor do background da opção quando o mouse passa por cima
            color: state.isFocused ? '#ffffff' : 'inherit', // Cor do texto da opção quando o mouse passa por cima
          }),
        }}
      />
      </LabelAndDropdown>
      <Button disabled= {!selectedOption} onClick={handleEnter}>Entrar</Button>
    </Container>
  );
};

Home.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home;
