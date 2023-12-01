export type AUTH_STATE = {
  user?: any;
  loggedIn: boolean;
  token: string;
  accountType: string;
  latitude: number | undefined;
  longitude: number | undefined;
  location: string | undefined;
  language: string | "en" | "ar";
};
export type REMEMBER_ME = {
  email: string;
  password: string;
  checkRemember: boolean;
};
