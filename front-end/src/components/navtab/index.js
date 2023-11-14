import React, { useState } from 'react';
import { TabContainer, TabOptions, TabButton } from './styles';

const NavTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <TabContainer>
      <TabOptions>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            onClick={() => handleTabClick(index)}
            active={activeTab === index}
          >
            {tab.title}
          </TabButton>
        ))}
      </TabOptions>
      <div>{tabs[activeTab].content}</div>
    </TabContainer>
  );
};

export default NavTab;
