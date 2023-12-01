import React from "react";
import { Rating } from "react-simple-star-rating";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

import styles from "./BusinessProfileHeader.module.css";
import useAuthValue from "src/Modules/AuthModule/Hooks/useAuthValue";
import { BUSINESS_PROFILE_DATA } from "../../../Types/ResponseTypes";

type BUSINESS_PROFILE_DATA_PROPS = {
  businessProfileData?: BUSINESS_PROFILE_DATA;
};

function BusinessProfileHeader(props: BUSINESS_PROFILE_DATA_PROPS) {
  const { businessProfileData } = props;
  const { user } = useAuthValue();
  const details = [
    {
      id: 1,
      icon: <FiPhone />,
      data: businessProfileData?.phoneNumber,
    },
    {
      id: 2,
      icon: <FiMail />,
      data: user?.email,
    },
    {
      id: 3,
      icon: <FiMapPin />,
      data: businessProfileData?.address?.country,
    },
  ];
  return (
    <header
      className={`${styles.businessProfileHeader} bg-light-primaryGreen-tints-50 `}
      role="banner"
    >
      <div className="container flex min-h-[27.7rem]">
        <article className="leftSection flex-grow flex items-center">
          <div
            className={`${styles.innerCont} flex items-center justify-start gap-[4rem]`}
          >
            <div className="w-[13.3rem] flex-shrink-0 text-center">
              <div className="h-[13.3rem] w-full relative rounded-full border border-solid border-light-primaryGrey-tints-900"></div>
              <button
                type="button"
                className="capitalize focus:underline  inline-block mt-[.8rem] text-lightGrey text-[1.4rem] font-normal"
              >
                Remove image
              </button>
            </div>
            <div className="flex-grow ">
              <h1 className="h1 text-[2.4rem] font-semibold">
                {user?.fullName}
              </h1>
              <div className={`mt-[1rem] ${styles.rating}`}>
                <Rating initialValue={5} />{" "}
                <span className="text-[1.4rem] text-light-primaryGrey-tints-900 leading-[2.4rem] ">
                  <strong className="font-semibold text-black">4.9</strong>{" "}
                  (1k+)
                </span>
              </div>
              <ul className="flex justify-start mt-[1.4rem] gap-[2rem]">
                {details.map((item) => (
                  <li
                    key={item.id}
                    className="flex para justify-start items-center gap-[6px]"
                  >
                    {item?.icon} {item?.data}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        <article className="rightSection flex-shrink-0 w-[30.6rem] flex justify-end items-center">
          <span
            className={`bg-[#C3FFD8] rounded-[2rem]  text-light-primarySuccess-tints-900 text-[1.4rem] font-semibold tracking-[-.16px] ${styles.isVerified}`}
          >
            Verified
          </span>
        </article>
      </div>
    </header>
  );
}

export default BusinessProfileHeader;
