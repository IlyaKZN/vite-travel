import API_URL from '../constants';
import {
 TSignUpRequest, TSignUpResponse, TSignInRequest, TSignInResponse,
} from '../types/api';
import checkResponse from '../utils';

export default function useAuthApi() {
  async function signUp(req: TSignUpRequest): Promise<TSignUpResponse | null> {
    return fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(req),
    }).then(checkResponse).then((res) => res as TSignUpResponse).catch(() => null);
  }

  async function signIn(req: TSignInRequest): Promise<TSignInResponse | null> {
    return fetch(`${API_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(req),
    }).then(checkResponse).then((res) => res as TSignInResponse).catch(() => null);
  }

  return {
    signUp,
    signIn,
  };
}
