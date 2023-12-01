import React from "react";
import styles from "./CommonCheckbox.module.css";

function CommonCheckbox() {
  return (
    <div className={`${styles.CommonCheckbox} relative`}>
      <input
        className={`visuallyHidden transition-all`}
        type="checkbox"
        name="commonCheckBox"
        id={`${Date.now()}`}
      />
      <span
        tabIndex={0}
        className="transition-all w-[2.4rem] h-[2.4rem] flex rounded-[4px] border-2 border-solid border-light-primaryGrey-tints-50 hover:border-light-primaryGrey-tints-200"
      ></span>
      <label
        className="text-light-primaryGrey-tints-900 text-[1.4rem] leading-[2.4rem] tracking-[-.16px] transition-all"
        htmlFor={`${Date.now()}`}
      >
        I agree to the Terms & Conditions
      </label>
    </div>
  );
}

export default CommonCheckbox;
