import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL || ''}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID || ''}
    >
      <Component {...pageProps} />;
    </MoralisProvider>
  );
};

export default MyApp;
