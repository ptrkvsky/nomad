import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/styles/theme';
import createEmotionCache from '@/libs/createEmotionCache';
import Header from '@/components/Header';
import GlobalStyles from '@/styles/GlobalStyle';
import React from 'react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const styles = [
    `color: white`,
    `background: hotpink`,
    `font-size: 20px`,
    `padding: 6px 8px`,
  ].join(`;`);

  const message = `SUPER CETTE MESSAGERIE`;

  // 3. Using the styles and message variable
  console.log(`%c%s`, styles, message);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Nomad</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}
