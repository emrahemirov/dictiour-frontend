import { Box, Flex } from '@chakra-ui/react';
import NavbarLinks from './NavbarLinks';
import UserBar from './user-bar';

const DesktopNavbar = () => {
  return (
    <>
      <Flex gap={4} display={{ base: 'none', md: 'flex' }}>
        <NavbarLinks />
      </Flex>
      <Box display={{ base: 'none', md: 'block' }}>
        <UserBar />
      </Box>
    </>
  );
};

export default DesktopNavbar;
