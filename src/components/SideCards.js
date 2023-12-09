import React from "react";
import Router from "next/router";
import Link from "next/link";

const SideCards = ({ name, link }) => {
  return (
    <div
      className="hover:cursor-pointer shadow-sm shadow-purple-600 bg-transparent p-4 rounded-lg h-40 "
      onClick={() => Router.push(`${link}`)}
    >
      {name}
    </div>
  );
};
export default SideCards;
