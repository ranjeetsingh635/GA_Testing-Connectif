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
export type BUSINESS_PROFILE_DATA = {
  _id: string;
  fullName: string;
  userType: number;
  isEmailVerified: boolean;
  email: string;
  password: string;
  specialty: Array<String>;
  skills: Array<String>;
  status: boolean;
  isDeleted: boolean;
  otp: null;
  otpExpiryTime: null;
  createdByAdmin: boolean;
  isApproved: boolean;
  createdAt: string;
  __v: number;
  address: {
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  companyName: string;
  companyWebsite: string;
  phoneNumber: string;
};
export type BUSINESS_PROFILE_RESPONSE = {
  status: number;
  statusText: string;
  message: string;
  data: BUSINESS_PROFILE_DATA;
};
