import React from 'react';
import CitySelector from './CitySelector';
import Checkbox from './Checkbox';
import ISettings from '../ISettings';
import ColorPicker from './ColorPicker';
import ThemeSelector from './ThemeSelector';
import {
  Container,
  ExtensionLink,
  GithubLink,
  Title,
  TitleBold,
  CitySelectorContainer,
  SettingContainer,
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
  colorPalette,
  colorPrimary,
  colorSecondary,
  updateColorPalette,
  updateColorPrimary,
  updateColorSecondary,
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
    <SettingContainer>
      <Title>Display 24 Hour Time</Title>
      <Checkbox checked={display24HourTime} onChange={toggleDisplay24HourTime} />
    </SettingContainer>
    <SettingContainer>
      <Title>Display Seconds</Title>
      <Checkbox checked={displaySeconds} onChange={toggleDisplaySeconds} />
    </SettingContainer>
    <TitleBold>Theme</TitleBold>
    <Title>Color Palette</Title>
    <ThemeSelector onChange={updateColorPalette} value={colorPalette} />
    <SettingContainer>
      <Title>Primary Color</Title>
      <ColorPicker color={colorPrimary} onChange={updateColorPrimary} />
    </SettingContainer>
    <SettingContainer>
      <Title>Secondary Color</Title>
      <ColorPicker color={colorSecondary} onChange={updateColorSecondary} />
    </SettingContainer>
    <TitleBold>Download the Extension</TitleBold>
    <Title>
      <ExtensionLink href="https://addons.mozilla.org/en-GB/firefox/addon/mr-wolf-app/" target="_blank">
        Firefox
      </ExtensionLink>
      {/* {' | '}
      <ExtensionLink href="chrome-extension" target="_blank">
        Chrome
      </ExtensionLink> */}
    </Title>
    <Title>
      With ❤️ by{' '}
      <GithubLink href="https://github.com/beauallison/" target="_blank">
        Beau Allison
      </GithubLink>
    </Title>
  </Container>
);
