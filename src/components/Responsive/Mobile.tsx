import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
    background-color: ${(props) => props.theme.colors.background};

    margin-top: 10%;
    margin-left: 10%;
    max-width: 70%;
  }
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

export const GithubLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
`;

const ExtensionLink = styled.a`
  color: ${(props) => props.theme.colors.secondary};
`;

export default () => (
  <Container>
    <H1>Mr Wolf</H1>
    <Description>
      A desktop application that replaces tabs with a lil' web app to help you convert timezones.
    </Description>
    <Description>
      To get started open it on your <DescriptionBold>Desktop</DescriptionBold>.
    </Description>
    <Description>No Tracking. 100% Free.</Description>
    <Description>
      With ❤️ by{' '}
      <GithubLink href="https://github.com/beauallison/" target="_blank">
        Beau Allison
      </GithubLink>
    </Description>
    <Description>
      Available for{' '}
      <ExtensionLink href="https://addons.mozilla.org/en-GB/firefox/addon/mr-wolf-app/" target="_blank">
        Firefox
      </ExtensionLink>
      {/* {' and  '}
      <ExtensionLink href="chrome-extension" target="_blank">
        Chrome
      </ExtensionLink> */}
    </Description>
  </Container>
);
