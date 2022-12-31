import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { Languages } from '@utils/enums';
import { FilterTypes } from '@utils/types';
import { useRouter } from 'next/router';
import { HiChevronDown } from 'react-icons/hi';

const LanguageSelect = ({
  filterType,
  pushTo
}: {
  filterType: FilterTypes;
  pushTo: string;
}) => {
  const router = useRouter();
  const { filterStore } = useRootStore();

  const pusToLanguage = () =>
    router.push({
      pathname: pushTo,
      query: {
        ...router.query,
        language: filterStore.language[filterType],
        page: filterStore.page[filterType]
      }
    });

  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme={'teal'}
        variant={'outline'}
        rightIcon={<HiChevronDown />}
      >
        Language
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            filterStore.resetLanguage(filterType);
            filterStore.resetPage(filterType);
            pusToLanguage();
          }}
        >
          All
        </MenuItem>
        <MenuItem
          onClick={() => {
            filterStore.setLanguage(filterType, Languages.TR);
            filterStore.resetPage(filterType);
            pusToLanguage();
          }}
        >
          Turkish
        </MenuItem>
        <MenuItem
          onClick={() => {
            filterStore.setLanguage(filterType, Languages.EN);
            filterStore.resetPage(filterType);
            pusToLanguage();
          }}
        >
          English
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSelect;
