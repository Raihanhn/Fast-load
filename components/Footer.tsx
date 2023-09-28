import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white flex justify-between w-full gap-y-10  border-black-400 bg-black px-20 py-12 max-md:flex-col ">
      <p>Copyright © 2023 JS Mastery Pro | All Rights Reserved</p>
      <div className=" flex gap-x-9 ">
        <Link href="/terms-of-use">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
