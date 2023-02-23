import { TUser } from '@/types/entities';

export type TSignUpRequest = {
  username: string,
  email: string,
  password: string,
  birthDate: Date,
  phoneNumber: string,
};

export type TSignUpResponse = TUser;

export type TSignInRequest = {
  email: string,
  password: string,
};

export type TSignInResponse = {
  accessToken: string,
  user: TUser,
};

export type TGetMeResponse = TUser;

export type TUpdateUserRequest = Partial<{
  email: string;
  password: string;
  phoneNumber: string;
  avatar: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  friends: string;
  country: string;
  city: string;
  status: string;
}>;
