import { IconButton } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import Add from '@components/ui/common/add';
import Filter from '@components/ui/common/filter';
import WordList from '@components/ui/common/word-list';
import { GlobalWord, UserMeaning } from '@models';
import { queryStringService, userDictionary } from '@services';
import { RootStoreHydration } from '@stores/root.store';
import { apiEndpoint, pageLimit } from '@utils/constants';
import { Languages } from '@utils/enums';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import type { GetServerSideProps } from 'next/types';
import { HiChevronRight } from 'react-icons/hi';
import { toast } from 'react-toastify';

const UserMeanings = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { get } = useSearchParams();

  const { dictionaryStore } = useRootStore();

  const onAdd = async (item: GlobalWord) => {
    await userDictionary
      .addUserMeaning(get('userWordId'), item)
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
      <Filter filterType='userMeanings'>
        <Add onAdd={onAdd} />
      </Filter>
      <WordList
        wordKey='toWord'
        items={dictionaryStore.userMeanings}
        listItemChildren={(item: UserMeaning) => (
          <IconButton
            onClick={() => {
              router.push({
                pathname: `${pathname}/${item.id}/user-examples`,
                query: router.query
              });
            }}
            aria-label=''
            colorScheme={'teal'}
            fontSize={'lg'}
            icon={<HiChevronRight />}
          />
        )}
      />
    </>
  );
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
    `${apiEndpoint}/user-meanings${queryString}`,
    { headers: { Authorization: session.user.accessToken } }
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
