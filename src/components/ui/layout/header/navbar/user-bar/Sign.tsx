import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Sign = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSignInShown, setIsSignInShown] = useState(true);

  const openSignIn = () => setIsSignInShown(true);

  return (
    <>
      <Button
        w={'full'}
        onClick={onOpen}
        colorScheme={'teal'}
        variant={'outline'}
      >
        Sign in
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={'sm'}>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            {isSignInShown ? (
              <SignIn closeModal={onClose} />
            ) : (
              <SignUp openSignIn={openSignIn} />
            )}
          </ModalBody>

          <ModalFooter>
            <Flex w={'full'} align={'center'} justify={'space-between'} gap={4}>
              {isSignInShown ? (
                <Text>Don't have an account?</Text>
              ) : (
                <Text>Already have an account?</Text>
              )}
              <Button
                onClick={() => {
                  setIsSignInShown((prevState) => {
                    return !prevState;
                  });
                }}
                colorScheme={'teal'}
                variant={'outline'}
              >
                {isSignInShown ? 'Sign up' : 'Sign in'}
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Sign;
