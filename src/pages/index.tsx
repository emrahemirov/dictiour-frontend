import { Button } from '@chakra-ui/react';
import { useDictionaryStore } from '@components/providers/RootStoreProvider';
import GlobalWordList from '@components/ui/common/global-word-list';
import { RootStoreHydration } from '@stores/root.store';
import { apiEndpoint } from '@utils/constants';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next/types';

const Home = () => {
  const dictionaryStore = useDictionaryStore();

  return <GlobalWordList items={dictionaryStore.globalWords} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session: any = await getSession(ctx);

  const { data: globalWords } = await axios.get(
    `${apiEndpoint}/global-words?page=1`
  );

  return {
    props: {
      session,
      hydrationData: { dictionaryStore: { globalWords } } as RootStoreHydration
    }
  };
};
