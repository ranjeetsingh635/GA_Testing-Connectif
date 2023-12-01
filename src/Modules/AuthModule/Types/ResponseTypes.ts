export type CREATE_ACCOUNT_DATA = {
  fullName: string;
  userType: number;
  isEmailVerified: boolean;
  email: string;
  password: string;
  status: boolean;
  isDeleted: boolean;
  otp: string;
  otpExpiryTime: number;
  createdAt: string;
  _id: string;
  __v: number;
};
export type CREATE_ACCOUNT_RESPONSE = {
  response: {
    status: number;
    statusText: string;
    message: string;
    data: CREATE_ACCOUNT_DATA;
  };
};
export type EMAIL_VERIFICATION_USER_DATA = {
  _id: string;
  fullName: string;
  userType: number;
  isEmailVerified: boolean;
  email: string;
  password: string;
  status: boolean;
  isDeleted: boolean;
  otp: null;
  otpExpiryTime: null;
  createdAt: string;
  __v: number;
};
export type EMAIL_VERIFICATION_RESPONSE = {
  status: number;
  statusText: string;
  message: string;
  data: {
    user: EMAIL_VERIFICATION_USER_DATA;
    token: string;
  };
};
export type LOGIN_USER_DATA = {
  _id: string;
  fullName: string;
  userType: number;
  isEmailVerified: boolean;
  email: string;
  password: string;
  status: boolean;
  isDeleted: boolean;
  otp: null;
  otpExpiryTime: null;
  createdAt: string;
  __v: number;
};
export type LOGIN_RESPONSE = {
  response: {
    status: number;
    statusText: string;
    message: string;
    data: {
      user: LOGIN_USER_DATA;
      token: string;
    };
  };
};
export type FORGOT_PASSWORD_RESPONSE = {
  status: number;
  statusText: string;
  message: string;
  data: any;
};
export type RESET_PASSWORD_RESPONSE = {
  status: number;
  statusText: string;
  message: string;
  data: any;
};
export type RESEND_OTP_RESPONSE = {
  status: number;
  statusText: string;
  message: string;
  data: any;
};
