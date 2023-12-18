import Link from "next/link";
import images from "../../../../../Assets/images";
import Image from "next/image";
function Header() {
  return (
    <header>
      <div className="container flex justify-between items-center">
        <Link passHref href={"/"}>
          <a>
            <Image src={images.logo} alt="Connectif logo" />
          </a>
        </Link>
        <Link passHref href={`/create-account`}>
          <a className="primaryBtn px-[1rem] max-w-[15rem] py-[2rem] rounded-[.6rem]">
            Bhup+Jeet3
          </a>
        </Link>
      </div>
    </header>
  );
}
export default Header;