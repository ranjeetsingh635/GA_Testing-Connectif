import useBusinessProfileQuery from "../../Hooks/useBusinessProfileQuery";
import { BUSINESS_PROFILE_DATA } from "../../Types/ResponseTypes";
import BusinessProfileDescription from "./BusinessProfileDescription/BusinessProfileDescription";
import BusinessProfileHeader from "./BusinessProfileHeader/BusinessProfileHeader";

function CompletedBusinessProfile() {
  const businessProfileQuery = useBusinessProfileQuery();
  const businessProfileData = businessProfileQuery?.data?.data?.data;

  return (
    <>
      <BusinessProfileHeader businessProfileData={businessProfileData} />
      <BusinessProfileDescription businessProfileData={businessProfileData} />
    </>
  );
}
export default CompletedBusinessProfile;
