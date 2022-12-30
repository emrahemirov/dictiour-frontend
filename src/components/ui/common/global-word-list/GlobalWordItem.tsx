import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { GlobalWord } from '@models';
import WordDetail from '../WordDetail';
import { Languages } from '@utils/enums';
import { useDictionaryStore } from '@components/providers/RootStoreProvider';

const GlobalWordItem = ({
  index,
  item,
  children
}: {
  index: number;
  item: GlobalWord;
  children?: ReactNode;
}) => {
  const dictionaryStore = useDictionaryStore();

  return (
    <Flex
      onClick={() => {
        dictionaryStore.setSelectedGlobalWord(index);
      }}
      w={{ base: 'full', md: '45%' }}
      flexDirection={{ base: 'column', md: 'row' }}
      p={2}
      gap={4}
      borderRadius={6}
      boxShadow={'md'}
      align={'center'}
    >
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        w={'full'}
        justify='space-around'
        align={'center'}
      >
        <Text>{item.text}</Text>
        <Text>{Languages[item.language]}</Text>
      </Flex>
      <Flex justify={'center'} gap={2}>
        <WordDetail item={item} />
        {children}
      </Flex>
    </Flex>
  );
};

export default GlobalWordItem;
