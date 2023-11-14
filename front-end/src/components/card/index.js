import React from 'react';
import PropTypes from 'prop-types';
import TextWithValue from '../text/textWithValue';
import TextButton from '../button/textButton';
import { Buttons, Container, CardTitle } from './styles';
import { colors } from '../../settings/colors/colors';

const Card = ({ data, openModalDetail, openModalService }) => {
  const { idAtendimento, nome, solicitacao, horarioSolicitacao, quarto } = data;

  const formatarHora = () => {
    const dateObject = new Date(horarioSolicitacao);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');

    return `${day}/${month}, ${hours}:${minutes}`;
  };

  const calcularHorario = () => {
    const agora = new Date();
    const horarioSolicitacaoDate = new Date(horarioSolicitacao);

    const diferencaEmMilissegundos = agora - horarioSolicitacaoDate;
    const diferencaEmMinutos = Math.floor(diferencaEmMilissegundos / (1000 * 60));

    if (diferencaEmMinutos < 15) {
      return 2;
    } else {
      return 3;
    }
  };

  const calcularHorarioString = () => {
    const agora = new Date();
    const horarioSolicitacaoDate = new Date(horarioSolicitacao);

    const diferencaEmMilissegundos = agora - horarioSolicitacaoDate;
    const diferencaEmMinutos = Math.floor(diferencaEmMilissegundos / (1000 * 60));

    return `Há ${diferencaEmMinutos} min.`;
  };

  const determineColor = (pri) => {
    switch (pri) {
      case 1:
        return { color: colors.Pontos1, colorDark: colors.Pontos1Dark };
      case 2:
        return { color: colors.Pontos2, colorDark: colors.Pontos2Dark };
      case 3:
        return { color: colors.Pontos3, colorDark: colors.Pontos3Dark };
      default:
        return { color: colors.Default, colorDark: colors.DefaultDark };
    }
  };
  
  const horaFormatada = formatarHora();
  const prioridade = calcularHorario();
  const tempo = calcularHorarioString();
  const cardColors = determineColor(prioridade);
  return (
    <div>
      <Container>
        <CardTitle color={cardColors.color} colorDark={cardColors.colorDark}>{`Atendimento #${idAtendimento}`}</CardTitle>
        <TextWithValue label="Nome" value={nome} />
        <TextWithValue label="Leito" value={quarto} />
        <TextWithValue label="Atendimento" value={idAtendimento} />
        <TextWithValue label="Solicitação" value={solicitacao} />
        <TextWithValue label="Horário" value={`${horaFormatada} (${tempo})`} />
        <Buttons>
          <TextButton label="Detalhes" onClick={() => openModalDetail(data)} />
          <TextButton label="Finalizar Atendimento" onClick={() => openModalService(data)} />
        </Buttons>
      </Container>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    idAtendimento: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    solicitacao: PropTypes.string.isRequired,
    quarto: PropTypes.string.isRequired,
    pontos: PropTypes.number.isRequired,
  }).isRequired,
  openModalDetail: PropTypes.func.isRequired,
  openModalService: PropTypes.func.isRequired,
};

export default Card;