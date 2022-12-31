import { Stack } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { observer } from 'mobx-react-lite';
import BucketItem from './BucketItem';

const BucketList = () => {
  const { bucketStore } = useRootStore();

  return (
    <Stack spacing={4}>
      {Object.keys(bucketStore.bucketWords).map((key, index) => {
        return <BucketItem key={index} item={bucketStore.bucketWords[key]} />;
      })}
    </Stack>
  );
};

export default observer(BucketList);
