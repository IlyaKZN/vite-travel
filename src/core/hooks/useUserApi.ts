import API_URL from '../constants';
import {
 TGetMeResponse, TUpdateUserRequest, TGetUsersResponse, TSearchUsersRequest,
} from '../types/api';
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

  async function updateUser(request: TUpdateUserRequest) {
    return fetch(`${API_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${localStorage.accessToken as string}`,
      },
      body: JSON.stringify(request),
    }).then(checkResponse).then((res) => res as TGetMeResponse).catch(() => null);
  }

  async function getUsers() {
    return fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${localStorage.accessToken as string}`,
      },
    }).then(checkResponse).then((res) => res as TGetUsersResponse).catch(() => null);
  }

  async function searchUsers(request: TSearchUsersRequest) {
    return fetch(`${API_URL}/users/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${localStorage.accessToken as string}`,
      },
      body: JSON.stringify(request),
    }).then(checkResponse).then((res) => res as TGetUsersResponse).catch(() => null);
  }

  return {
    getMe,
    updateUser,
    getUsers,
    searchUsers,
  };
}
