import { Box, Button } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { GlobalWord } from '@models';
import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

const AddToBucket = ({ item }: { item: GlobalWord }) => {
  const { bucketStore } = useRootStore();

  return (
    <Button
      onClick={() => {
        bucketStore.addBucketWord(item);
      }}
      colorScheme={'teal'}
    >
      <Box as={MdAddShoppingCart} fontSize={'lg'} />
    </Button>
  );
};

export default AddToBucket;
