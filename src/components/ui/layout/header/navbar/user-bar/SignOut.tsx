import { Button, Flex, Text } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';

const SignOut = ({ username }: { username: string }) => {
  return (
    <Flex align={'center'} gap={4}>
      <Text>{username}</Text>
      <Button
        onClick={() => {
          signOut({ redirect: false })
            .then(() => {
              toast('Çıkış yapıldı', { type: 'success' });
            })
            .catch((err) => {
              toast('Çıkış yapılırken hata oluştu', { type: 'error' });
            });
        }}
        w={'full'}
        colorScheme={'teal'}
        variant={'outline'}
      >
        Sign out
      </Button>
    </Flex>
  );
};

export default SignOut;
