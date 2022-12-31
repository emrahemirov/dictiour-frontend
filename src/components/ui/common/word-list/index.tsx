import { Flex } from '@chakra-ui/react';
import NoData from '../NoData';
import WordItem from './WordItem';
import { GlobalWord, UserExample, UserMeaning, UserWord } from '@models';
import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';

const WordList = ({
  wordKey,
  items,
  listItemChildren,
  onItemMouseMove
}: {
  wordKey: 'word' | 'toWord' | 'exampleWord' | 'globalWord';
  items:
    | Array<UserWord>
    | Array<UserMeaning>
    | Array<UserExample>
    | Array<GlobalWord>;
  listItemChildren?: ReactNode;
  onItemMouseMove: (item: any) => void;
}) => {
  if (!items || items.length === 0) return <NoData />;

  return (
    <Flex my={8} gap={4} flexWrap={'wrap'} justify={'center'} align={'center'}>
      {items.map((item, index) => {
        return (
          <WordItem
            key={index}
            wordKey={wordKey}
            onItemMouseMove={onItemMouseMove}
            item={item}
          >
            {listItemChildren}
          </WordItem>
        );
      })}
    </Flex>
  );
};

export default observer(WordList);
