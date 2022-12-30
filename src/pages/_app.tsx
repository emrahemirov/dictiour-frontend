import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';
import { setAuthToken } from '@utils/helpers';
import { RootStoreProvider } from '@components/providers';
import Layout from '@components/ui/layout';

export default function App({
  Component,
  pageProps: { hydrationData, session, ...pageProps }
}: AppProps) {
  if (session && typeof window !== 'undefined')
    setAuthToken(session.user.accessToken);

  return (
    <>
      <Head>
        <title>DICTIOUR</title>
      </Head>
      <ToastContainer position={'top-left'} theme='colored' />
      <ChakraProvider>
        <SessionProvider session={session}>
          <RootStoreProvider hydrationData={hydrationData}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RootStoreProvider>
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}
