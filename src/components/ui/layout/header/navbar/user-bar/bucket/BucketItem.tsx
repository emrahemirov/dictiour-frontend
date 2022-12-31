import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { Languages } from '@utils/enums';
import { BucketWord } from '@utils/types';
import { observer } from 'mobx-react-lite';
import { AiOutlineMinusCircle, AiOutlineDelete } from 'react-icons/ai';

const BucketItem = ({ item }: { item: BucketWord }) => {
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
          colorScheme={'red'}
          onClick={() => {
            bucketStore.removeBucketWord();
          }}
        >
          <Box color={'white'} as={AiOutlineDelete} />
        </Button>
        <Button
          flex={1}
          onClick={() => {
            bucketStore.decreaseBucketWord();
          }}
        >
          <Box color={'red'} as={AiOutlineMinusCircle} />
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

export default observer(BucketItem);
