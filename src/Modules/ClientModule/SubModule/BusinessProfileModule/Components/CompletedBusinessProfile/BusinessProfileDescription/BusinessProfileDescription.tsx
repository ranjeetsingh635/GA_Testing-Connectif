import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import styles from "./BusinessProfileDescription.module.css";
import ProductDetailTab from "../../ProductDetailTab/ProductDetailTab";
import PortfolioTab from "../../PortfolioTab/PortfolioTab";
import GigsTab from "../../GigsTab/GigsTab";
import Reviewstab from "../../Reviewstab/Reviewstab";
import SidebarDetails from "../../SidebarDetails/SidebarDetails";
import useBusinessProfileQuery from "../../../Hooks/useBusinessProfileQuery";
import { BUSINESS_PROFILE_DATA } from "../../../Types/ResponseTypes";

type BUSINESS_PROFILE_DATA_PROPS = {
  businessProfileData?: BUSINESS_PROFILE_DATA;
};
function BusinessProfileDescription(props: BUSINESS_PROFILE_DATA_PROPS) {
  const { businessProfileData } = props;
  const arr = [
    { id: 3, component: <GigsTab />, label: "Gigs" },
    { id: 1, component: <ProductDetailTab />, label: "Profile Details" },
    // { id: 2, component: <PortfolioTab />, label: "Portfolio" },

    { id: 4, component: <Reviewstab />, label: "Reviews" },
  ];
  return (
    <section>
      <div className="container flex">
        <article className="leftSection flex-grow pr-[3.2rem]">
          {arr && (
            <Tabs.Root defaultValue={`${arr[0].id}`}>
              <Tabs.List className="flex justify-start border-b border-solid border-inputBorder">
                {arr.map((item) => (
                  <Tabs.Trigger
                    // tabIndex={0}
                    className={`py-[2rem] px-[2rem] text-light-primaryGrey-tints-900 text-[1.6rem] transition-all border-b border-solid border-transparent font-normal leading-normal hover:text-light-primaryPurple-tints-900 ${styles.tabTrigger}`}
                    key={item.id}
                    value={`${item.id}`}
                  >
                    {item.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              <section className="py-[4rem]">
                {arr.map((item) => (
                  <Tabs.Content key={item.id} value={`${item.id}`}>
                    {item.component}
                  </Tabs.Content>
                ))}
              </section>
            </Tabs.Root>
          )}
        </article>
        {/* right side */}
        <SidebarDetails businessProfileData={businessProfileData} />
        {/* right side */}
      </div>
    </section>
  );
}

export default BusinessProfileDescription;
