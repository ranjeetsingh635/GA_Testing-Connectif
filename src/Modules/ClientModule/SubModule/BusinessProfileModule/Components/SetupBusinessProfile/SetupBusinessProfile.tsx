import FormBuilder from "../../../../../../Components/FormBuilder/FormBuilder";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./SetupBusinessProfile.module.css";
import { useRouter } from "next/router";
import { FileUploader } from "react-drag-drop-files";
import Image from "next/image";
import {
  getRequiredRules,
  getPhoneNumberValidationRules,
  isValidUrl,
} from "src/Utils/Validators";
import useSetupBusinessProfileMutation from "../../Hooks/useSetupBusinessProfileMutation";
import SnackbarHandler from "src/Utils/SnackbarHandler";
import useUploadAttachmentsMutation from "../../Hooks/useUploadAttachmentsMutation";
const fileTypes = ["JPG", "JPEG", "PNG"];
function SetupBusinessProfile() {
  const router = useRouter();

  const { control, formState, setValue, trigger, watch, handleSubmit } =
    useForm({
      defaultValues: {
        companyName: "",
        companyWebsite: "",
        phoneNumber: "",
        countryCode: "",
        country: "",
        zipCode: "",
        state: "",
        city: "",
        address: "",
      },
    });
  const [logoImage, setLogoImage] = useState<any>(undefined);

  const fileOpen = async (_file: any) => {
    setLogoImage(_file);
  };
  const handleImageRemove = () => {
    setLogoImage(undefined);
  };
  // const uploadAttachmentsMutation = useUploadAttachmentsMutation();
  // console.log("llllllllllll", uploadAttachmentsMutation);
  // const handleUploadAttachments = uploadAttachmentsMutation?.mutate(
  //   {
  //     file: logoImage,
  //   },
  //   {
  //     onSuccess: (res) => {
  //       console.log("ataaaaaaaaaaaaaaa", res);
  //     },
  //   }
  // );
  const setupBusinessProfileMutation = useSetupBusinessProfileMutation();
  const handleSetupBusinessProfile = handleSubmit((value) => {
    setupBusinessProfileMutation.mutate(
      {
        phoneNumber: value?.phoneNumber,
        companyName: value?.companyName,
        companyWebsite: value?.companyWebsite,
        companyLogo: logoImage,
        address: {
          address: value?.address,
          city: value?.city,
          state: value?.state,
          country: value?.country,
          zipCode: value?.zipCode,
        },
      },
      {
        onSuccess: (res: any) => {
          const { status, message, data } = res?.data;
          if (status === 200 || 201) {
            router.push("/completed-business");
          }
          console.log("ressssssssssssssssss", res?.data?.status);
        },
      }
    );
  });
  return (
    <>
      <div className="containerFluid">
        <div className={`mt-[23px]`}>
          <h1 className={`font-[700] text-[3.0rem] lg:text-center`}>
            Let’s Set Up Your Account
          </h1>
          <div className={`flex gap-[61px] lg:flex-wrap w-full mt-[40px]`}>
            {/* profile-box */}
            <div className="basis-[131px] lg:basis-[100%] lg:justify-center lg:flex lg:flex-col lg:mx-auto">
              {logoImage === undefined ? (
                <FileUploader
                  multiple={false}
                  handleChange={fileOpen}
                  onDrop={fileOpen}
                  name="file"
                  types={fileTypes}
                >
                  <label
                    htmlFor="imageUploader"
                    className={` ${styles.profileBox} block shrink-0 lg:mx-auto w-[131px] h-[131px] rounded-[30px] `}
                  >
                    {/* placeholder-img */}
                    <div
                      className={`${styles.placeholderImg} h-[100%] gap-3 cursor-pointer`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M10.5784 5L8.57843 7H4.75V19H20.75V7H16.9216L14.9216 5H10.5784ZM9.75 3H15.75L17.75 5H21.75C22.3023 5 22.75 5.44772 22.75 6V20C22.75 20.5523 22.3023 21 21.75 21H3.75C3.19772 21 2.75 20.5523 2.75 20V6C2.75 5.44772 3.19772 5 3.75 5H7.75L9.75 3ZM12.75 18C9.71243 18 7.25 15.5376 7.25 12.5C7.25 9.46243 9.71243 7 12.75 7C15.7876 7 18.25 9.46243 18.25 12.5C18.25 15.5376 15.7876 18 12.75 18ZM12.75 16C14.683 16 16.25 14.433 16.25 12.5C16.25 10.567 14.683 9 12.75 9C10.817 9 9.25 10.567 9.25 12.5C9.25 14.433 10.817 16 12.75 16Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-white text-center font-[600] text-[14px]">
                        Upload Image
                      </span>

                      {/* placeholder-img */}
                    </div>
                  </label>
                </FileUploader>
              ) : (
                <>
                  <Image
                    src={URL?.createObjectURL(logoImage)}
                    alt="company-logo"
                    width={100}
                    height={100}
                  />
                  <button onClick={() => handleImageRemove()}>
                    <span
                      role="button"
                      className="text-lightGrey block mt-5 font-[400] text-[14px] text-center"
                    >
                      remove image
                    </span>
                  </button>
                </>
              )}
            </div>
            <div className={`grow `}>
              <form
                className={`${styles.setupBusinessProfileForm} setupBusinessProfileForm`}
                onSubmit={handleSetupBusinessProfile}
              >
                <FormBuilder
                  control={control}
                  formState={formState}
                  setValue={setValue}
                  trigger={trigger}
                  formConfigArray={[
                    [
                      {
                        name: "companyName",
                        type: "text",
                        label: "Company Name*",
                        textInputProps: {
                          placeholder: "Enter here",
                        },
                        rules: getRequiredRules("Company Name"),
                      },
                      {
                        name: "companyWebsite",
                        type: "text",
                        label: "Company Website*",
                        textInputProps: {
                          placeholder: "Enter here",
                        },
                        rules: isValidUrl(),
                      },
                    ],

                    [
                      {
                        name: "phoneNumber",
                        type: "phone",
                        label: "Phone number*",
                        rules: getPhoneNumberValidationRules(
                          watch("countryCode")
                        ),
                        callingCodeName: "countryCode",
                        value: `${watch("countryCode")}${watch("phoneNumber")}`,
                      },
                      {
                        name: "zipCode",
                        type: "text",
                        label: "Zip Code*",
                        textInputProps: {
                          placeholder: "Enter here",
                        },
                        rules: getRequiredRules("Zip Code"),
                      },
                    ],

                    [
                      {
                        name: "country",
                        type: "text",
                        label: "Country*",
                        textInputProps: {
                          placeholder: "Enter here",
                        },
                        rules: getRequiredRules("Country"),
                      },
                      {
                        name: "state",
                        type: "text",
                        label: "State*",
                        textInputProps: {
                          placeholder: "Enter here",
                        },
                        rules: getRequiredRules("State"),
                      },
                    ],

                    [
                      {
                        name: "city",
                        type: "text",
                        label: "City*",
                        textInputProps: {
                          placeholder: "Enter here",
                        },
                        rules: getRequiredRules("City"),
                      },
                      {
                        name: "address",
                        type: "text",
                        label: "Address*",
                        textInputProps: {
                          placeholder: "Enter here",
                        },
                        rules: getRequiredRules("Address"),
                      },
                    ],
                  ]}
                />
                <div className="flex justify-end  xsm:justify-center">
                  <div className={`my-[35px] flex gap-[11px] xsm:flex-col`}>
                    <button
                      type="button"
                      // onClick={() =>
                      //   router.push("/business-profile/skip-profile")
                      // }
                      className={`px-[20px] py-[16px] text-[#404145] text-[1.6rem] border-solid border-[1px] border-[#404145] rounded-[10px]`}
                    >
                      Skip for now
                    </button>
                    <button
                      type="submit"
                      className={`px-[20px] py-[16px] bg-light-primaryPurple-tints-900 rounded-[10px] text-white text-[1.6rem] border-solid border-[1px] border-transparent`}
                    >
                      Save & Continue
                    </button>
                  </div>
                </div>
              </form>
              {/* <button onClick={() => handleUploadAttachments}>Upload</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SetupBusinessProfile;
