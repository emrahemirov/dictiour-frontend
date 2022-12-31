import { useRootStore } from '@components/providers/RootStoreProvider';
import GlobalWordList from '@components/ui/common/GlobalWordList';
import AddToBucket from '@components/ui/pages/home/AddToBucket';
import { GlobalWord } from '@models';
import { RootStoreHydration } from '@stores/root.store';
import { apiEndpoint } from '@utils/constants';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next/types';

const Home = () => {
  const { dictionaryStore } = useRootStore();

  const onItemMouseMove = (item: GlobalWord) => {
    dictionaryStore.setSelectedGlobalWord(item);
  };

  return (
    <GlobalWordList
      items={dictionaryStore.globalWords}
      onItemMouseMove={onItemMouseMove}
      listItemChildren={<AddToBucket />}
    />
  );
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
