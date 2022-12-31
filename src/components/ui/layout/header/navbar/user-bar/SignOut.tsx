import { Button, Flex, Text } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
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
              toast('Success', { type: 'success' });
              router.push('/');
            })
            .catch((err) => {
              toast('Error happened while signing out', { type: 'error' });
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
