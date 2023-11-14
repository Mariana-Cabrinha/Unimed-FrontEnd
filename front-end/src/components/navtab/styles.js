import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

export const TabOptions = styled.div`
  background-color: #f0f0f0;
  border-radius: 0.75rem;
  padding: 0.25rem;
`;

export const TabButton = styled.button`
  padding: 12px 24px;
  margin: 2px;
  border: none;
  background-color: ${(props) => (props.active ? '#fff' : 'transparent')};
  color: ${(props) => (props.active ? '#333' : '#aaa')};
  font-size: 16px;
  font-weight: 600;
  font-family: 'Josefin Sans', sans-serif;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => (props.active ? '#fff' : '#f5f5f5')};
    color: ${(props) => (props.active ? '#333' : '#666')};
  }
`;