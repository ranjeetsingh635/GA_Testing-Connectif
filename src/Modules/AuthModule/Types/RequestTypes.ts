export type CREATE_ACCOUNT_REQUEST = {
  fullName: string;
  userType: number;
  email: string;
  password: string;
};
export type EMAIL_VERIFICATION_REQUEST = {
  email: string;
  otp: string;
};
export type LOGIN_REQUEST = {
  email: string;
  password: string;
};
export type FORGOT_PASSWORD_REQUEST = {
  email: string;
};
export type RESET_PASSWORD_REQUEST = {
  password: string;
  token: string;
};
export type RESEND_OTP_REQUEST = {
  email: string;
};
