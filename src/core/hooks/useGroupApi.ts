import API_URL from '../constants';
import {
 TCreateGroupRequest,
 TCreateGroupResponse,
 TSearchGroupRequest,
 TSearchGroupResponse,
 TGetGroupResponse,
 TJoinGroupRequest,
 TJoinGroupResponse,
} from '../types/api';
import checkResponse from '../utils';

export default function useGroupApi() {
  async function getGroup(groupId: string): Promise<TGetGroupResponse | null> {
    return fetch(`${API_URL}/groups/${groupId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then(checkResponse).then((res) => res as TGetGroupResponse).catch(() => null);
  }

  async function createGroup(request: TCreateGroupRequest) {
    return fetch(`${API_URL}/groups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${localStorage.accessToken as string}`,
      },
      body: JSON.stringify(request),
    }).then(checkResponse).then((res) => res as TCreateGroupResponse).catch(() => null);
  }

  async function searchGroup(request: TSearchGroupRequest) {
    return fetch(`${API_URL}/groups/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${localStorage.accessToken as string}`,
      },
      body: JSON.stringify(request),
    }).then(checkResponse).then((res) => res as TSearchGroupResponse).catch(() => null);
  }

  async function joinGroup(request: TJoinGroupRequest) {
    return fetch(`${API_URL}/groups/participants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: `Bearer ${localStorage.accessToken as string}`,
      },
      body: JSON.stringify(request),
    }).then(checkResponse).then((res) => res as TJoinGroupResponse).catch(() => null);
  }

  return {
    createGroup,
    searchGroup,
    getGroup,
    joinGroup,
  };
}
