import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { hydrationData, session, ...pageProps }
}: AppProps) {
  return (
    <>
      <Head>
        <title>DICTIOUR</title>
      </Head>
      <ToastContainer position={'top-left'} theme='colored' />
      <ChakraProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}
