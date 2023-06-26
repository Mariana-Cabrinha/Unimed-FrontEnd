import React from 'react';
import Home from './pages/home';

const App = () => {

  const dropdownOptions = [
    { id: '1', value: 'Enfermagem' },
    { id: '2', value: 'Limpeza' },
    { id: '3', value: 'Hotelaria' },
    { id: '4', value: 'Manutenção' },
    { id: '5', value: 'Nutrição' },
    { id: '6', value: 'Concierge' },
  ];

  return (
    <div>
      <Home options={dropdownOptions} />
    </div>
  );
};

export default App;