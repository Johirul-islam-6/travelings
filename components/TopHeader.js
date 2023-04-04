import { BiLocationPlus } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";

const TopHeader = () => {
  return (
    <>
      <div className="hidden lg:block secondary-color px-10 py-2 relative">
        <div className="flex justify-between">
          <div className="flex gap-8">
            <div className="flex items-center text-base-300 hover:text-white">
              <BiLocationPlus />
              <p className="ml-2 text-sm">250 Main Street, Mirpur, Dhaka </p>
            </div>
            <div className="flex items-center text-base-300 hover:text-white">
              <AiOutlineMail />
              <p className="ml-2 text-sm">contact@example.com</p>
            </div>
          </div>
          <div className="flex gap-5 items-center text-base-300 absolute end-10 top-0 ">
            <div className="flex gap-5">
              <Link href="/booking">
                <p className="ml-2 text-sm hover:text-white">Booking Now </p>
              </Link>
              <Link href="/about">
                <p className="ml-2 text-sm hover:text-white">About Us</p>
              </Link>
            </div>
            <div className="flex gap-3 items-center primary-color p-[10px]">
              <BsFacebook className="hover:text-white" />
              <AiOutlineInstagram className="hover:text-white" />
              <FaPinterest className="hover:text-white" />
              <AiFillTwitterCircle className="hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
