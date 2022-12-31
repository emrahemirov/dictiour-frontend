import { useRootStore } from '@components/providers';
import { queryStringService } from '@services';
import { RootStoreHydration } from '@stores/root.store';
import { apiEndpoint, pageLimit } from '@utils/constants';
import { Languages } from '@utils/enums';
import axios from 'axios';
import { UserWord } from '@models';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next/types';
import Filter from '@components/ui/common/filter';
import WordList from '@components/ui/common/word-list';
import { observer } from 'mobx-react-lite';
import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
import { HiChevronRight, HiPlus } from 'react-icons/hi';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const UserWords = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { dictionaryStore } = useRootStore();

  const onItemMouseMove = (item: UserWord) => {
    dictionaryStore.setSelectedUserWord(item);
  };

  return (
    <>
      <Filter filterType='userWords'>
        <Button w={'fit-content'} gap={2} colorScheme={'green'}>
          <Box as={HiPlus} />
          Add
        </Button>
      </Filter>

      <WordList
        wordKey='word'
        items={dictionaryStore.userWords}
        onItemMouseMove={onItemMouseMove}
        listItemChildren={
          <IconButton
            onClick={() => {
              router.push({
                pathname: `${pathname}/${dictionaryStore.selectedUserWord.id}/user-meanings`,
                query: router.query
              });
            }}
            aria-label=''
            colorScheme={'teal'}
            fontSize={'lg'}
            icon={<HiChevronRight />}
          />
        }
      />
    </>
  );
};

export default observer(UserWords);

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
