import API_URL from '../constants';
import {
 TCreateGroupRequest, TCreateGroupResponse, TSearchGroupRequest, TSearchGroupResponse,
} from '../types/api';
import checkResponse from '../utils';

export default function useGroupApi() {
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

  return {
    createGroup,
    searchGroup,
  };
}
