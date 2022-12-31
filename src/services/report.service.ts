import { apiEndpoint } from '@utils/constants';
import { getAuthToken } from '@utils/helpers';
import axios from 'axios';

class ReportService {
  addReport(globalWordId: string) {
    return axios.post(
      `${apiEndpoint}/reports`,
      {
        globalWordId
      },
      { headers: { Authorization: getAuthToken() } }
    );
  }

  evaluateReport({
    reportId,
    isApproved
  }: {
    reportId: string;
    isApproved: boolean;
  }) {
    return axios.post(
      `${apiEndpoint}/reports/${reportId}/evaluate`,
      {
        isApproved
      },
      { headers: { Authorization: getAuthToken() } }
    );
  }
}

export const reportService = new ReportService();
