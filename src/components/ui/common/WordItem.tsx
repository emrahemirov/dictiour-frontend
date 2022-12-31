import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { GlobalWord } from '@models';
import WordDetail from './WordDetail';
import { Languages } from '@utils/enums';

const WordItem = ({
  onItemMouseMove,
  item,
  children
}: {
  onItemMouseMove: (item: any) => void;
  item: GlobalWord;
  children?: ReactNode;
}) => {
  return (
    <Flex
      onMouseMove={() => {
        onItemMouseMove(item);
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

export default WordItem;
