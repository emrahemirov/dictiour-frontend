import { Flex } from '@chakra-ui/react';
import { FilterTypes } from '@utils/types';
import { ReactNode } from 'react';
import LanguageSelect from './LanguageSelect';
import Pagination from './Pagination';
import Search from './Search';

const Filter = ({
  filterType,
  children
}: {
  filterType: FilterTypes;
  children?: ReactNode;
}) => {
  return (
    <Flex
      w={'full'}
      borderRadius={6}
      p={2}
      shadow={'md'}
      gap={4}
      my={4}
      justify={'space-around'}
      flexWrap={'wrap'}
    >
      <Search filterType={filterType} />
      <LanguageSelect filterType={filterType} />
      <Pagination filterType={filterType} />
      {children}
    </Flex>
  );
};

export default Filter;
