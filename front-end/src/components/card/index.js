import React from 'react';
import PropTypes from 'prop-types';
import TextWithValue from '../text/textWithValue';
import TextButton from '../button/textButton';
import { Buttons, Container, CardTitle } from './styles';

const Card = ({ data , openModalDetail, openModalService}) => {
    return (
        <div>
        <CardTitle>{`Atendimento #${data.idAtendimento}`}</CardTitle>
        <Container>
            <TextWithValue label= 'Nome' value={data.nome} />
            <TextWithValue label= 'Solicitação' value={data.solicitacao} />
            <TextWithValue label= 'Status' value={data.status} />
            <Buttons>
                <TextButton label='Detalhes' onClick={() => openModalDetail(data) } />
                <TextButton label='Finalizar Atendimento' onClick={() => openModalService(data)} />
            </Buttons>
        </Container>
        </div>
    )
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
    openModalDetail: PropTypes.func.isRequired,
    openModalService: PropTypes.func.isRequired,
};

export default Card;
