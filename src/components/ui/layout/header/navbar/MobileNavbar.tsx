import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  useDisclosure
} from '@chakra-ui/react';
import { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import NavbarLinks from './NavbarLinks';
import Sign from './sign';

const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        display={{ base: 'flex', md: 'none' }}
        ref={btnRef}
        colorScheme='teal'
        onClick={onOpen}
      >
        <AiOutlineMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />

          <DrawerBody>
            <Stack my={12}>
              <NavbarLinks />
            </Stack>
            <Sign />
          </DrawerBody>

          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerExample;
