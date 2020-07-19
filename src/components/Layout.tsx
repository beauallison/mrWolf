import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './theme';

export default ({ children }) => (
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
          font-weight: 100;
          font-display: swap;
          src: url('./fonts/inter/Inter-Thin.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: italic;
          font-weight: 100;
          font-display: swap;
          src: url('./fonts/inter/Inter-ThinItalic.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url('./fonts/inter/Inter-ExtraLight.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: italic;
          font-weight: 200;
          font-display: swap;
          src: url('./fonts/inter/Inter-ExtraLightItalic.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url('./fonts/inter/Inter-Light.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url('./fonts/inter/Inter-LightItalic.woff2') format('woff2');
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
          font-weight: 500;
          font-display: swap;
          src: url('./fonts/inter/Inter-Medium.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url('./fonts/inter/Inter-MediumItalic.woff2') format('woff2');
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
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('./fonts/inter/Inter-Bold.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url('./fonts/inter/Inter-BoldItalic.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url('./fonts/inter/Inter-ExtraBold.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: italic;
          font-weight: 800;
          font-display: swap;
          src: url('./fonts/inter/Inter-ExtraBoldItalic.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: url('./fonts/inter/Inter-Black.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Inter';
          font-style: italic;
          font-weight: 900;
          font-display: swap;
          src: url('./fonts/inter/Inter-BlackItalic.woff2') format('woff2');
        }

        /* Metropolis */

        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 100;
          src: local('Metropolis Thin normal'), local('Metropolis-Thinnormal'),
            url('./fonts/metropolis/metropolis-100.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Metropolis';
          font-style: italic;
          font-display: swap;
          font-weight: 100;
          src: local('Metropolis Thin italic'), local('Metropolis-Thinitalic'),
            url('./fonts/metropolis/metropolis-100italic.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Metropolis Light normal'), local('Metropolis-Lightnormal'),
            url('./fonts/metropolis/metropolis-300.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Metropolis';
          font-style: italic;
          font-display: swap;
          font-weight: 300;
          src: local('Metropolis Light italic'), local('Metropolis-Lightitalic'),
            url('./fonts/metropolis/metropolis-300italic.woff2') format('woff2');
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
          font-weight: 500;
          src: local('Metropolis Medium normal'), local('Metropolis-Mediumnormal'),
            url('./fonts/metropolis/metropolis-500.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Metropolis';
          font-style: italic;
          font-display: swap;
          font-weight: 500;
          src: local('Metropolis Medium italic'), local('Metropolis-Mediumitalic'),
            url('./fonts/metropolis/metropolis-500italic.woff2') format('woff2');
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

        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 800;
          src: local('Metropolis ExtraBold normal'), local('Metropolis-ExtraBoldnormal'),
            url('./fonts/metropolis/metropolis-800.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Metropolis';
          font-style: italic;
          font-display: swap;
          font-weight: 800;
          src: local('Metropolis ExtraBold italic'), local('Metropolis-ExtraBolditalic'),
            url('./fonts/metropolis/metropolis-800italic.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 900;
          src: local('Metropolis Black normal'), local('Metropolis-Blacknormal'),
            url('./fonts/metropolis/metropolis-900.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Metropolis';
          font-style: italic;
          font-display: swap;
          font-weight: 900;
          src: local('Metropolis Black italic'), local('Metropolis-Blackitalic'),
            url('./fonts/metropolis/metropolis-900italic.woff2') format('woff2');
        }
      `}
    />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
