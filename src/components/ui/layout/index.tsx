import { Container, Divider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from './header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container maxW={'5xl'}>
        <Header />
      </Container>
      <Divider />
      <Container maxW={'5xl'}>{children}</Container>
    </>
  );
};

export default Layout;
