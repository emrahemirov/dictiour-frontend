import { useRootStore } from '@components/providers/RootStoreProvider';
import Filter from '@components/ui/common/filter';
import WordList from '@components/ui/common/word-list';
import AddToBucket from '@components/ui/pages/home/AddToBucket';
import { GlobalWord } from '@models';
import { queryStringService } from '@services';
import { RootStoreHydration } from '@stores/root.store';
import { apiEndpoint, pageLimit } from '@utils/constants';
import { Languages } from '@utils/enums';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next/types';

const Home = () => {
  const { dictionaryStore } = useRootStore();

  const onItemMouseMove = (item: GlobalWord) => {
    dictionaryStore.setSelectedGlobalWord(item);
  };

  return (
    <>
      <Filter filterType='globalWords' />
      <WordList
        wordKey='globalWord'
        items={dictionaryStore.globalWords}
        onItemMouseMove={onItemMouseMove}
        listItemChildren={<AddToBucket />}
      />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session: any = await getSession(ctx);

  const { page = 1, language = null, search = null } = ctx.query;

  const queryString = queryStringService.getString({
    search: search as string,
    language: language as unknown as Languages,
    page: page as string
  });

  const { data: globalWords } = await axios.get(
    `${apiEndpoint}/global-words${queryString}`
  );

  let isLastData = false;
  if (globalWords.length < pageLimit) isLastData = true;

  return {
    props: {
      session,
      hydrationData: {
        dictionaryStore: { globalWords },
        filterStore: {
          page: { globalWords: parseInt(page as string, 10) },
          language: { globalWords: language as unknown as Languages },
          isLastData: { globalWords: isLastData },
          search: { globalWords: search }
        }
      } as RootStoreHydration
    }
  };
};
