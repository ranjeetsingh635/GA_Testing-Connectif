import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CustomerServiceSection.module.css";
import images from "../../../Assets/images";
import Image from "next/image";

function CustomerServiceSection() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <section>
        <div className={`px-[2rem] pt-[10rem]  container`}>
          <article className="flex justify-between items-center pb-[4rem] text-center ">
            <h2 className={`${styles.sliderHeading} h2`}>
              Services for what you need
            </h2>
            <div className="flex">
              <button className="group  flex items-center text-[1.6rem] gap-[8px] font-medium leading-normal text-light-primaryPurple-tints-500 transition-transform transform  sm:text-[1.4rem]">
                See more{" "}
                <svg
                  className="transition-all relative group-hover:left-[1rem] duration-500 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M15.0863 6.17969L21.1562 12.2497L15.0863 18.3197M4.15625 12.2497H20.9862"
                    // stroke="#5E17EB"
                    className="stroke-light-primaryPurple-tints-900"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </article>
          <div className={`relative ${styles.carouselWrapper}`}>
            <Carousel
              responsive={responsive}
              arrows={true}
              swipeable={true}
              showDots={false}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                return (
                  <figure className={` ${styles.sliderCard}`} key={item}>
                    <div className="min-h-[26rem] relative">
                      <Image
                        objectFit="cover"
                        objectPosition="center"
                        layout="fill"
                        alt="service image"
                        src={images.serviceimage}
                      />
                    </div>
                    <figcaption>
                      <h5 className="text-[1.8rem] font-bold leading-[2.6rem] py-[2.4rem] px-[1.6rem]">
                        Logo & Brand Designing
                      </h5>
                    </figcaption>
                  </figure>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
      <section
        className={` pt-[15rem] pb-[16rem] md:py-[6rem] ${styles.topAgencySection}`}
      >
        <div className={` max-w-[1094px] container`}>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-3 xsm:grid-cols-2 ">
            <div className="relative col-span-2 pt-[4rem] pr-[25%] md:col-span-full md:pr-[1rem] pb-[4rem]">
              <h2 className="h2 text-left md:text-[2.6rem]">
                Top Featured Agencies Section
              </h2>
              <p className="text-[#62646A] text-[1.4rem] leading-[2.4rem] font-normal">
                Lorem ipsum dolor sit amet consectetur. Vitae a vivamus
                porttitor interdum ac arcu ut faucibus. Morbi tempus dolor
                natoque proin enim eu pellentesque in interdum.
              </p>
            </div>
            <div className="relative min-h-[26.2rem] overflow-hidden rounded-[1rem]">
              <Image
                className="rounded-[1rem] hover:scale-[1.10] transition-[all.4s] w-full h-full hover:rotate-[4deg]"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="agency name"
                src={images.agencyone}
              />
            </div>
            <div className="relative min-h-[26.2rem] overflow-hidden rounded-[1rem]">
              <Image
                className="rounded-[1rem] hover:scale-[1.10] transition-[all.4s] w-full h-full hover:rotate-[4deg]"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="agency name"
                src={images.agencytwo}
              />
            </div>
            <div className="relative min-h-[26.2rem] overflow-hidden rounded-[1rem]">
              <Image
                className="rounded-[1rem] hover:scale-[1.10] transition-[all.4s] w-full h-full hover:rotate-[4deg]"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="agency name"
                src={images.agencythird}
              />
            </div>
            <div className="relative min-h-[26.2rem] overflow-hidden rounded-[1rem]">
              <Image
                className="rounded-[1rem] hover:scale-[1.10] transition-[all.4s] w-full h-full hover:rotate-[4deg]"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="agency name"
                src={images.agencyone}
              />
            </div>
            <div className="relative min-h-[26.2rem] overflow-hidden rounded-[1rem]">
              <Image
                className="rounded-[1rem] hover:scale-[1.10] transition-[all.4s] w-full h-full hover:rotate-[4deg]"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="agency name"
                src={images.agencytwo}
              />
            </div>
            <div className="relative min-h-[26.2rem] overflow-hidden rounded-[1rem]">
              <Image
                className="rounded-[1rem] hover:scale-[1.10] transition-[all.4s] w-full h-full hover:rotate-[4deg]"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="agency name"
                src={images.agencytwo}
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <button className="group transition-all primarBtn--outline inline-flex items-center w-auto px-[3.2rem] py-[1.6rem] mx-auto mt-[6.4rem] text-[1.6rem] font-normal rounded-[10px]  ">
              View more
              <svg
                className="transition-all scale-[.85] relative ml-[1rem] group-hover:ml-[2rem] "
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M15.0863 6.17969L21.1562 12.2497L15.0863 18.3197M4.15625 12.2497H20.9862"
                  className="stroke-light-primaryPurple-tints-900 group-hover:stroke-primaryWhite"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerServiceSection;
