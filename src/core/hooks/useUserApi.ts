import API_URL from '../constants';
import { TGetMeResponse } from '../types/api';
import checkResponse from '../utils';

export default function useUserApi() {
  async function getMe(): Promise<TGetMeResponse | null> {
    return fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${localStorage.accessToken as string}`,
      },
    }).then(checkResponse).then((res) => res as TGetMeResponse).catch(() => null);
  }

  return {
    getMe,
  };
}
