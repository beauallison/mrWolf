import React from 'react';
import ISettings from '../ISettings';
import ColorPicker from './components/ColorPicker';
import ThemeSelector from './components/ThemeSelector';
import styled from '@emotion/styled';
import Checkbox from './components/Checkbox';
import FontSize from './components/FontSize';
import {
  ExtensionLink,
  GithubLink,
  Title,
  TitleBold,
  SelectContainer,
  SettingContainer,
} from './components/styledComponents';
import { isExtension } from '../../../storage/isExtension';

export const SettingsRight = styled.div`
  margin-right: 20px;
`;

const calculateDisplayFont = (fontSize: number) => Math.round(fontSize * 100 + Number.EPSILON);

export default ({
  colorPalette,
  colorPrimary,
  colorSecondary,
  displayFontSize,
  updateDisplayFontSize,
  updateColorPalette,
  updateColorPrimary,
  updateColorSecondary,
  displayChecklist,
  toggleDisplayChecklist,
  currentVersion,
}: ISettings) => {
  return (
    <SettingsRight>
      <TitleBold>Checklist</TitleBold>
      <SettingContainer>
        <Title>Display Checklist</Title>
        <Checkbox checked={displayChecklist} onChange={toggleDisplayChecklist} />
      </SettingContainer>
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
      <SettingContainer>
        <Title>Font Size - {calculateDisplayFont(displayFontSize)}%</Title>
        <FontSize displayFontSize={displayFontSize} updateDisplayFontSize={updateDisplayFontSize} />
      </SettingContainer>
      {!isExtension() && (
        <>
          <TitleBold>Download the Extension</TitleBold>
          <Title>
            <ExtensionLink href="https://addons.mozilla.org/en-GB/firefox/addon/mr-wolf-app/" target="_blank">
              Firefox
            </ExtensionLink>
            {' | '}
            <ExtensionLink
              href="https://chrome.google.com/webstore/detail/mr-wolf/jkelocfjplnpcpjnmbamgfohobillnhf/"
              target="_blank"
            >
              Chrome
            </ExtensionLink>
          </Title>
        </>
      )}
      <Title>
        Version {currentVersion}.{' '}
        <GithubLink href="https://github.com/beauallison/mrWolf" target="_blank">
          Source Code
        </GithubLink>
      </Title>
      <Title>
        With ❤️ by{' '}
        <GithubLink href="https://github.com/beauallison/" target="_blank">
          Beau Allison
        </GithubLink>
      </Title>
    </SettingsRight>
  );
};
