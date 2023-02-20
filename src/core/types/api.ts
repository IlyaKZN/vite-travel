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
