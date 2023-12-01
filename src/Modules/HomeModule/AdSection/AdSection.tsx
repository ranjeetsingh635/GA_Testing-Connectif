import React from "react";
import styles from "./AdSection.module.css";
import images from "../../../Assets/images";
import Image from "next/image";

const cards = [
  {
    id: 1,
    heading: "Security",
    content:
      "We offer SafePay payment protection and your choice of preferred payment method for financial peace of mind.",
  },
  {
    id: 2,
    heading: "Security",
    content:
      "We offer SafePay payment protection and your choice of preferred payment method for financial peace of mind.",
  },
  {
    id: 3,
    heading: "Security",
    content:
      "pogo SafePay payment protection and your choice of preferred payment method for financial peace of mind.",
  },
  {
    id: 4,
    heading: "Security",
    content:
      "We offer SafePay payment protection and your choice of preferred payment method for financial peace of mind.",
  },
  {
    id: 5,
    heading: "Security",
    content:
      "We offer SafePay payment protection and your choice of preferred payment method for financial peace of mind.",
  },
  {
    id: 6,
    heading: "Security",
    content:
      "We offer SafePay payment protection and your choice of preferred payment method for financial peace of mind.",
  },
];

function AdSection() {
  return (
    <>
      <section className=" bg-light-primaryPurple-shades-900 py-[6rem]">
        <div className={` container`}>
          <article className="flex justify-center align-center px-[2rem]">
            <div className=" flex flex-col">
              <h2 className="text-[4.5rem] font-normal text-[#fff] lg:text-[4rem] sm:!text-[3rem]">
                Getting <span className="font-bold">work done</span> has never
                been <span className="font-bold"> easier </span>
              </h2>
              <ul>
                <li className="text-[1.8rem] leading-[4.6rem] text-[#fff] list-disc sm:leading-[3.6rem]">
                  Get matched with expert Agencies in minutes
                </li>
                <li className="text-[1.8rem] leading-[4.6rem] text-[#fff] list-disc sm:leading-[3.6rem]">
                  Dedicated 24/7 customer service team
                </li>
                <li className="text-[1.8rem] leading-[4.6rem] text-[#fff] list-disc sm:leading-[3.6rem]">
                  Money back guarantee and anti-fraud protection
                </li>
              </ul>
            </div>
            <div className=" md:hidden">
              <Image
                src={images.adimage}
                // width={`450`}
                // height={`386`}
                alt="ad image"
              />
            </div>
          </article>
        </div>
      </section>
      <section className="py-[15.3rem] sm:py-[8rem]">
        <div className={` container`}>
          <h2
            className={` text-[3rem] font-bold leading-normal mb-[4rem] ${styles.h2}`}
          >
            Why Choose Us
          </h2>
          <div>
            <ul
              className={`grid grid-cols-3 gap-[1.5rem] md:grid-cols-2 xsm:grid-cols-1 `}
            >
              {/* [&>*:nth-child(odd)]:${styles.odd} [&>*:nth-child(even)]:${styles.even} */}
              {cards.map((card, index) => (
                <li key={card.id}>
                  <div
                    className={`min-h-[203px] p-[2.6rem]  flex flex-col   gap-[1.6rem] md:min-h-[185px] sm:grid-span-full ${
                      styles.box
                    } ${index % 2 === 0 ? styles.even : styles.odd}`}
                  >
                    <div className=" flex flex-shrink-0 items-start gap-[1rem]  ">
                      <div className="lg:w-[20px]">
                        <Image alt="verfied icon" src={images.verifiedicon} />
                      </div>
                      <h3 className="text-[404145] text-[2rem] leading-normal font-bold">
                        {card.heading}
                      </h3>
                    </div>
                    <div className="flex-1 pl-[3rem] sm:pl-[0px]">
                      <p className="text-light-primaryGrey-shades-900 text-[1.6rem] font-normal leading-[24px] lg:text-[1.4rem] lg:leading-[22px]">
                        {card.content}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdSection;
