import React from "react";
import FormBuilder from "../../../../Components/FormBuilder/FormBuilder";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  getEmailValidationRules,
  getPasswordValidationRules,
} from "src/Utils/Validators";
import useLoginMutation from "../../Hooks/useLoginMutation";

function Login() {
  const { control, formState, setValue, trigger, watch, handleSubmit } =
    useForm({
      defaultValues: {
        email: "",
        password: "",
      },
      mode: "onChange",
    });
  const router = useRouter();
  const loginMutation = useLoginMutation();
  const handleLoginForm = handleSubmit((value) => {
    loginMutation.mutate(
      {
        email: value?.email,
        password: value?.password,
      },
      {
        onSuccess: (res) => {
          console.log("login response/////////", res);
        },
      }
    );
  });
  return (
    <section className="max-w-[45.6rem] mx-auto">
      <h1 className="h1 text-center">Login</h1>
      <p className="max-w-[38.4rem] para text-center mx-auto mt-[1.6rem] mb-[5rem]">
        Welcome back! Please enter your details.
      </p>
      <form onSubmit={handleLoginForm}>
        <FormBuilder
          control={control}
          formState={formState}
          trigger={trigger}
          setValue={setValue}
          formConfigArray={[
            {
              name: "email",
              type: "email",
              label: "Email",
              textInputProps: {
                placeholder: "Enter your email",
              },
              rules: getEmailValidationRules(),
            },

            {
              name: "password",
              type: "password",
              label: "Password",
              textInputProps: {
                placeholder: "Password",
              },
              rules: getPasswordValidationRules(),
            },
          ]}
        />
        <button
          className={`mt-[3.2rem] primaryBtn text-[1.6rem] p-[1.6rem] rounded-[10px]`}
          type="submit"
          disabled={loginMutation?.isLoading}
        >
          Login
        </button>
      </form>
      <div className="flex mt-[3.2rem] justify-between items-center">
        <button
          type="button"
          className="para hover:underline focus:underline focus:text-light-primaryPurple-tints-900"
          onClick={() => router.push("/forgot-password")}
        >
          Forgot Password?
        </button>
        <p className="para">
          Don&apos;t have an Account?{" "}
          <button
            className="font-bold hover:underline focus:underline focus:text-light-primaryPurple-tints-900"
            onClick={() => router.push("/create-account")}
          >
            Register
          </button>
        </p>
      </div>
    </section>
  );
}
export default Login;
