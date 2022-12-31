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
  Stack,
  useDisclosure
} from '@chakra-ui/react';
import { HiPlus } from 'react-icons/hi';
import AddCustom from './AddCustom';
import AddList from './AddList';

const Add = ({ onAdd }: { onAdd: (item: any) => void }) => {
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
            <Stack>
              <AddCustom onAdd={onAdd} />
              <AddList onAdd={onAdd} />
            </Stack>
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Add;
