import React from "react";
import { Rating } from "react-simple-star-rating";
import { FiPhone, FiMail } from "react-icons/fi";

import styles from "./SkipProfileHeader.module.css";

function SkipProfileHeader() {
  return (
    <header
      className={`${styles.SkipProfileHeader} bg-light-primaryGreen-tints-50 `}
      role="banner"
    >
      <div className="container flex min-h-[27.7rem]">
        <article className="leftSection flex-grow flex items-center">
          <div
            className={`${styles.innerCont} flex items-center justify-start gap-[4rem]`}
          >
            <div className="w-[13.3rem] flex-shrink-0 text-center">
              <div className="h-[13.3rem] w-full relative rounded-full border border-solid border-light-primaryGrey-tints-900"></div>
              <label
                role="button"
                tabIndex={0}
                className="capitalize focus:underline  inline-block mt-[.8rem] text-lightGrey text-[1.4rem] font-normal"
              >
                Remove image
              </label>
            </div>
            <div className="flex-grow ">
              <h1 className="h1 text-[2.4rem] font-semibold">Thomas Wayne</h1>
              <div className={`mt-[1rem] ${styles.rating}`}>
                <Rating initialValue={5} />{" "}
                <span className="text-[1.4rem] text-light-primaryGrey-tints-900 leading-[2.4rem] ">
                  <strong className="font-semibold text-black">
                    No Ratings Found
                  </strong>{" "}
                </span>
              </div>
              <ul className="flex justify-start mt-[1.4rem] gap-[2rem]">
                <li className="flex para justify-start items-center gap-[6px]">
                  <FiPhone />
                  <button
                    type="button"
                    className="text-light-primaryPurple-tints-900 underline"
                  >
                    {" "}
                    Add Mobile No.
                  </button>
                </li>
                <li className="flex para justify-start items-center gap-[6px]">
                  <FiMail />
                  addemailhere@gmail.com
                </li>
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

export default SkipProfileHeader;
