import { Text, Button } from '@chakra-ui/react';
import { MdOutlineLanguage, MdOutlineAdminPanelSettings } from 'react-icons/md';
import { TbLanguage } from 'react-icons/tb';
import Link from 'next/link';

const NavbarLinks = () => {
  return (
    <>
      <Link href={'/'}>
        <Button w={'full'} colorScheme={'teal'} gap={2}>
          <MdOutlineLanguage />
          <Text>All Words</Text>
        </Button>
      </Link>
      <Link href={'/user-words'}>
        <Button w={'full'} colorScheme={'teal'} gap={2}>
          <TbLanguage />
          <Text>My Dictionary</Text>
        </Button>
      </Link>
    </>
  );
};

export default NavbarLinks;
