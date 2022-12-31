import { Button, Flex, Text } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignOut = ({ username }: { username: string }) => {
  const router = useRouter();

  return (
    <Flex align={'center'} gap={4}>
      <Text>{username}</Text>
      <Button
        onClick={() => {
          signOut({ redirect: false })
            .then(() => {
              toast('Çıkış yapıldı', { type: 'success' });
              router.push('/');
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
