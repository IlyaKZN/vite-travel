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
  name: string;
  password: string;
  waypoints: string[];
  owner: string;
  participants: string[];
};
