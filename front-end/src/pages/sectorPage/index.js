import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Logo, GreenBanner, TextInNav } from './styles';
import NavTab from '../../components/navtab';
import CardsTab from '../cardsTab';
import HistoryTab from '../historyTab';
import AnalyticsTab from '../analyticsTab';
import Axios from "axios";

const SectorPage = () => {
  const { selectedOption } = useParams();
  const [sectorName, setSectorName] = useState('');
  const [cardData, setCardData] = useState([]);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    if (selectedOption) {
      navigate(`/`);
    }
  };

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

  const tabs = [
    { title: 'Solicitações', content: <CardsTab /> },
    { title: 'Histórico', content: <HistoryTab /> },
    { title: 'Análise de Dados', content: <AnalyticsTab /> }
  ];

  return (
    <div>
      <GreenBanner>
        <Logo />
        <TextInNav onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)} onClick={handleEnter}> 
          {hovered ? "Voltar" : "" + sectorName} 
        </TextInNav>
      </GreenBanner>
      <NavTab tabs={tabs} />
    </div>
  );
};

export default SectorPage;