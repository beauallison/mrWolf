import React, { useState } from 'react';
import styled from '@emotion/styled';
import Icon from './Icon';
import Popup from './Popup';
import ISettings from './ISettings';

const Container = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
`;

export default ({ home, setHome, cities, setCities }: ISettings) => {
  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const togglePopup = () => setPopupIsVisible(!popupIsVisible);

  return (
    <Container>
      <Icon onClick={togglePopup} />
      <Popup isVisible={popupIsVisible} home={home} setHome={setHome} cities={cities} setCities={setCities} />
    </Container>
  );
};
