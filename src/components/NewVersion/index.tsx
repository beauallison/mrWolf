import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;

  z-index: 3;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  min-height: 200px;

  border-radius: 10px;
  border: solid 1px ${(props) => props.theme.colors.onBackground};
  padding: 35px;

  background-color: ${(props) => props.theme.colors.surface};
`;

const H2 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Inter';

  font-size: 20px;
`;

const Item = styled.p`
  color: ${(props) => props.theme.colors.onSurface};
  font-family: 'Metropolis';
`;

const OkButton = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  border: solid 1px ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  width: 50px;
  height: 35px;

  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

export interface IProps {
  currentVersion: string;
  changelogToDisplay: {};
  setChangelogToDisplay: Function;
}

export default ({ currentVersion, changelogToDisplay, setChangelogToDisplay }) => (
  <Container>
    <H2>New Version - v{currentVersion}</H2>
    {changelogToDisplay.parsed.Added.map((item) => (
      <Item>- {item}</Item>
    ))}
    <OkButton onClick={() => setChangelogToDisplay(undefined)}>Ok</OkButton>
  </Container>
);
