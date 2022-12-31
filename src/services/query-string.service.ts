import { Languages } from '@utils/enums';

class QueryStringService {
  getString({
    search,
    language,
    page,
    userWordId,
    userMeaningId
  }: {
    search?: string;
    language?: Languages;
    page?: string;
    userWordId?: string;
    userMeaningId?: string;
  }) {
    let string = '?';

    if (search) string += `search=${search}&`;
    if (language) string += `language=${language}&`;
    if (page) string += `page=${page}&`;
    if (userWordId) string += `userWordId=${userWordId}&`;
    if (userMeaningId) string += `userMeaningId=${userMeaningId}&`;

    return string;
  }
}

export const queryStringService = new QueryStringService();
