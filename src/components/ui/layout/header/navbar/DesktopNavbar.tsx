import { Box, Flex } from '@chakra-ui/react';
import NavbarLinks from './NavbarLinks';
import Sign from './sign';

const DesktopNavbar = () => {
  return (
    <>
      <Flex gap={4} display={{ base: 'none', md: 'flex' }}>
        <NavbarLinks />
      </Flex>
      <Box display={{ base: 'none', md: 'block' }}>
        <Sign />
      </Box>
    </>
  );
};

export default DesktopNavbar;
