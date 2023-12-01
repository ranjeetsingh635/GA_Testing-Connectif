import { toast } from "react-toastify";

class SnackbarHandler {
  errorToast = (text: string) => {
    toast(text, { position: "top-right", type: "error" });
  };

  successToast = (text: string) => {
    toast(text, { position: "top-right", type: "success" });
  };

  normalToast = (text: string) => {
    toast(text, { position: "top-right", type: "default" });
  };
}

export default new SnackbarHandler();
