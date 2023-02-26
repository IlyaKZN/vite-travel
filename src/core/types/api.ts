import { TUser, TGroup } from '@/types/entities';

export type TSignUpRequest = {
  username: string,
  email: string,
  password: string,
  birthDate: Date,
  phoneNumber: string,
};

export type TSignUpResponse = {
  user: {
    birthDate: Date,
    email: string,
    phoneNumber: string,
    username: string,
    _id: string,
  },
  accessToken: string,
};

export type TSignInRequest = {
  username: string,
  password: string,
};

export type TSignInResponse = {
  accessToken: string,
  user: TUser,
};

export type TGetMeResponse = TUser;

export type TGetUsersResponse = TUser[];

export type TSearchUsersRequest = {
  searchValue: string;
};

export type TUpdateUserRequest = Partial<{
  email: string;
  password: string;
  phoneNumber: string;
  avatar: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  friends: string;
  country: string;
  city: string;
  status: string;
}>;

export type TCreateGroupRequest = {
  name: string;
  password: string;
  waypoints: string[];
  numberParticipants: number;
  minAge: number;
  maxAge: number;
};

export type TCreateGroupResponse = {
  _id: string,
  name: string,
  participants: string[],
  password: string,
  waypoints: string[],
};

export type TSearchGroupRequest = Partial<{
  name: string;
  waypoint: string;
  owner: string;
  participants: string[];
}>;

export type TSearchGroupResponse = TGroup[];

export type TGetGroupResponse = TGroup;

export type TJoinGroupRequest = {
  groupId: string;
};

export type TJoinGroupResponse = TGroup;
