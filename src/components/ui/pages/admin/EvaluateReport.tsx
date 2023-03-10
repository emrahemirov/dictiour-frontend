import { Flex, IconButton } from '@chakra-ui/react';
import { TiTick } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';
import { reportService } from '@services';
import { ReportedWord } from '@models';
import { useRouter } from 'next/router';

const EvaluateReport = ({ item }: { item: ReportedWord }) => {
  const router = useRouter();

  const handleEvaluation = (isApproved: boolean) => {
    reportService.evaluateReport({
      reportId: item.id,
      isApproved
    });

    router.push(router.asPath);
  };

  return (
    <Flex gap={2}>
      <IconButton
        onClick={() => {
          handleEvaluation(true);
        }}
        aria-label=''
        colorScheme={'green'}
        icon={<TiTick />}
      />
      <IconButton
        onClick={() => {
          handleEvaluation(false);
        }}
        aria-label=''
        colorScheme={'red'}
        icon={<AiOutlineClose />}
      />
    </Flex>
  );
};

export default EvaluateReport;
