import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { FilterTypes } from '@utils/types';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

const Search = ({
  filterType,
  pushTo
}: {
  filterType: FilterTypes;
  pushTo: string;
}) => {
  const router = useRouter();
  const inputRef = useRef(null);
  const { filterStore } = useRootStore();

  const pusToSearch = () =>
    router.push({
      pathname: pushTo,
      query: {
        ...router.query,
        search: filterStore.search[filterType],
        page: filterStore.page[filterType]
      }
    });

  return (
    <Flex gap={2}>
      <Input
        ref={inputRef}
        colorScheme={'teal'}
        onChange={(e) => {
          filterStore.setSearch(filterType, e.target.value);
        }}
        placeholder='Search'
      />
      <Button
        onClick={() => {
          filterStore.resetPage(filterType);
          pusToSearch();
        }}
        colorScheme={'teal'}
      >
        <Box as={AiOutlineSearch} fontSize={'xl'} />
      </Button>
      <Button
        onClick={() => {
          filterStore.resetPage(filterType);
          filterStore.resetSearch(filterType);
          inputRef.current.value = '';
          pusToSearch();
        }}
        variant={'ghost'}
      >
        <Box as={AiOutlineClose} fontSize={'xl'} />
      </Button>
    </Flex>
  );
};

export default Search;
