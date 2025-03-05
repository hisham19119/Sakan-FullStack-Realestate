"use client";
import { Button } from "@/components/ui/button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useRef } from "react";

// interface propertyCardProps {
//   propertiess: Property[];
// }

// interface Property {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   location: string;
//   images: [string];
//   image: string;
//   type: string;
//   rooms: number;
//   bathrooms: number;
//   garages: number;
//   area: number;
// }

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Phone } from "lucide-react";
import { useProperties } from "@/hooks/useProperties";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ProptectedRoutes from "@/components/auth/protectedRoutes";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader";

const page = () => {
  const { user } = useAuth();

  let { properties, isLoading, error } = useProperties();
  const propertiesDivRef = useRef<HTMLDivElement | null>(null);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading properties</div>;
  console.log("user now is ", user);
  console.log("properties ", properties);
  properties = properties.data.properties;
  console.log("properties", properties);
  const handleRedirect = (propertyId: string) => {
    window.location.href = `properties/${propertyId}`;
    console.log("proprtyId");
  };

  const scrolltoPropertiesDiv = () => {
    propertiesDivRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    // <ProptectedRoutes roles={["مستخدم"]}>
    <div className="flex flex-col gap-6 bg-[#f1f1f2]">
      <div className="flex flex-col gap-4  bg-[var(--green)] w-full h-fit  ">
        <div className=" flex flex-col gap-4 justify-start items-center p-16 sm:p-28 w-full  ">
          <h1 className=" font-expo-logo sm:font-expo-bold  text-white  flex items-center justify-center text-center   ">
            مرحبًا بك في موقعنا{" "}
            {user?.name ? `يا ${user.name.split(" ")[0]}` : ""}!
          </h1>
          <p className="font-expo-logo text-white  flex items-center justify-center text-center ">
            نحن هنا لمساعدتك في العثور على العقار المثالي الذي يناسب احتياجاتك.
          </p>
          <p className="font-expo-light text-white  flex items-center justify-center text-center ">
            {" "}
            للاطلاع على كافة الوحدات المتاحة، يرجى التمرير لأسفل.
          </p>
        </div>
        <div className="flex  justify-center h-24 items-center  ">
          <Button
            onClick={scrolltoPropertiesDiv}
            className="bg-[#f1f1f2] hover:bg-[#f1f1f2] w-[300px] text-[var(--green)] py-6  bounce"
          >
            <KeyboardArrowDownIcon style={{ transform: "scale(4)" }} />
          </Button>
        </div>
      </div>
      <div
        ref={propertiesDivRef}
        className=" grid   grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   justify-items-center gap-4 p-8 max-lg:p-4   bg-[#f1f1f2]"
      >
        {Array.isArray(properties) &&
          properties.map((property, index) => (
            <Card
              onClick={() => {
                handleRedirect(property._id);
              }}
              key={index}
              className="max-sm:w-300"
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
    // </ProptectedRoutes>
  );
};

export default page;
