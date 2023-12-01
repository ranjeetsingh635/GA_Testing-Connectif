import { useMutation } from "react-query";
import { fetcher } from "../../../Utils/Helpers";
import { AxiosResponse } from "axios";
import { RESEND_OTP_REQUEST } from "../Types/RequestTypes";
import { RESEND_OTP_RESPONSE } from "../Types/ResponseTypes";

const resendOtp = async (
  data: RESEND_OTP_REQUEST
): Promise<AxiosResponse<RESEND_OTP_RESPONSE>> => {
  return fetcher({
    url: `web/auth/resendOTP`,
    method: "POST",
    data,
  });
};

function useResendOtpMutation() {
  return useMutation(resendOtp, {
    onSuccess: (responseData) => {
      console.log("Resend Otppppppppppppp///////", responseData);
    },
  });
}

export default useResendOtpMutation;
