import { Flex } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Bucket from './bucket';
import Sign from './Sign';
import SignOut from './SignOut';

const UserBar = () => {
  const { status, data } = useSession();

  if (status === 'unauthenticated') return <Sign />;

  return (
    <Flex justify={'space-between'} gap={4}>
      <SignOut username={data.user.username} />
      <Bucket />
    </Flex>
  );
};

export default UserBar;
