import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/jsm-logo.svg";
import menu from "/public/hamburger-menu.svg";

const Navbar = () => {
  return (
    <nav className=" flex justify-center fixed top-0 z-50 w-full border-b-2 border-black py-7 text-white ">
      <div className=" flex justify-between mx-auto w-full max-w-screen-2xl px-6 sm:px-16  ">
        <Link href="/">
          <Image src={logo} alt="logo" width={55} height={40} />
        </Link>
        <Image
          src={menu}
          width={30}
          height={30}
          alt="Hamburger menu"
          className=" block md:hidden "
        />
        <ul className=" flex justify-center gap-x-3 max-md:hidden md:gap-x-10 ">
          <li className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold ">
            <Link href="https://jsmastery.pro/next13" target="_blank">
              Next.js 13.4 Course
            </Link>
          </li>
          <li className=" text-white font-normal ">
            <Link href="https://jsmastery.pro/masterclass" target="_blank">
              Masterclass
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
