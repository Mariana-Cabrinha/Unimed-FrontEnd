import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Header, Text, Close , ModalContainer, ModalContent, Button } from './style';
import {colors} from '../../../settings/colors/colors';
import TextInput from '../../text/textInput';
import TextArea from '../../text/textArea';
import Axios from "axios";

const ModalService = ({ data, closeModal }) => {

    const [service, setService] = useState({});
    const {
        responsible,
        observations,
    } = service;

    const onChange = (field, e ) => {
      setService({
        ...service,
        [field]: e.target.value,
      });
    }

    const finishService = (values) => {
      Axios.post("http://localhost:3001/finish-service",{
        id: data.idAtendimento,
        responsible: service.responsible,
        observations: service.observations,
      }).then((response) =>{
        if(response){

          
        }else{
        }
      })
    }

    return (
    <ModalContainer>
      <ModalContent>
        <Header>
          <Close onClick={closeModal} />
          <Text label="Finalizar atendimento" color={colors.green}></Text>
        </  Header>
        <TextInput
          label="Responsável"
          value={responsible}
          onChange={(e) => onChange("responsible", e)}
          />
        <TextArea
          label="Observações"
          value={observations}
          onChange={(e) => onChange("observations", e)}
        />
        <Button onClick={() => {finishService()}} >Finalizar Atendimento</Button>
      </ModalContent>
    </ModalContainer>
    )
};

ModalService.propTypes = {
    data: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ModalService;
