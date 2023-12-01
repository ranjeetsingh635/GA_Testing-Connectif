import { fetcher } from "./../../../Utils/Helpers";
import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { LOGIN_REQUEST } from "../Types/RequestTypes";
import { LOGIN_RESPONSE } from "../Types/ResponseTypes";
const login = async (
  data: LOGIN_REQUEST
): Promise<AxiosResponse<LOGIN_RESPONSE>> => {
  return fetcher({
    url: `/web/auth/login`,
    method: "POST",
    data,
  });
};
function useLoginMutation() {
  return useMutation(login, {
    onSuccess: (responseData: any) => {
      console.log("login response dataaaaa", responseData);
    },
  });
}
export default useLoginMutation;
