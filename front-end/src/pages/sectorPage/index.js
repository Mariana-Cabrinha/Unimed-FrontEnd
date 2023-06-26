import { useParams } from 'react-router-dom';
import React, {useState} from 'react';
import { Logo, GreenBanner, TextInNav, CardContainer } from './styles';
import  Card  from '../../components/card';
import ModalDetail from '../../components/modal/modalDetail';
import ModalService from '../../components/modal/modalService';
import Axios from "axios";

const SectorPage = () => {
  const { selectedOption } = useParams();
  const [ sectorName, setSectorName ] = useState('')
  const [ cardData, setCardData ] = useState([])
  const getSector = async () => {
    await Axios.get("http://localhost:3001/get-sector/"+selectedOption,{
      cd_setor_atentimento: selectedOption,
    }).then((response) =>{
      if(response){
        setSectorName(response.data.nm_unidade_basica);
      }else{
        
      }
    })
  }
   getSector();

   const getServices = async () => {
    await Axios.get("http://localhost:3001/get-services/"+selectedOption,{
    }).then((response) =>{
      if(response){
        setCardData(response.data);     
        console.log(cardData)
       }else{
        
      }
    })
  }

  getServices();

  const [modalOpenService, setModalOpenService] = useState(false);
  const [modalOpenDetail, setModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const openModalService = (data) => {
    setSelectedCardData(data);
    setModalOpenService(true);
  };

  const openModal = (data) => {
    setSelectedCardData(data);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeModalService = () => {
    setModalOpenService(false);
  };

  // const cardData = [
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  //   {idAtendimento: '1', nome: 'João1', quarto: '10', solicitacao: 'Estou com fome', idade: '20 anos', sexo: 'Masculino', estadoDeSaude: 'Bom', tipoDePlano: 'Particular', acompanhante: 'Maria' },
  // ];

  return (
    <div>
      {console.log(sectorName)}
      <GreenBanner>
      <Logo/>
        <TextInNav>{sectorName}</TextInNav>
      </GreenBanner>
      <CardContainer>
        {cardData.map((card, index) => (
          <Card data={card} openModalDetail={openModal} openModalService={openModalService}/>
        ))}
        {modalOpenDetail && (
        <ModalDetail data={selectedCardData} closeModal={closeModal} />
      )}
      {modalOpenService && (
        <ModalService data={selectedCardData} closeModal={closeModalService} />
      )}
      </CardContainer>
    </div>
  );

};

export default SectorPage;