import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./TestimonialsSection.module.css";
import images from "../../../Assets/images";
import Image from "next/image";
import Link from "next/link";

function TestimonialsSection() {
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
  const boxes = [
    {
      id: 1,
      heading: "Flexibility",
      image: images.dummyimage,
      content:
        "We provide multiple Payment terms and flexible Agreements to enable you to work the way you want.",
    },
    {
      id: 2,
      heading: "Flexibility",
      image: images.dummyimage,
      content:
        "We provide multiple Payment terms and flexible Agreements to enable you to work the way you want.",
    },
    {
      id: 3,
      heading: "Flexibility",
      image: images.dummyimage,
      content:
        "We provide multiple Payment terms and flexible Agreements to enable you to work the way you want.",
    },
  ];
  return (
    <>
      <section>
        <div className={` container`}>
          <div className="flex justify-center items-center flex-col gap-[2.4rem]">
            <h2 className="text-[3rem] font-bold leadng-normal capitalize text-[#000] text-center">
              Trusted By Leading <span className="text-[#5E17EB]">Brands</span>{" "}
              and <span className="text-[#5E17EB]">Startups</span>{" "}
            </h2>
            <Image alt="invertedcomma image" src={images.invertedcomma} />
          </div>
          <div className={`relative ${styles.carouselWrapper}`}>
            <Carousel
              responsive={responsive}
              arrows={false}
              swipeable={true}
              showDots={true}
            >
              {[1, 2, 3, 4].map((item) => {
                return (
                  <div
                    key={item}
                    className="flex justify-between items-center flex-col max-w-[78.5rem] mx-auto pb-[2rem]"
                  >
                    <article>
                      <p className="text-[1.8rem] font-medium leading-[32px] pt-[2.4rem] pb-[3.2rem] text-center">
                        “Lorem ipsum dolor sit amet consectetur. Urna sem enim
                        feugiat felis lectus sit vulputate velit nibh. Feugiat
                        sit mauris potenti nec turpis amet aliquet est vitae.
                        Aliquam in eget eget in commodo nisl ultrices molestie.
                        Tristique egestas sagittis in facilisi purus at mi
                        maecenas.”
                      </p>
                      <h3 className="text-[1.4rem] font-semibold leading-normal text-center ">
                        Kapil Rawat
                      </h3>
                      <h4 className="text-light-primaryGrey-tints-500 text-[1.4rem] font-normal text-center pb-[3.2rem]">
                        Accounts
                      </h4>
                    </article>
                    <Image alt="banner image" src={images.testimonialimage} />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        <div className={` container`}>
          <h2 className="text-[3rem] text-[#000] font-bold leading-normal mb-[2rem] mt-[12.3rem]">
            Find great work
          </h2>
          <ul className="grid grid-cols-3 gap-[1.5rem] xsm:grid-cols-2">
            {boxes.map((box) => (
              <li key={box.id}>
                <div className="min-h-[203px] ">
                  <div
                    className={`min-h-[20.3rem] relative overflow-hidden ${styles.imageBox}`}
                  >
                    <Image
                      objectFit="cover"
                      objectPosition="center"
                      layout="fill"
                      src={box.image}
                      alt={box.heading}
                    />
                  </div>
                  <h3 className="text-[1.8rem] lg:text-[1.5rem] text-[#404145] font-bold  leading-normal mt-[2rem] mb-[1rem] sm:text-[1.4rem] ">
                    {box.heading}
                  </h3>
                  <p className="text-light-primaryGrey-shades-900 font-normal leading-[24px] text-[1.6rem] md:text-[1.4rem] sm:text-[1.2rem] sm:leading-[2rem]">
                    {box.content}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mt-[15.3rem] mb-[13.9rem] xsm:mt-[6rem]">
        <div className={`container`}>
          <div
            className={` bg-light-primaryPurple-tints-900 rounded-2xl flex justify-between items-center  px-[8rem] py-[6rem] md:px-[4rem] sm:!px-[2rem] sm:flex-col sm:py-[2rem] sm:gap-[3rem] sm:text-center ${styles.signUpContainer}`}
          >
            <article>
              <h2 className="text-[3.8rem] font-bold leading-[50px] text-[#fff] pb-[5px] md:text-[3rem] sm:!text-[2.6rem]">
                Ready to Get Started?
              </h2>
              <p className="text-[1.8rem] font-normal leading-6 text-[#fff]">
                Join Now to encourage user registration
              </p>
            </article>
            <article>
              <Link passHref href={`/create-account`}>
                <a
                  className={`text-[2rem] font-medium  max-w-[18.4rem] w-full bg-[#fff] px-[2rem] py-[1rem] rounded-lg text-light-primaryPurple-tints-900 md:px-[1.3rem] md-py-[1rem] border-2 border-solid border-transparent active:scale-[.96] hover:text-primaryWhite hover:border-current hover:bg-light-primaryPurple-tints-900  ${styles.signUpBtn}`}
                >
                  Sign Up
                </a>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialsSection;
