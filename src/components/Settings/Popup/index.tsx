import React from 'react';
import CitySelector from './CitySelector';
import Checkbox from './Checkbox';
import ISettings from '../ISettings';
import {
  Container,
  ExtensionLink,
  GithubLink,
  Title,
  TitleBold,
  CitySelectorContainer,
  CheckboxContainer,
} from './components';

export interface IPopup extends ISettings {
  isVisible: boolean;
}

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
}: IPopup) => (
  <Container isVisible={isVisible}>
    <TitleBold>Settings</TitleBold>
    <CitySelectorContainer>
      <Title>Home (required)</Title>
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
    <TitleBold>Download the Extensions</TitleBold>
    <Title>
      <ExtensionLink href="firefox-extension" target="_blank">
        FireFox
      </ExtensionLink>
      {' | '}
      <ExtensionLink href="chrome-extension" target="_blank">
        Chrome
      </ExtensionLink>
    </Title>
    <Title>
      With ❤️ by{' '}
      <GithubLink href="https://github.com/beauallison/" target="_blank">
        Beau Allison
      </GithubLink>
    </Title>
  </Container>
);
