import { IconButton } from '@chakra-ui/react';
import { GlobalWord } from '@models';
import { reportService } from '@services';
import { MdReportProblem } from 'react-icons/md';

const ReportWord = ({ item }: { item: GlobalWord }) => {
  const handleReportWord = () => {
    reportService.addReport(item.id);
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
