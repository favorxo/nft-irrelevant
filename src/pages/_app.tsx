import type { AppProps } from 'next/app';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import NavBar from '@components/NavBar';
import GlobalStyle from '@styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { MoralisProvider } from 'react-moralis';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL}
    >
      <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThirdwebProvider>
    </MoralisProvider>
  );
};

export default MyApp;
