import { Stack } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { GlobalWord } from '@models';
import { observer } from 'mobx-react-lite';
import AddItem from './AddItem';

const AddList = ({ onAdd }: { onAdd: (item: GlobalWord) => void }) => {
  const { bucketStore } = useRootStore();

  return (
    <Stack spacing={4}>
      {Object.keys(bucketStore.bucketWords).map((key, index) => {
        return (
          <AddItem
            onAdd={onAdd}
            key={index}
            item={bucketStore.bucketWords[key]}
          />
        );
      })}
    </Stack>
  );
};

export default observer(AddList);
