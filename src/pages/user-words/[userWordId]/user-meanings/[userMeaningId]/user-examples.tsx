import { useRootStore } from '@components/providers';
import Add from '@components/ui/common/add';
import Filter from '@components/ui/common/filter';
import WordList from '@components/ui/common/word-list';
import { GlobalWord, UserExample } from '@models';
import { queryStringService, userDictionary } from '@services';
import { RootStoreHydration } from '@stores/root.store';
import { apiEndpoint, pageLimit } from '@utils/constants';
import { Languages } from '@utils/enums';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import type { GetServerSideProps } from 'next/types';
import { toast } from 'react-toastify';

const UserExamples = () => {
  const router = useRouter();
  const { dictionaryStore } = useRootStore();
  const { get } = useSearchParams();

  const onAdd = async (item: GlobalWord) => {
    await userDictionary
      .addUserExample(get('userMeaningId'), item)
      .then(() => {
        toast('Added', { type: 'success' });
      })
      .catch(({ response: { data } }) => {
        toast(data.message, { type: 'error' });
      });

    router.push(router.asPath);
  };

  return (
    <>
      <Filter filterType='userExamples'>
        <Add onAdd={onAdd} />
      </Filter>
      <WordList wordKey='exampleWord' items={dictionaryStore.userExamples} />
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
