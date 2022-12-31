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
import { GlobalWord } from '@models';
import { HiPlus } from 'react-icons/hi';
import AddList from './AddList';

const Add = ({ onAdd }: { onAdd: (item: GlobalWord) => void }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} gap={2} colorScheme={'green'}>
        <Box as={HiPlus} />
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={'sm'}>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody maxH={320} overflowX={'hidden'} overflowY={'auto'}>
            <AddList onAdd={onAdd} />
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Add;
