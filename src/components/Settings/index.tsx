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

export default (props: ISettings) => {
  const openByDefault = props.home === null && props.cities.length === 0;
  const [popupIsVisible, setPopupIsVisible] = useState(openByDefault);

  const togglePopup = () => setPopupIsVisible(!popupIsVisible);

  return (
    <Container>
      <Icon onClick={togglePopup} />
      <Popup isVisible={popupIsVisible} {...props} />
    </Container>
  );
};
