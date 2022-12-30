import { Flex } from '@chakra-ui/react';
import NavbarLinks from './NavbarLinks';
import Sign from './sign';

const DesktopNavbar = () => {
  return (
    <>
      <Flex gap={4} display={{ base: 'none', md: 'flex' }}>
        <NavbarLinks />
      </Flex>
      <Flex gap={4} display={{ base: 'none', md: 'flex' }}>
        <Sign />
      </Flex>
    </>
  );
};

export default DesktopNavbar;
