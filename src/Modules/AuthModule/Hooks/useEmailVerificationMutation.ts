import { useMutation } from "react-query";
import { fetcher } from "../../../Utils/Helpers";
import { AxiosResponse } from "axios";
import { EMAIL_VERIFICATION_REQUEST } from "../Types/RequestTypes";
import { EMAIL_VERIFICATION_RESPONSE } from "../Types/ResponseTypes";

const emailVerify = async (
  data: EMAIL_VERIFICATION_REQUEST
): Promise<AxiosResponse<EMAIL_VERIFICATION_RESPONSE>> => {
  return fetcher({
    url: `web/auth/verifyOtp`,
    method: "POST",
    data,
  });
};

function useEmailVerificationMutation() {
  return useMutation(emailVerify, {
    onSuccess: (responseData) => {
      console.log("Email Verification data///////", responseData);
    },
  });
}

export default useEmailVerificationMutation;
