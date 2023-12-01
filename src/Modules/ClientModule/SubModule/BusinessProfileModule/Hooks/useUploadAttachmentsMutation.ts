import { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { fetcher, jsonToFormData } from "src/Utils/Helpers";
import { SETUP_BUSINESS_RESPONSE } from "../Types/ResponseTypes";
import {
  SETUP_BUSINESS_REQUEST,
  UPLOAD_ATTACH_REQUEST,
} from "../Types/RequestTypes";

const uploadAttachments = async (
  data: UPLOAD_ATTACH_REQUEST
): Promise<AxiosResponse<any>> => {
  return fetcher({
    url: `/web/user/upload`,
    method: "POST",
    data: jsonToFormData(data),
  });
};
function useUploadAttachmentsMutation() {
  return useMutation(uploadAttachments, {
    onSuccess: (res) => {
      console.log("Attaaaaaaaaaaaaatchhhhhhhhhh", res);
    },
  });
}
export default useUploadAttachmentsMutation;
