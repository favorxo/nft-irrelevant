import type { AppProps } from 'next/app';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';
import NavBar from '@components/NavBar';
import GlobalStyle from '@styles/globalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
};

export default MyApp;
