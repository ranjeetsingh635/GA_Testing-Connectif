import { useMutation } from "react-query";
import { fetcher } from "../../../Utils/Helpers";
import { AxiosResponse } from "axios";
import { CREATE_ACCOUNT_REQUEST } from "../Types/RequestTypes";

const createAccount = async (
  data: CREATE_ACCOUNT_REQUEST
): Promise<AxiosResponse<any>> => {
  return fetcher({
    url: `web/auth/signUp`,
    method: "POST",
    data,
  });
};

function useCreateAccountMutation() {
  return useMutation(createAccount);
}

export default useCreateAccountMutation;
