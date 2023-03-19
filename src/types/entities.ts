export type TUser = {
  id: number;
  email: string;
  phoneNumber: string;
  username: string;
  birthDate: Date;
  avatar?: string;
  firstName?: string;
  lastName?: string;
  friends?: string;
  country?: string;
  city?: string;
  status?: string;
};

export type TGroup = {
  id: number;
  chat: TChat;
  name: string;
  password: string;
  waypoints: string[];
  owner: string;
  participants: number[];
  numberParticipants: number;
  minAge: number;
  maxAge: number;
};

export type TChat = {
  id: number;
  createdAt: string;
  members: number[];
  messages: TMessage[];
  updatedAt: string;
};

export type TMessage = {
  id: number;
  createdAt: string;
  owner: TUser;
  text: string;
  updatedAt: string;
};
