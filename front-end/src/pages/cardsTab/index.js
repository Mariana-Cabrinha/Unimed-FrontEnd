import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardContainer } from './styles';
import Card from '../../components/card';
import ModalDetail from '../../components/modal/modalDetail';
import ModalService from '../../components/modal/modalService';
import Axios from "axios";

const CardsTab = () => {
  const { selectedOption } = useParams();
  const [sectorName, setSectorName] = useState('');
  const [cardData, setCardData] = useState([]);
  const [modalOpenService, setModalOpenService] = useState(false);
  const [modalOpenDetail, setModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sectorResponse = await Axios.get(`http://localhost:3001/get-sector/${selectedOption}`);
        setSectorName(sectorResponse.data.nm_unidade_basica);

        const servicesResponse = await Axios.get(`http://localhost:3001/get-services/${selectedOption}`);
        setCardData(servicesResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedOption]);

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

  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <Card data={card} openModalDetail={openModal} openModalService={openModalService} key={index} />
      ))}
      {modalOpenDetail && (
        <ModalDetail data={selectedCardData} closeModal={closeModal} />
      )}
      {modalOpenService && (
        <ModalService data={selectedCardData} closeModal={closeModalService} />
      )}
    </CardContainer>
  );
};

export default CardsTab;