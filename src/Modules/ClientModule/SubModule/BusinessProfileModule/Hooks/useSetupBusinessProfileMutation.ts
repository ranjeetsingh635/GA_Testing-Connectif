import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { fetcher } from "src/Utils/Helpers";
import { SETUP_BUSINESS_RESPONSE } from "../Types/ResponseTypes";
import { SETUP_BUSINESS_REQUEST } from "../Types/RequestTypes";

const setupBusiness = async (
  data: SETUP_BUSINESS_REQUEST
): Promise<AxiosResponse<SETUP_BUSINESS_RESPONSE>> => {
  return fetcher({
    url: `/web/user/updateProfile`,
    method: "POST",
    data,
  });
};
function useSetupBusinessProfileMutation() {
  return useMutation(setupBusiness, {
    onSuccess: (res) => {
      console.log("settttttt up businessss", res);
    },
  });
}
export default useSetupBusinessProfileMutation;
