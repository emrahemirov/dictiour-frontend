import { useRootStore } from '@components/providers';
import Filter from '@components/ui/common/filter';
import WordList from '@components/ui/common/word-list';
import { UserExample } from '@models';
import { queryStringService } from '@services';
import { RootStoreHydration } from '@stores/root.store';
import { apiEndpoint, pageLimit } from '@utils/constants';
import { Languages } from '@utils/enums';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next/types';

const UserExamples = () => {
  const { dictionaryStore } = useRootStore();

  const onItemMouseMove = (item: UserExample) => {
    dictionaryStore.setSelectedUserExample(item);
  };

  return (
    <>
      <Filter filterType='userExamples' />
      <WordList
        wordKey='exampleWord'
        items={dictionaryStore.userExamples}
        onItemMouseMove={onItemMouseMove}
      />
    </>
  );
};

export default UserExamples;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session: any = await getSession(ctx);
  if (!session) return { redirect: { destination: '/' }, props: { session } };

  const { userMeaningId } = ctx.params;
  const { page = 1, language = null, search = null } = ctx.query;

  const queryString = queryStringService.getString({
    search: search as string,
    language: language as unknown as Languages,
    page: page as string,
    userMeaningId: userMeaningId as string
  });

  const { data: userExamples } = await axios.get(
    `${apiEndpoint}/user-examples${queryString}`,
    { headers: { Authorization: session.user.accessToken } }
  );

  let isLastData = false;
  if (userExamples.length < pageLimit) isLastData = true;

  return {
    props: {
      session,
      hydrationData: {
        dictionaryStore: { userExamples },
        filterStore: {
          page: { userExamples: parseInt(page as string, 10) },
          language: { userExamples: language as unknown as Languages },
          isLastData: { userExamples: isLastData },
          search: { userExamples: search }
        }
      } as RootStoreHydration
    }
  };
};
