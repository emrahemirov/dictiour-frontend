import { queryStringService } from '@services';
import { RootStoreHydration } from '@stores/root.store';
import { apiEndpoint, pageLimit } from '@utils/constants';
import { Languages } from '@utils/enums';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next/types';

const UserMeanings = () => {
  return <div>UserMeanings</div>;
};

export default UserMeanings;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session: any = await getSession(ctx);
  if (!session) return { redirect: { destination: '/' }, props: { session } };

  const { userWordId } = ctx.params;
  const { page = 1, language = null, search = null } = ctx.query;

  const queryString = queryStringService.getString({
    search: search as string,
    language: language as unknown as Languages,
    page: page as string,
    userWordId: userWordId as string
  });

  const { data: userMeanings } = await axios.get(
    `${apiEndpoint}/user-meanings${queryString}`
  );

  let isLastData = false;
  if (userMeanings.length < pageLimit) isLastData = true;

  return {
    props: {
      session,
      hydrationData: {
        dictionaryStore: { userMeanings },
        filterStore: {
          page: { userMeanings: parseInt(page as string, 10) },
          language: { userMeanings: language as unknown as Languages },
          isLastData: { userMeanings: isLastData },
          search: { userMeanings: search }
        }
      } as RootStoreHydration
    }
  };
};
