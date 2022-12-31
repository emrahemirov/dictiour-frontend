import { apiEndpoint } from '@utils/constants';
import { Languages } from '@utils/enums';
import axios from 'axios';

class QueryStringService {
  getString(search: string, language: Languages, page: string) {
    let string = '?';

    if (search) string += `search=${search}&`;
    if (language) string += `language=${language}&`;
    page ? (string += `page=${page}&`) : (string += `page=1&`);

    return string;
  }
}

export const queryStringService = new QueryStringService();
