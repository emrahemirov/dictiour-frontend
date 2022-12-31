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

  addUserMeaning(fromWord: GlobalWord, toWord: GlobalWord) {
    return axios.post(
      `${apiEndpoint}/user-meanings`,
      {
        fromWord: { text: fromWord.text, language: fromWord.language },
        toWord: { text: toWord.text, language: toWord.language }
      },
      { headers: { Authorization: getAuthToken() } }
    );
  }

  addUserExample(
    fromWord: GlobalWord,
    toWord: GlobalWord,
    example: GlobalWord
  ) {
    return axios.post(
      `${apiEndpoint}/user-examples`,
      {
        fromWord: { text: fromWord.text, language: fromWord.language },
        toWord: { text: toWord.text, language: toWord.language },
        example: { text: example.text, language: example.language }
      },
      { headers: { Authorization: getAuthToken() } }
    );
  }
}

export const userDictionary = new UserDictionary();
