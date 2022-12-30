import { Box, Stack, Text } from '@chakra-ui/react';
import { MdOutlineSearchOff } from 'react-icons/md';

const NoData = () => {
  return (
    <Stack color={'grey'} align={'center'} py={12}>
      <Box as={MdOutlineSearchOff} fontSize={'8xl'} />
      <Text textTransform={'uppercase'}>oops... nothing found</Text>
    </Stack>
  );
};

export default NoData;
