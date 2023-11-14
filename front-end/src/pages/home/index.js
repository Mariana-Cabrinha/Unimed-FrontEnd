import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Logo, Container, Label, LabelAndDropdown, Button, Dropdown } from './styles';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../components/text/textInput';
import { colors } from '../../settings/colors/colors';
import Alert from '../../components/alert';

const Home = ({ options }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  const placeholder = selectedOption || "Selecione";
  const [alertInfo, setAlertInfo] = useState({ show: false, message: '', type: '' });
  
  const hideAlert = () => {
    setAlertInfo({ ...alertInfo, show: false });
  };

  const handleLogin = () => {
    // Verificação de campos vazios
    if (!email.trim() || !password.trim()) {
      setAlertInfo({ show: true, message: "Por favor, insira o email e a senha.", type: "error" });
      return;
    }
  
    // Validando o formato do email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setAlertInfo({ show: true, message: "Por favor, insira um email válido.", type: "error" });
      return;
    }
  
    // Verificando se uma opção foi selecionada
    if (!selectedOption) {
      setAlertInfo({ show: true, message: "Por favor, selecione um setor.", type: "error" });
      return;
    }
  
    // Verificação de credenciais (exemplo)
    if (email === "admin@teste.com" && password === "admin") {
      navigate(`/setor/${selectedOption.id}`);
    } else {
      setAlertInfo({ show: true, message: "Email ou senha incorretos!", type: "error" });
    }
  };

  return (
    <Container>
      <Logo />
      <LabelAndDropdown>
        {alertInfo.show && ( <Alert message={alertInfo.message} type={alertInfo.type} onHide={hideAlert} /> )}
        <TextInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextInput label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Label>Selecione o setor</Label>
        <Dropdown 
          options={options}
          value={selectedOption}
          placeholder={placeholder}
          onChange={setSelectedOption}
          getOptionLabel={(option) => option.value}
          getOptionValue={(option) => option.value}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: colors.primaryDark,
            },
          })}
          styles={{
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? colors.primaryDark : 'transparent',
              color: state.isFocused ? colors.white : 'inherit',
            }),
          }}
        />

      </LabelAndDropdown>
      <Button onClick={handleLogin}>Entrar</Button>
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
