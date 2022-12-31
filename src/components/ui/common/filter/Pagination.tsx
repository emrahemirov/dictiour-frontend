import { Flex, IconButton, Text } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { FilterTypes } from '@utils/types';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Pagination = ({
  filterType,
  pushTo
}: {
  filterType: FilterTypes;
  pushTo: string;
}) => {
  const router = useRouter();
  const { filterStore } = useRootStore();

  const pusToPage = () =>
    router.push({
      pathname: pushTo,
      query: { ...router.query, page: filterStore.page[filterType] }
    });

  return (
    <Flex gap={2} align={'center'}>
      <IconButton
        onClick={() => {
          filterStore.prevPage(filterType);
          pusToPage();
        }}
        fontSize={'lg'}
        colorScheme={'teal'}
        aria-label='previous'
        icon={<HiChevronLeft />}
      />
      <Text textAlign={'center'} minW={8}>
        {filterStore.page[filterType]}
      </Text>
      <IconButton
        onClick={() => {
          filterStore.nextPage(filterType);
          pusToPage();
        }}
        disabled={filterStore.isLastData[filterType]}
        fontSize={'lg'}
        colorScheme={'teal'}
        aria-label='previous'
        icon={<HiChevronRight />}
      />
    </Flex>
  );
};

export default observer(Pagination);
