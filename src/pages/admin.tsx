import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next/types';

const Admin = () => {
  return <div>Admin</div>;
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session: any = await getSession(ctx);
  if (!session) return { redirect: { destination: '/' }, props: { session } };

  return {
    props: {
      session
    }
  };
};
