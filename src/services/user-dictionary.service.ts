import { GlobalWord } from '@models';
import { apiEndpoint } from '@utils/constants';
import { getAuthToken } from '@utils/helpers';
import axios from 'axios';

class UserDictionary {
  addUserWord(word: GlobalWord) {
    return axios.post(
      `${apiEndpoint}/user-words`,
      {
        word: { text: word.text, language: word.language }
      },
      { headers: { Authorization: getAuthToken() } }
    );
  }

  addUserMeaning(fromWordId: string, toWord: GlobalWord) {
    return axios.post(
      `${apiEndpoint}/user-meanings`,
      {
        toWord: { text: toWord.text, language: toWord.language },
        fromWordId
      },
      { headers: { Authorization: getAuthToken() } }
    );
  }

  addUserExample(meaningWordId: string, example: GlobalWord) {
    return axios.post(
      `${apiEndpoint}/user-examples`,
      {
        example: { text: example.text, language: example.language },
        meaningWordId
      },
      { headers: { Authorization: getAuthToken() } }
    );
  }
}

export const userDictionary = new UserDictionary();
