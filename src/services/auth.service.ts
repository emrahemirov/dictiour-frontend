import { apiEndpoint } from '@utils/constants';
import axios from 'axios';

class AuthService {
  signUp({ username, password, passwordConfirm }) {
    return axios.post(`${apiEndpoint}/auth/sign-up`, {
      username,
      password,
      passwordConfirm
    });
  }
}

export const authService = new AuthService();
