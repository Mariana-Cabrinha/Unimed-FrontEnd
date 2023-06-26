import React from 'react';
import PropTypes from 'prop-types';
import TextWithValue from '../../text/textWithValue';
import { Header, Text, Close , ModalContainer, ModalContent } from './style';
import {colors} from '../../../settings/colors/colors';

const ModalDetail = ({ data, closeModal }) => {
    return (
    <ModalContainer>
      <ModalContent>
        <Header>
          <Close onClick={closeModal} />
          <Text label="Detalhes do paciente" color={colors.green}></Text>
        </  Header>
        <TextWithValue label= 'Nome' value={data.nome} />
        <TextWithValue label= 'Idade' value={data.idade} />
        <TextWithValue label= 'Status' value={data.status} />
        <TextWithValue label= 'Solicitação' value={data.solicitacao} />
      </ModalContent>
    </ModalContainer>
    )
};

ModalDetail.propTypes = {
    data: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ModalDetail;
