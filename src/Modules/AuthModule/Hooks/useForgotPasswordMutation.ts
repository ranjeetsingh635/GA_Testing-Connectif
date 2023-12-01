import { fetcher } from "./../../../Utils/Helpers";
import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { FORGOT_PASSWORD_REQUEST } from "../Types/RequestTypes";
import { FORGOT_PASSWORD_RESPONSE } from "../Types/ResponseTypes";

const forgotPassword = async (
  data: FORGOT_PASSWORD_REQUEST
): Promise<AxiosResponse<FORGOT_PASSWORD_RESPONSE>> => {
  return fetcher({
    url: `/web/auth/forgotPassword`,
    method: "POST",
    data,
  });
};
function useForgotPasswordMutation() {
  return useMutation(forgotPassword, {
    onSuccess: (responseData: any) => {
      console.log("forgot password data", responseData);
    },
  });
}
export default useForgotPasswordMutation;
