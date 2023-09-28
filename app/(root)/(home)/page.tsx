import Filter from "@/components/Filter";
import SearchForm from "@/components/SearchForm";
import React from "react";

const Page = () => {
  return (
    <main className=" flex justify-center mx-auto w-full max-w-screen-2xl flex-col ">
      <section className=" nav-padding w-full  ">
        <div className=" flex justify-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center ">
          <h1 className=" sm:h-1 h-2 mb-6 text-[55px] text-center text-white ">
            Javascript Mastery Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filter />
    </main>
  );
};

export default Page;
