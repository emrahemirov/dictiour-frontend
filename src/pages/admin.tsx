import { Flex } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import WordList from '@components/ui/common/word-list';
import EvaluateReport from '@components/ui/pages/admin/EvaluateReport';
import PaginateReports from '@components/ui/pages/admin/PaginateReports';
import { ReportedWord } from '@models';
import { RootStoreHydration } from '@stores/root.store';
import { apiEndpoint, pageLimit } from '@utils/constants';
import { UserRoles } from '@utils/enums';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps } from 'next/types';

const Admin = () => {
  const { dictionaryStore } = useRootStore();

  return (
    <>
      <Flex>
        <PaginateReports />
      </Flex>
      <WordList
        wordKey='word'
        items={dictionaryStore.reportedWords}
        listItemChildren={(item: ReportedWord) => (
          <EvaluateReport item={item} />
        )}
      />
    </>
  );
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  const { page } = ctx.query;

  if (!session || UserRoles.USER === session?.user.role)
    return { redirect: { destination: '/' }, props: { session } };

  const { data: reportedWords } = await axios.get(`${apiEndpoint}/reports`, {
    headers: { Authorization: session.user.accessToken }
  });

  let isLastData = false;
  if (reportedWords.length < pageLimit) isLastData = true;

  return {
    props: {
      session,
      hydrationData: {
        dictionaryStore: { reportedWords },
        filterStore: {
          isLastData: { reportedWords: isLastData },
          page: { reportedWords: page || 1 }
        }
      } as RootStoreHydration
    }
  };
};
