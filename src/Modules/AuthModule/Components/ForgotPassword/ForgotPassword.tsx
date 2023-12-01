import { useState } from "react";
import useForgotPasswordMutation from "../../Hooks/useForgotPasswordMutation";
import styles from "./ForgotPassword";
import FormInput from "src/Components/FormInput/FormInput";
import { useForm } from "react-hook-form";
import { getEmailValidationRules } from "../../../../Utils/Validators";
import SnackbarHandler from "src/Utils/SnackbarHandler";

function ForgotPassword() {
  // const [emailData, setEmailData] = useState("");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });
  const forgotPasswordMutation = useForgotPasswordMutation();
  const handleForgotPassword = handleSubmit((value) => {
    forgotPasswordMutation.mutate(
      {
        email: value?.email,
      },
      {
        onSuccess: (res: any) => {
          const { status, message } = res?.data;
          if (status === 200 || 201) {
            SnackbarHandler.successToast(message);
          }
        },
      }
    );
  });

  return (
    <section className="max-w-[46rem] mx-auto">
      <h1 className={`h1 text-center`}>Forgot Password</h1>
      <p className="max-w-[38.4rem] para text-center mx-auto mt-[1.6rem] mb-[5rem]">
        Enter the email address you used when you joined and we’ll send you
        instructions to reset your password.
      </p>
      <form
        className={`flex justify-center flex-col`}
        onSubmit={handleForgotPassword}
      >
        <div className={``}>
          <label
            htmlFor="Email"
            color="text"
            className="text-[1.6rem] leading-normal text-light-primaryBlack mb-[1.2rem]"
          >
            Email
          </label>
          {/* <div className="block border border-solid border-light-primaryGrey-tints-100 min-h-[5.6rem] p-[1.6rem] w-full rounded-[10px]  text-light-primaryGrey-tints-800 text-[1.6rem] outline outline-2 mt-[1.6rem] outline-transparent focus:outline-offset-[2px] focus:outline-light-primaryPurple-tints-600 focus:bg-light-primaryPurple-tints-50 bg-transparent  InputText_inputStyle___n1Mz undefined undefined"> */}
          <FormInput
            name="email"
            type="text"
            control={control}
            textInputProps={{
              placeholder: "Enter your email",
            }}
            rules={getEmailValidationRules()}
          />
          {/* </div> */}
          {/* {true && <div className={"formErrorMessage"}>{`error message`}</div>} */}
        </div>
        <button
          type="button"
          className={`mt-[4.6rem] mb-[2.4rem] primaryBtn text-[1.6rem] p-[1.6rem] rounded-[10px]`}
          onClick={handleForgotPassword}
        >
          Send Reset Instructions
        </button>
      </form>
    </section>
  );
}
export default ForgotPassword;
