import styles from "./Footer.module.css";

import Image from "next/image";
import images from "src/Assets/images";
import Link from "next/link";

const categories = [
  { id: 1, label: `Graphics & Design`, path: "" },
  { id: 2, label: `Digital Marketing`, path: "" },
  { id: 3, label: `Writing & Translation`, path: "" },
  { id: 4, label: `Video & Animation`, path: "" },
  { id: 5, label: `Music & Audio`, path: "" },
  { id: 6, label: `Programming & Tech`, path: "" },
];

function Footer() {
  return (
    <footer>
      <div className={` bg-footerBg container`}>
        <div className="flex flex-col pb-[3rem] ">
          <article className="my-[2rem]">
            <div>
              <Image src={images.connectifwhiteLogo} alt="Connectif logo" />
            </div>
            <p className="text-[#fff] text-[1.2rem]">
              © ConnectIf Ltd. 2023. All rights reserved.Registered in Saudi
              arabia. Company Number: 89541654654156341
            </p>
          </article>
          <article className="flex  gap-[2.5rem] ">
            <div className="flex-1">
              <h4 className="text-light-primaryGreen-shades-900 text-[1.5rem] mb-[1.6rem]">
                Categories
              </h4>
              <ul>
                {categories.map((item) => (
                  <li key={item.id}>
                    <Link href={item.path} passHref>
                      <a className="text-primaryWhite flex text-[1.2rem] leading-[16px] pb-[1rem] sm:text-[1.4rem] sm:pb-[1.4rem]">
                        {item.label}
                      </a>
                    </Link>{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="text-light-primaryGreen-shades-900 text-[1.5rem] mb-[1.6rem]">
                Company
              </h4>{" "}
              <ul>
                <li className="text-[#fff] text-[1.2rem] leading-[16px] pb-[1rem] ">
                  <Link href={"/"}> Data</Link>{" "}
                </li>
                <li className="text-[#fff] text-[1.2rem] leading-[16px] pb-[1rem]">
                  <Link href={"/"}> Business</Link>{" "}
                </li>
                <li className="text-[#fff] text-[1.2rem] leading-[16px] pb-[1rem]">
                  <Link href={"/"}> Lifestyle</Link>{" "}
                </li>
                <li className="text-[#fff] text-[1.2rem] leading-[16px] pb-[1rem]">
                  <Link href={"/"}> Photography</Link>{" "}
                </li>
                <li className="text-[#fff] text-[1.2rem] leading-[16px] pb-[1rem]">
                  <Link href={"/"}> Sitemap</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="text-light-primaryGreen-shades-900 text-[1.5rem] mb-[1.6rem]">
                Categories
              </h4>
              <ul>
                <li className="text-[#fff] text-[1.2rem] leading-[16px] pb-[1rem]">
                  <Link href={"/"}> About Us</Link>{" "}
                </li>
                <li className="text-[#fff] text-[1.2rem] leading-[16px] pb-[1rem]">
                  <Link href={"/"}> Careers</Link>{" "}
                </li>
                <li className="text-[#fff] text-[1.2rem] leading-[16px] pb-[1rem]">
                  <Link href={"/"}> Contact Us</Link>{" "}
                </li>
                <li className="text-[#fff] text-[1.2rem] leading-[16px] pb-[1rem]">
                  <Link href={"/"}> Help & Support</Link>{" "}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
