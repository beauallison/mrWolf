import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;

  z-index: 3;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  height: 200px;

  border-radius: 10px;
  padding: 30px;

  background-color: ${(props) => props.theme.colors.surface};
`;

const H2 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Inter';

  font-size: 20px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.onBackground};
  font-family: 'Metropolis';
`;

const Item = styled.p`
  color: ${(props) => props.theme.colors.onSurface};
  font-family: 'Metropolis';
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
  </Container>
);
