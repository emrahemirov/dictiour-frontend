import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { GlobalWord, UserExample, UserMeaning, UserWord } from '@models';
import WordDetail from './WordDetail';
import { Languages } from '@utils/enums';

const WordItem = ({
  wordKey,
  onItemMouseMove,
  item,
  children
}: {
  wordKey: 'word' | 'toWord' | 'exampleWord' | 'globalWord';
  onItemMouseMove: (item: any) => void;
  item: GlobalWord | UserWord | UserMeaning | UserExample;
  children?: ReactNode;
}) => {
  const wordToRender = wordKey === 'globalWord' ? item : item[wordKey];

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
        <Text>{wordToRender.text}</Text>
        <Text>{Languages[wordToRender.language]}</Text>
      </Flex>
      <Flex justify={'center'} gap={2}>
        <WordDetail item={wordToRender} />
        {children}
      </Flex>
    </Flex>
  );
};

export default WordItem;
