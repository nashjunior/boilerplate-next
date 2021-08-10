import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';

// eslint-disable-next-line no-undef
const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>React Avançado - BoilerPlater</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <meta
        name="description"
        content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
      />
    </Head>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
);

export default App;
