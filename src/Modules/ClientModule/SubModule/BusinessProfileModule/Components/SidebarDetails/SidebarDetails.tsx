import React from "react";

import styles from "./SidebarDetails.module.css";
import Image from "next/image";
import images from "src/Assets/images";
import { BUSINESS_PROFILE_DATA } from "../../Types/ResponseTypes";

type BUSINESS_PROFILE_DATA_PROPS = {
  businessProfileData?: BUSINESS_PROFILE_DATA;
};
function SidebarDetails(props: BUSINESS_PROFILE_DATA_PROPS) {
  const { businessProfileData } = props;
  return (
    <aside
      className={`rounded-[1rem] min-h-[20rem] bg-white border border-solid relative top-[-10rem] border-inputBorder p-[3.2rem] ${styles.detailsDescription} basis-[30.6rem] flex-shrink-0`}
    >
      <ul className={styles.ul}>
        <li>
          <h3 className="para">
            <Image src={images.companyBuilding} alt="building icon" /> Company
            Name
          </h3>
          <p className="para">{businessProfileData?.companyName}</p>
        </li>
        <li>
          <h3 className="para">
            <Image src={images.globeIcon} alt="globe icon" /> Website
          </h3>
          <p className="para">{businessProfileData?.companyWebsite}</p>
        </li>
        <li>
          <h3 className="para">
            <Image src={images.suitcaseIcon} alt="suitcase icon" /> Industry
            Type
          </h3>
          <p className="para">IT Services and IT Consulting</p>
        </li>
        {/* <li>
          <h3 className="para">
            <Image src={images.skillIcon} alt="skills icon" /> Skills
          </h3>
          <div
            className={`${styles.skillsUl} flex flex-wrap gap-[.8rem] mt-[1.6rem]`}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <span
                className="leading-normal font-medium tracking-[-.16px] p-[.8rem] rounded-[.6rem] bg-light-primaryGrey-tints-100 text-[1.2rem] text-light-primaryGrey-tints-900"
                key={item}
              >{`Add your skills`}</span>
            ))}
          </div>
        </li> */}
        <li>
          <h3 className="para">
            <Image src={images.locationIcon} alt="location icon" /> Address
          </h3>
          <p className="para">{businessProfileData?.address?.address}</p>
        </li>
      </ul>
      <button className="mt-[1.4rem] primarBtn--outline rounded-[1rem] p-[1.4rem] text-[1.6rem]">
        Edit Profile
      </button>
    </aside>
  );
}

export default SidebarDetails;
