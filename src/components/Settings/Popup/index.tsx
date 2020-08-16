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
  SelectContainer,
  SettingContainer,
  SettingsLeft,
  SettingsRight,
} from './components';
import { isExtension } from '../../../storage/isExtension';

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
}: IPopup) => {
  return (
    <Container isVisible={isVisible}>
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
          <Title>Display Seconds</Title>
          <Checkbox checked={displaySeconds} onChange={toggleDisplaySeconds} />
        </SettingContainer>
        <SelectContainer>
          <Title>Other Cities</Title>
          <CitySelector value={cities} isMulti={true} onChange={setCities} />
        </SelectContainer>
      </SettingsLeft>
      <SettingsRight>
        <TitleBold>Theme</TitleBold>
        <SelectContainer>
          <Title>Color Palette</Title>
          <ThemeSelector onChange={updateColorPalette} value={colorPalette} />
        </SelectContainer>
        <SettingContainer>
          <Title>Primary Color</Title>
          <ColorPicker color={colorPrimary} onChange={updateColorPrimary} />
        </SettingContainer>
        <SettingContainer>
          <Title>Secondary Color</Title>
          <ColorPicker color={colorSecondary} onChange={updateColorSecondary} />
        </SettingContainer>
        <Title>
          {'Version 0.0.4 - '}
          <GithubLink href="https://github.com/beauallison/mrWolf" target="_blank">
            Source Code
          </GithubLink>
        </Title>
        {!isExtension && (
          <>
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
          </>
        )}
        <Title>
          With ❤️ by{' '}
          <GithubLink href="https://github.com/beauallison/" target="_blank">
            Beau Allison
          </GithubLink>
        </Title>
      </SettingsRight>
    </Container>
  );
};
