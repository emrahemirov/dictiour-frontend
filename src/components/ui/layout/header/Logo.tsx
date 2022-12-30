import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Box fontSize={'3xl'} fontWeight={'bold'}>
        <Text as={'span'} color={'blue'}>
          DICTI
        </Text>
        <Text as={'span'} color={'red'}>
          OUR
        </Text>
      </Box>
    </Link>
  );
};

export default Logo;
