import { fetcher } from "../../../Utils/Helpers";
import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { RESET_PASSWORD_REQUEST } from "../Types/RequestTypes";
import { RESET_PASSWORD_RESPONSE } from "../Types/ResponseTypes";
const resetPassword = async (
  data: RESET_PASSWORD_REQUEST
): Promise<AxiosResponse<RESET_PASSWORD_RESPONSE>> => {
  return fetcher({
    url: `/web/auth/resetPassword`,
    method: "POST",
    data,
  });
};
function useResetPasswordMutation() {
  return useMutation(resetPassword, {
    onSuccess: (responseData: any) => {
      console.log("reset pswdddddddddd", responseData);
    },
  });
}
export default useResetPasswordMutation;
