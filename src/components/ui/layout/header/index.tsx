import { Flex } from '@chakra-ui/react';
import Logo from './Logo';
import Navbar from './navbar';

const Header = () => {
  return (
    <Flex py={4} align={'center'} justify={'space-between'}>
      <Logo />
      <Navbar />
    </Flex>
  );
};

export default Header;
