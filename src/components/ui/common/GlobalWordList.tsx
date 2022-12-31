import { Flex } from '@chakra-ui/react';
import NoData from './NoData';
import GlobalWordItem from './WordItem';
import { GlobalWord } from '@models';
import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';

const GlobalWordList = ({
  items,
  listItemChildren,
  onItemMouseMove
}: {
  items: Array<GlobalWord>;
  listItemChildren?: ReactNode;
  onItemMouseMove: (item: any) => void;
}) => {
  if (!items || items.length === 0) return <NoData />;

  return (
    <Flex my={8} gap={4} flexWrap={'wrap'} justify={'center'} align={'center'}>
      {items.map((item, index) => {
        return (
          <GlobalWordItem
            key={index}
            onItemMouseMove={onItemMouseMove}
            item={item}
          >
            {listItemChildren}
          </GlobalWordItem>
        );
      })}
    </Flex>
  );
};

export default observer(GlobalWordList);
