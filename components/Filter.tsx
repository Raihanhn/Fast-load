"use client";
import { formUrlQuery } from "@/sanity/utils";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const links = ["all", "Next 13", "frontend", "backend", "fullstack"];

export default function Filter() {
  const [active, setActive] = useState("");
  const searchParams = useSearchParams();

  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = "";
    if (active === link) {
      setActive("");
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
        value: "null",
      });
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
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
