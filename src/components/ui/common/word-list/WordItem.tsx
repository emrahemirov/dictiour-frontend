import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { GlobalWord, UserExample, UserMeaning, UserWord } from '@models';
import WordDetail from './WordDetail';
import { Languages } from '@utils/enums';

const WordItem = ({
  wordKey,
  item,
  children
}: {
  wordKey: 'word' | 'toWord' | 'exampleWord' | 'globalWord';
  item: GlobalWord | UserWord | UserMeaning | UserExample;
  children?:
    | ReactNode
    | ((item: GlobalWord | UserWord | UserMeaning | UserExample) => ReactNode);
}) => {
  const wordToRender = wordKey === 'globalWord' ? item : item[wordKey];

  return (
    <Flex
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
        {typeof children === 'function' ? children(item) : children}
      </Flex>
    </Flex>
  );
};

export default WordItem;
