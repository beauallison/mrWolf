import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './theme';

export interface ILayout {
  displayFontSize?: boolean;
  colorPrimary?: string;
  colorSecondary?: string;
}

export default ({ displayFontSize, colorPrimary, colorSecondary, children }) => {
  const customTheme = {
    ...theme,
    fontSize: displayFontSize,
  };

  if (colorPrimary) customTheme.colors.primary = colorPrimary;
  if (colorSecondary) customTheme.colors.secondary = colorSecondary;

  return (
    <>
      <Global
        styles={css`
          body {
            background-color: ${theme.colors.background};
            margin: 0px;
          }

          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('./fonts/inter/Inter-Regular.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Inter';
            font-style: italic;
            font-weight: 400;
            font-display: swap;
            src: url('./fonts/inter/Inter-Italic.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url('./fonts/inter/Inter-SemiBold.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Inter';
            font-style: italic;
            font-weight: 600;
            font-display: swap;
            src: url('./fonts/inter/Inter-SemiBoldItalic.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Metropolis';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Metropolis Regular normal'), local('Metropolis-Regularnormal'),
              url('./fonts/metropolis/metropolis-400.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Metropolis';
            font-style: italic;
            font-display: swap;
            font-weight: 400;
            src: local('Metropolis Regular italic'), local('Metropolis-Regularitalic'),
              url('./fonts/metropolis/metropolis-400italic.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Metropolis';
            font-style: normal;
            font-display: swap;
            font-weight: 600;
            src: local('Metropolis SemiBold normal'), local('Metropolis-SemiBoldnormal'),
              url('./fonts/metropolis/metropolis-600.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Metropolis';
            font-style: italic;
            font-display: swap;
            font-weight: 600;
            src: local('Metropolis SemiBold italic'), local('Metropolis-SemiBolditalic'),
              url('./fonts/metropolis/metropolis-600italic.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Metropolis';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src: local('Metropolis Bold normal'), local('Metropolis-Boldnormal'),
              url('./fonts/metropolis/metropolis-700.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Metropolis';
            font-style: italic;
            font-display: swap;
            font-weight: 700;
            src: local('Metropolis Bold italic'), local('Metropolis-Bolditalic'),
              url('./fonts/metropolis/metropolis-700italic.woff2') format('woff2');
          }
        `}
      />
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </>
  );
};
