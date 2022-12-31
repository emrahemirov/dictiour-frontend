import { Box, Button } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

const AddToBucket = () => {
  const { bucketStore } = useRootStore();

  return (
    <Button
      onClick={() => {
        bucketStore.increaseBucketWord();
      }}
      colorScheme={'teal'}
    >
      <Box as={MdAddShoppingCart} fontSize={'lg'} />
    </Button>
  );
};

export default AddToBucket;
