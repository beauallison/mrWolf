import React from 'react';
import styled from '@emotion/styled';
import CitySelector from './CitySelector';
import Checkbox from './Checkbox';
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

const SettingsContainer = styled.div`
  max-width: 95%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.onSurface};
`;

const Title = styled(Text)`
  font-family: 'Metropolis';
  margin-left: 2px;
  margin-bottom: 5px;
`;

const CitySelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ({
  home,
  setHome,
  cities,
  setCities,
  display24HourTime,
  toggleDisplay24HourTime,
  displaySeconds,
  toggleDisplaySeconds,
  isVisible,
}: IPopup) => {
  return (
    <Container isVisible={isVisible}>
      <SettingsContainer>
        <CitySelectorContainer>
          <Title>Home</Title>
          <CitySelector value={home} onChange={setHome} />
        </CitySelectorContainer>
        <CitySelectorContainer>
          <Title>Other Cities</Title>
          <CitySelector value={cities} isMulti={true} onChange={setCities} />
        </CitySelectorContainer>
        <CheckboxContainer>
          <Title>Display 24 Hour Time</Title>
          <Checkbox checked={display24HourTime} onChange={toggleDisplay24HourTime} />
        </CheckboxContainer>
        <CheckboxContainer>
          <Title>Display Seconds</Title>
          <Checkbox checked={displaySeconds} onChange={toggleDisplaySeconds} />
        </CheckboxContainer>
      </SettingsContainer>
    </Container>
  );
};
