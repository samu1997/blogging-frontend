export interface Users {
  first_name: string;
  family_name: string;
  email: string;
  password: string;
  mobile: number;
  status: string;
  role: string;
  name?: string | null | undefined;
  bio: string;
  dob: string;
  place: string;
}

export interface loginUser {
  email: string;
  password: string;
}

export interface createUser {
  first_name: string;
  family_name: string;
  email: string;
  password: string;
  mobile: number;
}

export interface getProfileData {
  status: string;
  data: object;
}
