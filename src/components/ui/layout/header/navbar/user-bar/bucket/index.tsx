import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import BucketList from './BucketList';

const Bucket = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme={'teal'}>
        <Box as={MdOutlineShoppingCart} fontSize={'lg'} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={'sm'}>
          <ModalHeader>Bucket</ModalHeader>
          <ModalCloseButton />
          <ModalBody maxH={320} overflowX={'hidden'} overflowY={'auto'}>
            <BucketList />
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Bucket;
