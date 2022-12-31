import { Flex } from '@chakra-ui/react';
import { FilterTypes } from '@utils/types';
import LanguageSelect from './LanguageSelect';
import Pagination from './Pagination';
import Search from './Search';

const Filter = ({
  filterType,
  pushTo
}: {
  filterType: FilterTypes;
  pushTo: string;
}) => {
  return (
    <Flex
      borderRadius={6}
      p={2}
      shadow={'md'}
      gap={4}
      m={4}
      justify={'space-around'}
      flexWrap={'wrap'}
    >
      <Search filterType={filterType} pushTo={pushTo} />
      <LanguageSelect filterType={filterType} pushTo={pushTo} />
      <Pagination filterType={filterType} pushTo={pushTo} />
    </Flex>
  );
};

export default Filter;
