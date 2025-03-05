import React from "react";
import { Navbar } from "./navbar";
import { Heading } from "./heading";

export const Main = () => {
  return (
    <div className="bg-[#f5f5f5] pt-4 h-screen  flex flex-col justify-start ">
      <div className="basis-1/6 lg:basis-1/10 flex flex-col justify-center">
        <Navbar />
      </div>
      <div className="basis-5/6 lg:basis-9/10 flex flex-col lg:justify-end overflow-hidden">
        <Heading />
      </div>
    </div>
  );
};
