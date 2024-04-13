export interface Users {
  first_name: string;
  family_name: string;
  email: string;
  password: string;
  mobile: number;
  status: string;
  role: string;
  name?: string | null | undefined;
}

export interface loginUser {
  email: string;
  password: string;
}
