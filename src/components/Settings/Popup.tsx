import React from 'react';
import styled from '@emotion/styled';
import CitySelector from './CitySelector';
import ISettings from './ISettings';

export interface IPopup extends ISettings {
  isVisible: boolean;
}

const Container = styled.div`
  position: absolute;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};

  width: 330px;
  height: 330px;

  right: 5%;

  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 3%;

  padding: 30px;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.onSurface};
`;

const Title = styled(Text)`
  font-family: 'Metropolis';
  margin-left: 2px;
  margin-bottom: 5px;
`;

export default ({ home, setHome, cities, setCities, isVisible }: IPopup) => (
  <Container isVisible={isVisible}>
    <Title>Home</Title>
    <CitySelector value={home} onChange={setHome} />
    <Title>Other Cities</Title>
    <CitySelector value={cities} isMulti={true} onChange={setCities} />
    <Title>Display 24 Hour Time</Title>
    <Title>Display Seconds</Title>
  </Container>
);
