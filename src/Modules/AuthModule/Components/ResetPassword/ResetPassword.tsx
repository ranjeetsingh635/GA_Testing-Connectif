import FormBuilder from "../../../../Components/FormBuilder/FormBuilder";
import { useForm } from "react-hook-form";
import styles from "./ResetPassword.module.css";
import useResetPasswordMuatation from "../../Hooks/useResetPasswordMutation";
import useResetPasswordMutation from "../../Hooks/useResetPasswordMutation";
import SnackbarHandler from "src/Utils/SnackbarHandler";
import { useRouter } from "next/router";
import {
  getPasswordValidationRules,
  getConfirmValidationRules,
} from "src/Utils/Validators";
type RESET_PSWD_TOKEN = {
  resetToken: string;
};
function ResetPassword(props: RESET_PSWD_TOKEN) {
  const { resetToken } = props;
  const { control, formState, setValue, trigger, handleSubmit, watch } =
    useForm({
      defaultValues: {
        password: "",
        verifyPassword: "",
      },
      mode: "onChange",
    });
  const router = useRouter();
  const resetPasswordMutation = useResetPasswordMutation();
  const handleResetPassword = handleSubmit((value) => {
    resetPasswordMutation.mutate(
      {
        password: value?.password,
        token: resetToken,
      },
      {
        onSuccess: (res: any) => {
          const { status, message } = res?.data;
          if (status === 200 || 201) {
            SnackbarHandler.successToast(message);
            router.push("/login");
          }
        },
      }
    );
  });
  const minSixChracter = new RegExp("(?=.{1,})");
  const upperCaseAlpha = new RegExp("(?=.*?[A-Z])");
  const lowerCaseAlpha = new RegExp("(?=.*[a-z])");
  const numberValidate = new RegExp("(?=.*?[0-9])");
  const specialCharacter = new RegExp("(?=.*[^A-Za-z0-9])");

  return (
    <section className="max-w-[45.6rem] mx-auto">
      <h2 className="h1 text-center">Reset Your Password</h2>
      <form
        className={`mt-[8rem] ${styles.form}`}
        onSubmit={handleResetPassword}
      >
        <FormBuilder
          control={control}
          formState={formState}
          trigger={trigger}
          setValue={setValue}
          formConfigArray={[
            {
              name: "password",
              type: "password",
              label: "New Password",
              textInputProps: {
                placeholder: "Enter New Password",
              },
              rules: getPasswordValidationRules(),
            },
            {
              name: "",
              type: "custom",
              label: "",
              JSX: () => (
                <div className="mt-[1rem]">
                  <ul
                    className={`flex gap-[1rem] mb-[1rem] justify-center items-center`}
                  >
                    {minSixChracter.test(watch("password")) ? (
                      <li
                        className={`flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200 ${
                          true && `bg-[#D42E30]`
                        }`}
                      ></li>
                    ) : (
                      <li
                        className={`flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200`}
                      ></li>
                    )}
                    {minSixChracter.test(watch("password")) &&
                    upperCaseAlpha.test(watch("password")) &&
                    lowerCaseAlpha.test(watch("password")) ? (
                      <li
                        className={`flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200 ${
                          true && `bg-[#F9A61B]`
                        }`}
                      ></li>
                    ) : (
                      <li
                        className={`flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200`}
                      ></li>
                    )}
                    {minSixChracter.test(watch("password")) &&
                    upperCaseAlpha.test(watch("password")) &&
                    lowerCaseAlpha.test(watch("password")) &&
                    specialCharacter.test(watch("password")) ? (
                      <li
                        className={`flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200 ${
                          true && `bg-[#10AD76]`
                        }`}
                      ></li>
                    ) : (
                      <li
                        className={`flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200`}
                      ></li>
                    )}
                    {minSixChracter.test(watch("password")) &&
                    upperCaseAlpha.test(watch("password")) &&
                    lowerCaseAlpha.test(watch("password")) &&
                    specialCharacter.test(watch("password")) &&
                    numberValidate.test(watch("password")) ? (
                      <li
                        className={`flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200 ${
                          true && `bg-[#008559]`
                        }`}
                      ></li>
                    ) : (
                      <li
                        className={`flex-1 rounded-[6px] h-[.5rem] bg-light-primaryGrey-tints-200`}
                      ></li>
                    )}
                  </ul>
                  {/* <span className="text-[1rem] opacity-[.6] font-light italic ">
                    {" "}
                    Minimum 6 Characters
                  </span> */}
                </div>
              ),
            },
            {
              name: "verifyPassword",
              type: "password",
              label: "Confirm Password",
              textInputProps: {
                placeholder: "Password",
              },
              rules: getConfirmValidationRules(watch("password")),
            },
          ]}
        />
        <button
          type="submit"
          className=" mt-[3.2rem] primaryBtn text-[1.6rem] p-[1.6rem] rounded-[10px]"
          disabled={resetPasswordMutation?.isLoading}
        >
          Set Password
        </button>
      </form>
    </section>
  );
}
export default ResetPassword;
