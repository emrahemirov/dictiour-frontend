import { Flex, IconButton, Text } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

const PaginateReports = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { filterStore } = useRootStore();

  const pushToPage = () =>
    router.push({
      pathname: pathname,
      query: { ...router.query, page: filterStore.page.reportedWords }
    });

  return (
    <Flex mt={4} ml={'auto'} gap={2} align={'center'}>
      <IconButton
        onClick={() => {
          filterStore.prevPage('reportedWords');
          pushToPage();
        }}
        fontSize={'lg'}
        colorScheme={'teal'}
        aria-label='previous'
        icon={<HiChevronLeft />}
      />
      <Text textAlign={'center'} minW={8}>
        {filterStore.page.reportedWords}
      </Text>
      <IconButton
        onClick={() => {
          filterStore.nextPage('reportedWords');
          pushToPage();
        }}
        disabled={filterStore.isLastData.reportedWords}
        fontSize={'lg'}
        colorScheme={'teal'}
        aria-label='previous'
        icon={<HiChevronRight />}
      />
    </Flex>
  );
};

export default observer(PaginateReports);
