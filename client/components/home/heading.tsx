"use client";
import Image from "next/image";
import Photo from "@/public/imgs/bannerHome.png";
import { Button } from "../ui/button";
// import { NavigationMenuDemo } from "./NavigationMenu";
import { useEffect, useState } from "react";

export function Heading() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-center h-full">
      <div className="relative basis-1/2 hidden lg:w-full lg:flex lg:flex-col lg:justify-end items-end lg:aspect-[10/8.5]">
        <Image
          src={Photo}
          alt="Banner Home"
          fill
          className={`object-contain object-left-bottom transition-transform duration-700 ease-out ${
            loaded ? "translate-x-0" : "-translate-x-full"
          }`}
        />
      </div>
      <div
        className={`basis-1/2 flex flex-col pl-1 pr-1 sm:pr-4 lg:pr-24 gap-4 justify-start self-center lg:justify-center shadow-none rounded-none transition-transform duration-700 ease-out ${
          loaded ? "-translate-x-0" : "translate-x-full"
        }`}
        dir="rtl"
      >
        <Button className="bg-[#F8F9FE] hover:bg-[#F8F9FE] py-1 text-[var(--green)] font-expo-light w-24">
          الوحدات
        </Button>
        <h1 className="font-expo-logo sm:font-expo-bold text-[#054457]">
          لنبحث معًا عن مسكن أحلامك !
        </h1>
        <p className="w-fit sm:w-96 font-expo-light">
          استكشف مجموعتنا المميزة من الوحدات السكنية، مع خيارات إقامة منفصلة
          تناسب احتياجاتك وتلبي تطلعاتك.
        </p>

        {/* <div className="flex justify-end">
          <NavigationMenuDemo />
        </div> */}
      </div>
    </div>
  );
}
