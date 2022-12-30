import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next/types';

export default function Home() {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session: any = await getSession(ctx);

  return {
    props: {
      session
    }
  };
};
