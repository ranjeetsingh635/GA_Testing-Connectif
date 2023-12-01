import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { fetcher } from "src/Utils/Helpers";
import { BUSINESS_PROFILE_RESPONSE } from "../Types/ResponseTypes";

export const GET_BUSINESS_PROFILE_KEY = `/web/user/profile`;
const getBusinessProfile = async (): Promise<
  AxiosResponse<BUSINESS_PROFILE_RESPONSE>
> => {
  return fetcher({
    url: `/web/user/profile`,
    method: "GET",
  });
};
function useBusinessProfileQuery() {
  return useQuery(GET_BUSINESS_PROFILE_KEY, getBusinessProfile, {
    onSuccess: (responseData) => {
      console.log(responseData);
    },
  });
}
export default useBusinessProfileQuery;
