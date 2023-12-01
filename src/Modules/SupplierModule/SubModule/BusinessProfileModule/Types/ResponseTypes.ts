export type SETUP_BUSINESS_DATA = {
  _id: string;
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
  __v: number;
  companyName: string;
  companyWebsite: string;
};
export type SETUP_BUSINESS_RESPONSE = {
  status: number;
  statusText: string;
  message: string;
  data: SETUP_BUSINESS_DATA;
};
