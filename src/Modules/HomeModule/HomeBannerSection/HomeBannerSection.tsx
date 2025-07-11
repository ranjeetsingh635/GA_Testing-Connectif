import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./HomeBannerSection.module.css";
import Link from "next/link";
import images from "../../../Assets/images";
import Image from "next/image";

function HomeBannerSection() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className={`overflow-hidden relative z-0  ${styles.section}`}>
        <div
          className={`flex justify-between  min-h-[632px] pt-[10rem]  container mx-auto md:flex-col md:pt-[8rem] md:pb-[4rem]`}
        >
          <div className="w-full flex-grow-1 pr-[4rem] pb-[4.8rem]  md:py[3rem] md:px-[1rem] ">
            <h1 className="text-[4.8rem] text-[#000] leading-[1.2] font-bold capitalize  xl:text-[4.6rem] lg:!text-[4rem] md:leading-[44px] ">
              A{" "}
              <span className=" text-light-primaryPurple-tints-900">
                {" "}
                Platform8{" "}
              </span>{" "}
              Build for New Way of{" "}
              <span className="text-light-primaryPurple-tints-900">
                {" "}
                Working{" "}
              </span>
            </h1>
            <p className="mt-[2.4rem] mb-[4.8rem] text-[2rem] leading-[3rem] font-normal xl:text-[1.8rem] lg-[1.6rem] ">
              {`Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took.`}
            </p>

            <div className="flex gap-[1.5rem]">
              <div className=" flex-1">
                <h3 className="text-[2.4rem] font-bold leading-normal xl:text-[2rem] lg-[1.8rem]">
                  Im a supplier
                </h3>
                <p className="text-[1.8rem] my-[1rem] font-normal text[#000] ">
                  Get the Opportunity that boost your Business
                </p>
                <Link href={`#`} passHref>
                  <a
                    className={`flex text-light-primaryPurple-tints-900 text-[1.6rem] font-bold capitalize cursor-pointer ${styles.getStarted}`}
                  >
                    {" "}
                    Get Started{" "}
                    <Image
                      alt="navigation icon"
                      src={images.arrowTopPurple}
                    />{" "}
                  </a>
                </Link>
              </div>
              <div className=" flex-1 ">
                <h3 className="text-[2.4rem] font-bold leading-normal xl:text-[2rem] lg-[1.8rem] ">
                  I Want to Hire
                </h3>
                <p className="text-[1.8rem] my-[1rem] font[400] xl:text-[1.6rem] ">
                  Get the Best Quotes for Your Projects
                </p>
                <Link href={`#`} passHref>
                  <a
                    className={`flex  text-light-primaryPurple-tints-900 text-[1.6rem] font-bold capitalize cursor-pointer ${styles.getStarted}`}
                  >
                    {" "}
                    Get Started{" "}
                    <Image
                      alt="navigation icon"
                      src={images.arrowTopPurple}
                    />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`w-[500px] flex-shrink-0  xl:w-[400px] md:mx-auto  sm:!w-[300px]`}
          >
            <div className={`relative ${styles.carouselWrapper}`}>
              <Carousel
                responsive={responsive}
                arrows={false}
                swipeable={true}
                showDots={true}
              >
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <div key={item} className={styles.carouselImage}>
                      <Image alt="banner image" src={images.bannerimage} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className={` py-[3.4rem] ${styles.logoSection}`}>
        <div
          className={` flex items-center justify-center  md:flex-col md:gap-[3rem] container`}
        >
          <h4 className="text-[1.8rem] text-[#474747] font-bold">
            Trusted by :
          </h4>
          <ul className="flex items-center justify-center ml-[2rem] gap-[4rem] xsm:flex-wrap">
            <li className="grid place-items-center">
              <Image alt="meta logo" src={images.metalogo} />{" "}
            </li>
            <li className="grid place-items-center">
              <Image alt="google logo" src={images.googlelogo} />{" "}
            </li>
            <li className="grid place-items-center">
              <Image alt="netflix logo" src={images.netflixlogo} />{" "}
            </li>
            <li className="grid place-items-center">
              <Image alt="pg logo" src={images.pglogo} />{" "}
            </li>
            <li className="grid place-items-center">
              <Image alt="paypal logo" src={images.paypallogo} />{" "}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HomeBannerSection;
