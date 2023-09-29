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
    <ul className=" text-white  flex sm:mx-5  md:mx-auto mt-8 ">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={` ${
            active === link
              ? "bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900  "
              : ""
          } rounded-lg px-8 py-2.5 capitalize `}
        >
          {link}
        </button>
      ))}
    </ul>
  );
}
