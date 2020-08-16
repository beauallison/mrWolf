import React from 'react';
import ISettings from '../ISettings';
import SettingsLeft from './SettingsLeft';
import SettingsRight from './SettingsRight';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  display: ${(props) => (props.isVisible ? 'grid' : 'none')};
  grid-template-columns: 50% 50%;
  grid-gap: 30px;

  width: 600px;
  min-height: 330px;

  right: 5%;

  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 3%;

  padding: 30px;
`;

export interface IPopup extends ISettings {
  isVisible: boolean;
}

export default (props: IPopup) => (
  <Container isVisible={props.isVisible}>
    <SettingsLeft {...props} />
    <SettingsRight {...props} />
  </Container>
);
