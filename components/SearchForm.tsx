"use client";
import Image from "next/image";
import React, { useState } from "react";
import glass from "../public/magnifying-glass.svg";
import { Input } from "@/components/ui/input";

export default function SearchForm() {
  const [search, setSearch] = useState("");

  return (
    <form className=" flex justify-center mx-auto mt-10 w-full sm:mt-10 sm:px-5  ">
      <label className=" flex justify-center relative w-full max-w-3xl ">
        <Image
          src={glass}
          width={32}
          height={32}
          className=" absolute left-8 top-5 "
          alt="search-icon"
        />
        <Input
          className=" text-base h-fit border-0 !ring-0 !ring-offset-0 bg-gray-800 py-6 pl-20 pr-8 text-white placeholder:text-gray-500"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
}
