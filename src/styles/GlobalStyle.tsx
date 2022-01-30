import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          background-color: #f9fafc;
          min-height: 100vh;
          transition-duration: 0.2s;
          transition-property: background-color, color;
          min-height: 100vh;
        }
        @font-face {
          font-family: 'Eiko';
          src: url('/fonts/eiko/PPEiko-Thin.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Woodland UltraLight';
          src: url('/fonts/woodland/PPWoodland-Ultralight.woff') format('woff');
        }
        @font-face {
          font-family: 'Neueworld';
          src: url('/fonts/neueworld/PPNeueWorld-CondensedRegular.woff2')
            format('woff2');
        }
        @font-face {
          font-family: 'Neueworld variable';
          src: url('/fonts/neueworld/PPNeueWorld-Variable.ttf');
        }
        @font-face {
          font-family: 'Monument';
          src: url('/fonts/monument/PPMonumentExtended-Variable.ttf')
            format('ttf');
        }
        @font-face {
          font-family: 'Gilroy Semibold';
          src: url('/fonts/gilroy/Gilroy-Semibold.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Gilroy Extrabold';
          src: url('/fonts/gilroy/Gilroy-Extrabold.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Kokoro';
          src: url('/fonts/kokoro/kokoro.woff') format('woff');
        }
        @font-face {
          font-family: 'PolySans';
          src: url('/fonts/polysans/PolySans-Neutral.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Adelle Bold';
          src: url('/fonts/adelle/AdelleSansBasic_Bold.woff') format('woff');
        }

        a {
          color: var(--color-primary);
        }
        .bold,
        b,
        strong {
          font-family: var(--font-primary-bold);
        }

        header a {
          text-decoration: none;
        }

        .container {
          max-width: 1480px;
          margin-left: auto;
          margin-right: auto;
        }
      `}
    />
  );
};

export default GlobalStyles;
