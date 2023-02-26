export type TUser = {
  _id: string;
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
  _id: string;
  chat: TChat;
  name: string;
  password: string;
  waypoints: string[];
  owner: string;
  participants: string[];
  numberParticipants: number;
  minAge: number;
  maxAge: number;
};

export type TChat = {
  _id: string;
  createdAt: string;
  members: string[];
  messages: TMessage[];
  updatedAt: string;
};

export type TMessage = {
  _id: string;
  createdAt: string;
  owner: TUser;
  text: string;
  updatedAt: string;
};
