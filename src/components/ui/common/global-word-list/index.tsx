import { Flex } from '@chakra-ui/react';
import NoData from '../NoData';
import GlobalWordItem from './GlobalWordItem';
import { GlobalWord } from '@models';
import { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';

const GlobalWordList = ({
  items,
  listItemChildren
}: {
  items: Array<GlobalWord>;
  listItemChildren?: ReactNode;
}) => {
  if (!items || items.length === 0) return <NoData />;

  return (
    <Flex my={8} gap={4} flexWrap={'wrap'} justify={'center'} align={'center'}>
      {items.map((item, index) => {
        return (
          <GlobalWordItem key={index} index={index} item={item}>
            {listItemChildren}
          </GlobalWordItem>
        );
      })}
    </Flex>
  );
};

export default observer(GlobalWordList);
