export type SETUP_BUSINESS_REQUEST = {
  fullName?: string;
  phoneNumber?: string;
  companyName?: string;
  companyWebsite?: string;
  companyLogo: string;
  profilePic?: string;
  skills?: Array<String>;
  industryType?: string;
  address?: {
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    lat?: number;
    lng?: number;
  };
  aboutMe?: string;
};
export type UPLOAD_ATTACH_REQUEST = {
  file: string;
};
