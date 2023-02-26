import API_URL from '../constants';
import {
 TGetMeResponse, TUpdateUserRequest, TGetUsersResponse, TSearchUsersRequest, TGetUserResponse,
} from '../types/api';
import checkResponse from '../utils';

export default function useUserApi() {
  async function getUser(groupId: string): Promise<TGetUserResponse | null> {
    return fetch(`${API_URL}/users/${groupId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then(checkResponse).then((res) => res as TGetUserResponse).catch(() => null);
  }

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
    getUser,
    getMe,
    updateUser,
    getUsers,
    searchUsers,
  };
}
