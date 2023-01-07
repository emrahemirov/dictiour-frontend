import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { Languages } from '@utils/enums';
import { FilterTypes } from '@utils/types';
import { useRouter } from 'next/router';
import { HiChevronDown } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

const LanguageSelect = ({ filterType }: { filterType: FilterTypes }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { filterStore } = useRootStore();

  const pushToLanguage = () =>
    router.push({
      pathname: pathname,
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
        {Languages[filterStore.language[filterType]] || 'All'}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            filterStore.resetLanguage(filterType);
            filterStore.resetPage(filterType);
            pushToLanguage();
          }}
        >
          All
        </MenuItem>
        <MenuItem
          onClick={() => {
            filterStore.setLanguage(filterType, Languages.TR);
            filterStore.resetPage(filterType);
            pushToLanguage();
          }}
        >
          TR
        </MenuItem>
        <MenuItem
          onClick={() => {
            filterStore.setLanguage(filterType, Languages.EN);
            filterStore.resetPage(filterType);
            pushToLanguage();
          }}
        >
          EN
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSelect;
