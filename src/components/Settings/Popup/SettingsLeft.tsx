import React from 'react';
import CitySelector from './components/CitySelector';
import Checkbox from './components/Checkbox';
import ISettings from '../ISettings';
import styled from '@emotion/styled';
import { Title, TitleBold, SelectContainer, SettingContainer } from './components/styledComponents';

const SettingsLeft = styled.div``;

export default ({
  home,
  setHome,
  display24HourTime,
  toggleDisplay24HourTime,
  displaySeconds,
  toggleDisplaySeconds,
  displayPeriod,
  toggleDisplayPeriod,
  cities,
  setCities,
}: ISettings) => (
  <SettingsLeft>
    <TitleBold>Display</TitleBold>
    <SelectContainer>
      <Title>Home (required)</Title>
      <CitySelector value={home} onChange={setHome} />
    </SelectContainer>
    <SettingContainer>
      <Title>Display 24 Hour Time</Title>
      <Checkbox checked={display24HourTime} onChange={toggleDisplay24HourTime} />
    </SettingContainer>
    <SettingContainer>
      <Title>Display Period (am/pm)</Title>
      <Checkbox checked={displayPeriod} onChange={toggleDisplayPeriod} />
    </SettingContainer>
    <SettingContainer>
      <Title>Display Seconds on Home</Title>
      <Checkbox checked={displaySeconds} onChange={toggleDisplaySeconds} />
    </SettingContainer>
    <SelectContainer>
      <Title>Other Cities</Title>
      <CitySelector value={cities} isMulti={true} onChange={setCities} />
    </SelectContainer>
  </SettingsLeft>
);
