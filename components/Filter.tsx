"use client";
import React, { useState } from "react";

const links = ["all", "Next 13", "frontend", "backend", "fullstack"];

export default function Filter() {
  const [active, setActive] = useState("");
  const handleFilter = (link: string) => {
    setActive(link);
  };
  console.log(active);
  return (
    <ul className=" text-white ms-[400px] flex justify-center w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl ">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={` ${
            active === link
              ? "bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900"
              : ""
          } rounded-lg px-8 py-2.5 capitalize `}
        >
          {link}
        </button>
      ))}
    </ul>
  );
}
