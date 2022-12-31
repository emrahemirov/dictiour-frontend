import {
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack
} from '@chakra-ui/react';
import { Languages } from '@utils/enums';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const AddCustom = ({ onAdd }: { onAdd: (item: any) => void }) => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState(null);

  return (
    <Stack my={4}>
      <Input
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder='text'
      />
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
              setLanguage(Languages.TR);
            }}
          >
            Turkish
          </MenuItem>
          <MenuItem
            onClick={() => {
              setLanguage(Languages.EN);
            }}
          >
            English
          </MenuItem>
        </MenuList>
      </Menu>
      <Button
        onClick={() => {
          onAdd({ text, language });
        }}
        disabled={!text || language === null}
        colorScheme={'teal'}
      >
        Add
      </Button>
    </Stack>
  );
};

export default AddCustom;
