import React, { useState } from "react";
import Image from "next/image";
import images from "../../../../Assets/images";
import FormBuilder from "../../../../Components/FormBuilder/FormBuilder";
import { useForm } from "react-hook-form";
import styles from "./CreateAccount.module.css";
import Link from "next/link";
import {
  getConfirmValidationRules,
  getEmailValidationRules,
  getPasswordValidationRules,
  getRequiredRules,
} from "../../../../Utils/Validators";
import SnackbarHandler from "../../../../Utils/SnackbarHandler";
import useCreateAccountMutation from "../../Hooks/useCreateAccountMutation";
import { useRouter } from "next/router";

function CreateAccount() {
  const router = useRouter();
  const [serviceTerms, setServiceTerms] = useState(false);
  const [userType, setUserType] = useState<number>(0);
  const { control, formState, setValue, trigger, watch, handleSubmit } =
    useForm({
      defaultValues: {
        fullName: "",
        email: "",
        password: "",
        verifyPassword: "",
      },
      mode: "onChange",
    });

  const radioArray = [
    {
      id: 1,
      label: "I'm looking for services",
      image: images.userIconGray,
      alt: "user icon",
    },
    {
      id: 2,
      label: "I'm looking for services",
      image: images.briefcaseIconGray,
      alt: "briefcase icon",
    },
  ];

  const handleRadioChange = (id: any) => {
    setUserType(id);
  };

  const createAccountMutation = useCreateAccountMutation();
  const handleCreateAccount = handleSubmit((values: any) => {
    if (userType === 0) {
      SnackbarHandler.errorToast("Please Select User Type");
    } else if (!serviceTerms) {
      SnackbarHandler.errorToast("Please accept the Terms & Condition");
    } else {
      createAccountMutation?.mutate(
        {
          fullName: values?.fullName,
          userType: userType,
          email: values?.email,
          password: values?.password,
        },
        {
          onSuccess: (res: any) => {
            const { status, message, data } = res;
            if (status === 201 || 200) {
              SnackbarHandler.successToast(message);
              localStorage.setItem("email", data?.data?.email);
              router.push("/email-verification");
              alert(data?.data?.otp);
            }
          },
        }
      );
    }
  });
  return (
    <main className="min-h-screen py-[4rem]">
      <article className={`max-w-[46.6rem] mx-auto createAccountSection`}>
        <h1 className="h1 mb-[1.6rem] text-center">Create an account</h1>
        <p className="text-light-primaryGrey-tints-900 text-center text-[1.4rem] font-normal">
          No Credit card needed.
        </p>
        <ul
          className="radio-group grid grid-cols-2 gap-[1rem] mt-[3.2rem]"
          role="radiogroup"
        >
          {radioArray.map((item) => (
            <li key={item.id}>
              <input
                className={`visuallyHidden`}
                type="radio"
                name={`radioArray`}
                id={`id${item.id}`}
                checked={userType === item.id}
                onChange={() => handleRadioChange(item.id)}
              />
              <label
                tabIndex={0}
                aria-checked="false"
                htmlFor={`id${item.id}`}
                className={`hover:bg-light-primaryPurple-tints-50 hover:text-light-primaryPurple-tints-700
                active:text-light-primaryPurple-tints-800
                outline-[2px] outline outline-transparent outline-offset-0 active:outline-offset-[2px] active:outline-light-primaryPurple-tints-800
                active:bg-light-primaryPurple-tints-50 focus:outline-light-primaryPurple-tints-800
                focus:bg-light-primaryPurple-tints-50 transition-all flex justify-start items-center gap-[1rem] text-light-primaryGrey-tints-900 text-[1.4rem] font-normal py-[12px] px-[15px] rounded-[1rem] border-[2px] border-solid border-transparent cursor-pointer ${
                  userType === item?.id &&
                  `!text-light-primaryPurple-tints-900 !border-light-primaryPurple-tints-900`
                } `}
              >
                <Image
                  className={`transition-all
                      ${userType === item?.id ? `primaryPurpleFilter` : ""}
                    `}
                  src={item.image}
                  alt={item.alt}
                />{" "}
                {item.label}
              </label>
            </li>
          ))}
        </ul>
        <form className="mt-[3rem]" onSubmit={handleCreateAccount}>
          {/* <form className="mt-[3rem]"> */}
          <FormBuilder
            control={control}
            formState={formState}
            trigger={trigger}
            setValue={setValue}
            formConfigArray={[
              [
                {
                  name: "fullName",
                  type: "text",
                  label: "Full Name",
                  textInputProps: {
                    placeholder: "Enter here",
                  },
                  rules: getRequiredRules("name"),
                },
              ],
              [
                {
                  name: "email",
                  type: "text",
                  label: "Email",
                  textInputProps: {
                    placeholder: "Enter here",
                  },
                  rules: getEmailValidationRules(),
                },
              ],
              [
                {
                  name: "password",
                  type: "password",
                  label: "Password",
                  textInputProps: {
                    placeholder: "Password",
                  },
                  rules: getPasswordValidationRules(),
                },
              ],
              [
                {
                  name: "verifyPassword",
                  type: "password",
                  label: "Verify Password",
                  textInputProps: {
                    placeholder: "Password",
                  },
                  rules: getConfirmValidationRules(watch("password")),
                },
              ],
            ]}
          />
          <div
            className={`${styles.CommonCheckbox} mt-[2rem] flex justify-start gap-[1.2rem] relative`}
          >
            <input
              className={`visuallyHidden transition-all`}
              type="checkbox"
              name={`commonCheckBox`}
              id={`terms`}
              onChange={(e) => setServiceTerms(e.target.checked)}
            />
            <label
              tabIndex={0}
              className={`transition-all w-[2.4rem] h-[2.4rem] flex rounded-[4px] border-2 border-solid border-light-primaryGrey-tints-50 hover:border-light-primaryGrey-tints-200 focus:border-light-primaryPurple-tints-400 outline-none ${styles.checkMark}`}
              htmlFor={`terms`}
            ></label>
            <span className="text-light-primaryGrey-tints-900 text-[1.4rem] leading-[2.4rem] tracking-[-.16px] transition-all">
              I agree to the {""}
              <Link href={`/`} passHref>
                <a className="font-bold underline ml-[2px] focus:text-light-primaryPurple-tints-700">
                  Terms & Conditions
                </a>
              </Link>
              {/* </Link> */}
            </span>
          </div>
          <button
            // onClick={() => router.push("/email-verification")}
            className={`mt-[3.2rem] primaryBtn text-[1.6rem] p-[1.6rem] rounded-[10px]`}
            type="submit"
          >
            Create Account
          </button>
          <p className="mt-[3.2rem] text-light-primaryGrey-tints-900 text-center text-[1.4rem] leading-[2.4rem] tracking-[-.16px] transition-all">
            Already have an Account?{" "}
            <button
              type="button"
              className="focus:underline font-bold hover:underline"
              onClick={() => router.push("/login")}
            >
              {" "}
              Login
            </button>
          </p>
        </form>
      </article>
    </main>
  );
}
export default CreateAccount;
