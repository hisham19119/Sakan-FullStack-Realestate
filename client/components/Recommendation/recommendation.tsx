"use client";

import React from "react";
import { Button } from "../ui/button";
import { CircleArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import image1 from "../../public/imgs/recommendations/Rectangle-221.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Phone } from "lucide-react";
// import { Button } from "../ui/button";
import { useProperties } from "@/hooks/useProperties";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Loader from "../Loader";

// const propertiesDivRef = useRef<HTMLDivElement | null>(null);

// const scrolltoPropertiesDiv = () => {
//   propertiesDivRef.current?.scrollIntoView({ behavior: "smooth" });
// };

export const Recommendation = () => {
  let { properties, isLoading, error } = useProperties();

  if (isLoading) return <Loader />;
  // if (error) return <div>Error loading properties</div>;
  // console.log("properties >>>>>", properties);
  properties = properties?.data?.properties.slice(0, 3);
  console.log("properties", properties);
  const handleRedirect = (propertyId: string) => {
    window.location.href = `user/properties/${propertyId}`;
    console.log("proprtyId");
  };
  const goToProperties = () => {
    window.location.href = `user/properties/`;
  };

  return (
    <div
      dir="rtl"
      className="bg-white  h-full flex flex-col justify-center items-center py-10 pl-1 pr-1 sm:pr-4 lg:pr-24 sm:pl-4 lg:pl-24 max-sm:mt-6 w-full gap-4"
    >
      <div
        dir="rtl"
        className=" flex flex-col justify-start items-start  w-full basis-1/3 "
      >
        <span className=" ">
          <p className="bg-[#F8F9FE] py-1 px-2 text-[var(--green)] text-[18px]">
            استكشـــف
          </p>
        </span>
        <div className="">
          <h1 className="text-[48px] text-[#054457]">أفضل التوصيات</h1>
        </div>
        <div>
          <p className="text-[#73788C] text-[16px]">
            استكشف مجموعتنا الحصرية من أفخم العقارات الفريدة والتحف المعمارية.
          </p>
        </div>
        <span onClick={goToProperties} className="flex justify-end w-full ">
          <p className="flex gap-1 bg-[#F8F9FE] py-1 px-2 text-[var(--green)] text-[18px] cursor-pointer">
            اعرف المزيد
            <CircleArrowLeftIcon></CircleArrowLeftIcon>
          </p>
        </span>
      </div>
      <div className="w-full basis-2/3   ">
        <div
          // ref={propertiesDivRef}
          className=" grid   grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   justify-items-center gap-4 p-8 max-lg:p-4   "
        >
          {Array.isArray(properties) &&
            properties.map((property, index) => (
              <Card
                onClick={() => {
                  handleRedirect(property._id);
                }}
                key={index}
                className="max-sm:w-300"
                // className=" xl:w-[350px] lg:w-[250px] max-md:w-[300px] sm:w-[220px] hover:cursor-pointer"
              >
                <CardHeader className="w-full p-0 mb-4  ">
                  <div className="overflow-hidden cursor-pointer">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="object-cover rounded-md w-96 h-80 transition-transform duration-700 ease-out hover:scale-125 z-0"
                    />
                  </div>
                  <CardTitle className="pl-6 pr-6 font-bold text-xl text-[var(--green)]  bg-white ">
                    {property.title}
                  </CardTitle>
                  <CardDescription className="px-6 ">
                    {property.description.length > 50
                      ? `${property.description.slice(0, 40)}...`
                      : property.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-x-4 ">
                  <span className="flex gap-x-1">
                    {property.price}
                    <p>جنيه</p>
                  </span>
                  <span className="flex gap-x-1">
                    <LocationOnOutlinedIcon />
                    {property.location.location}
                  </span>
                </CardContent>
                <CardFooter className="text-[var(--textpur)] flex flex-col justify-center items-center gap-4">
                  <div className="flex justify-start items-start  gap-x-4 w-full">
                    <span className="flex gap-x-1 bg-slate-100 p-2 rounded-xl">
                      <BedOutlinedIcon />
                      {property.rooms}
                    </span>
                    <span className="flex gap-x-1 bg-slate-100 p-2 rounded-xl">
                      <ShowerOutlinedIcon />
                      {property.bathrooms}
                    </span>
                    <span className="flex gap-x-1 bg-slate-100 p-2 rounded-xl">
                      {property.area}
                      <p>
                        م<sup>2</sup>
                      </p>
                    </span>
                    <span className="flex gap-x-1 bg-slate-100 p-2 rounded-xl">
                      <GarageOutlinedIcon />
                      {property.garages}
                    </span>
                  </div>
                  <div className="flex gap-x-4 justify-start items-center w-full">
                    <p
                      onClick={() => {
                        handleRedirect(property._id);
                      }}
                      // href={`/properties/`}
                      className="flex gap-x-1 underline cursor-pointer"
                    >
                      عرض المزيد
                    </p>
                    <Button
                      size="sm"
                      className="bg-[var(--green)] hover:bg-[var(--green)] transition-transform ease-out duration-700 hover:scale-105 cursor-pointer"
                    >
                      {property.phone}
                      <Phone />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};
