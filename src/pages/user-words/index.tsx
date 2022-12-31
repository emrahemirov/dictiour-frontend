import { queryStringService } from '@services';
import { RootStoreHydration } from '@stores/root.store';
import { apiEndpoint, pageLimit } from '@utils/constants';
import { Languages } from '@utils/enums';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next/types';

const UserWords = () => {
  return <div>UserWords</div>;
};

export default UserWords;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { page = 1, language = null, search = null } = ctx.query;

  const session = await getSession(ctx);
  if (!session) return { redirect: { destination: '/' }, props: { session } };

  const queryString = queryStringService.getString({
    search: search as string,
    language: language as unknown as Languages,
    page: page as string
  });

  const { data: userWords } = await axios.get(
    `${apiEndpoint}/user-words${queryString}`,
    { headers: { Authorization: session.user.accessToken } }
  );

  let isLastData = false;
  if (userWords.length < pageLimit) isLastData = true;

  return {
    props: {
      session,
      hydrationData: {
        dictionaryStore: { userWords },
        filterStore: {
          page: { userWords: parseInt(page as string, 10) },
          language: { userWords: language as unknown as Languages },
          isLastData: { userWords: isLastData },
          search: { userWords: search }
        }
      } as RootStoreHydration
    }
  };
};
