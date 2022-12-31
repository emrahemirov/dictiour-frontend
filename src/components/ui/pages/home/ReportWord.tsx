import { IconButton } from '@chakra-ui/react';
import { useRootStore } from '@components/providers';
import { reportService } from '@services';
import { MdReportProblem } from 'react-icons/md';

const ReportWord = () => {
  const { dictionaryStore } = useRootStore();

  const handleReportWord = () => {
    reportService.addReport(dictionaryStore.selectedGlobalWord.id);
  };

  return (
    <IconButton
      aria-label=''
      colorScheme={'red'}
      variant={'outline'}
      icon={<MdReportProblem />}
      onClick={handleReportWord}
    />
  );
};

export default ReportWord;
