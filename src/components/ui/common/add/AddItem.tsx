import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { GlobalWord } from '@models';
import { Languages } from '@utils/enums';
import { BucketWord } from '@utils/types';
import { observer } from 'mobx-react-lite';
import { HiPlus } from 'react-icons/hi';

const AddItem = ({
  item,
  onAdd
}: {
  item: BucketWord;
  onAdd: (item: GlobalWord) => void;
}) => {
  const { dictionaryStore, bucketStore } = useRootStore();

  return (
    <Stack
      borderRadius={6}
      onMouseMove={() => {
        dictionaryStore.setSelectedGlobalWord(item.word);
      }}
      p={2}
      shadow={'md'}
      align={'center'}
      position={'relative'}
    >
      <Flex
        w={'full'}
        flexWrap={'wrap'}
        justify={'space-around'}
        alignItems={'center'}
        flex={1}
      >
        <Text>{item.word.text}</Text>
        <Text>{Languages[item.word.language]}</Text>
      </Flex>
      <Flex w={'50%'} gap={2}>
        <Button
          flex={1}
          onClick={() => {
            onAdd(item.word);
            bucketStore.decreaseBucketWord();
          }}
          colorScheme={'green'}
        >
          <Box as={HiPlus} />
        </Button>
      </Flex>

      <Text
        fontSize={12}
        p={1}
        borderRadius={4}
        bgColor={'teal'}
        color={'white'}
        top={-3}
        right={-1}
        position={'absolute'}
      >
        {item.count}
      </Text>
    </Stack>
  );
};

export default observer(AddItem);
