import React from "react";

interface Props {
  type: string;
  query: string;
  category: string;
}

const Header = ({ type, query, category }: Props) => {
  if (query && category) {
    return (
      <h1 className=" self-start text-white  ">
        Search results for "{query}" in{" "}
        <span className=" capitalize "> {category} </span>
      </h1>
    );
  }

  if (query) {
    <h1 className=" self-start text-white  ">Search results for "{query}"</h1>;
  }

  if (category) {
    <h1 className=" self-start text-white  ">
      <span className=" capitalize "> {category} </span>
    </h1>;
  }

  return <h1 className=" self-start text-white  ">No Results</h1>;
};

export default Header;
