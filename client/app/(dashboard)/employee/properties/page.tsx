"use client";

interface PropertyCardProps {
  props: Property[];
}

interface Property {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  image: string;
  type: string;
  rooms: number;
  bathrooms: number;
  garages: number;
  area: number;
  phone: string;
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Phone } from "lucide-react";
import { useEmployeeProperties, useProperties } from "@/hooks/useProperties";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import GarageOutlinedIcon from "@mui/icons-material/GarageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";

const PropertiesPage = ({ props }: PropertyCardProps) => {
  const {
    data: employeeProperties,
    isLoading,
    error,
  } = useEmployeeProperties();

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading properties: </p>;

  const properties = employeeProperties?.data?.properties;
  console.log("properties2", properties);

  const handleRedirect = (propertyId: string) => {
    window.location.href = `/owner/properties/${propertyId}`;
  };

  return (
    <div className=" grid   grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   justify-items-center gap-4 p-8 max-lg:p-4   bg-[#f1f1f2]">
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
            <CardContent className="flex flex-col gap-1 ">
              <span className="flex gap-x-1 pr-2">
                {property.type.type}
                {/* <p>النوع</p> */}
              </span>
              <span className="flex gap-x-1 pr-2">
                {property.price}
                <p>جنيه</p>
              </span>
              <span className="flex gap-x-1 ">
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
                <Link
                  href={`/properties/${property._id}`}
                  className="flex gap-x-1 underline cursor-pointer"
                >
                  عرض المزيد
                </Link>
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
  );
};

export default PropertiesPage;
