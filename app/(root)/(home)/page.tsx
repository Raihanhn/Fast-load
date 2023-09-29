import Filter from "@/components/Filter";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResources, getResourcesPlaylist } from "@/sanity/actions";
import React from "react";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  console.log(searchParams);
  const resources = await getResources({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  const resourcesPlaylist = await getResourcesPlaylist();

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

      {(searchParams?.query || searchParams?.category) && (
        <section className="  flex justify-center items-center mt-6 w-full flex-col sm:mt-20 ">
          <Header
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
          />
          <div className=" mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start ">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ) : (
              <p className=" text-white "> No resources found </p>
            )}
          </div>
        </section>
      )}

      {resourcesPlaylist.map((item: any) => (
        <section
          key={item._id}
          className=" flex items-center justify-center mt-6 w-full flex-col sm:mt-20 "
        >
          <h1 className=" self-start text-white  "> {item.title} </h1>
          <div className=" mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start ">
            {item.resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                downloadLink={resource.downloadLink}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Page;
