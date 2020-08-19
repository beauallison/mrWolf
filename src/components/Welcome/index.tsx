import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 10%;
  margin-left: 10%;

  background-color: ${(props) => props.theme.colors.background};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Inter';
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.onBackground};
  font-family: 'Metropolis';
`;

const DescriptionBold = styled.span`
  color: ${(props) => props.theme.colors.onBackground};
  font-family: 'Metropolis';
  font-weight: 700;
`;

const ExtensionLink = styled.a`
  color: ${(props) => props.theme.colors.secondary};
`;

const GithubLink = styled.a`
  color: ${(props) => props.theme.colors.onBackground};
`;

export default () => (
  <Container>
    <H1>Mr Wolf</H1>
    <Description>Replaces tabs with a lil' web app to help you convert timezones.</Description>
    <Description>
      To get started select a <DescriptionBold>Home</DescriptionBold> from the Settings.
    </Description>
    <Description>
      No Tracking. 100% Free and{' '}
      <GithubLink href="https://github.com/beauallison/mrWolf" target="_blank">
        Open Source
      </GithubLink>
      .
    </Description>
    <Description>
      Available for{' '}
      <ExtensionLink href="https://addons.mozilla.org/en-GB/firefox/addon/mr-wolf-app/" target="_blank">
        Firefox
      </ExtensionLink>
      {' and  '}
      <ExtensionLink
        href="https://chrome.google.com/webstore/detail/mr-wolf/jkelocfjplnpcpjnmbamgfohobillnhf/"
        target="_blank"
      >
        Chrome
      </ExtensionLink>
    </Description>
  </Container>
);
