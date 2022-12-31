import { Flex } from '@chakra-ui/react';
import { FilterTypes } from '@utils/types';
import LanguageSelect from './LanguageSelect';
import Pagination from './Pagination';
import Search from './Search';

const Filter = ({ filterType }: { filterType: FilterTypes }) => {
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
      <Search filterType={filterType} />
      <LanguageSelect filterType={filterType} />
      <Pagination filterType={filterType} />
    </Flex>
  );
};

export default Filter;
