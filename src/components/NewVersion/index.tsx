import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;

  z-index: 3;

  top: 50%;

  width: 300px;
  height: 200px;

  border-radius: 5px;
  padding: 30px;

  background-color: ${(props) => props.theme.colors.surface};
`;

const H2 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Inter';
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.onBackground};
  font-family: 'Metropolis';
`;

const Item = styled.p`
  color: ${(props) => props.theme.colors.onSurface};
  font-family: 'Metropolis';
`;

const GithubLink = styled.a`
  color: ${(props) => props.theme.colors.onBackground};
`;

export interface IProps {
  currentVersion: string;
  changelogToDisplay: {};
  setChangelogToDisplay: Function;
}

export default ({ currentVersion, changelogToDisplay, setChangelogToDisplay }) => (
  <Container>
    <H2>New Version {currentVersion}</H2>
    {changelogToDisplay.parsed.Added.map((item) => (
      <Item>- {item}</Item>
    ))}
  </Container>
);
