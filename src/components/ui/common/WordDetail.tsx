import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Stack,
  Button,
  Text,
  Flex,
  PopoverHeader,
  Box
} from '@chakra-ui/react';
import { GlobalWord } from '@models';
import { HiOutlineInformationCircle } from 'react-icons/hi';

const WordDetail = ({ item }: { item: GlobalWord }) => {
  if (!item) return;

  return (
    <Popover>
      <PopoverTrigger>
        <Button w={'fit-content'}>
          <Box as={HiOutlineInformationCircle} fontSize={'lg'} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Usage</PopoverHeader>
        <PopoverBody>
          <Stack>
            <Flex gap={4}>
              <Text fontWeight={'semibold'}>As Word:</Text>
              <Text>{item.asUserWord}</Text>
            </Flex>
            <Flex gap={4}>
              <Text fontWeight={'semibold'}>As Meaning:</Text>
              <Text>{item.asUserMeaning}</Text>
            </Flex>
            <Flex gap={4}>
              <Text fontWeight={'semibold'}>As Example:</Text>
              <Text>{item.asUserExample}</Text>
            </Flex>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default WordDetail;
