"use client";

import { ArrowDown, ChevronDown, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu } from "../ui/dropdown-menu";
import { LocationDropdownMenuDemo } from "./location-menu";
import { PropertyDropdownMenuDemo } from "./properties-menu";
import { Input } from "../ui/input";
import { useEffect, useRef, useState } from "react";

export function NavigationMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState("اختر المكان");
  const [selectedProperty, setSelectedProperty] = useState("اختر النوع");

  const handleSelectLocation = (location: string) => {
    setSelectedLocation(location);
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex gap-2  relative">
      <div className="group ">
        <Button className="bg-white hover:bg-white transition-transform duration-300  hover:scale-105 mb-2 text-[var(--green)] font-expo-light group">
          <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
          اشتري
        </Button>
        <div className=" w-96 h-20 bg-white absolute right-0 opacity-0 scale-95 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-100 ">
          s
        </div>
      </div>
      <div className="group">
        <Button className="bg-white hover:bg-white transition-transform duration-300 hover:scale-105 mb-2 text-[var(--green)] font-expo-light group">
          <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
          استأجر
        </Button>
        <div
          // ref={menuRef}
          className={`flex items-start gap-4 w-[560px] p-4 h-18 bg-white absolute right-0 transition-all duration-1000  
        ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
        }`}
          // onMouseEnter={() => setIsOpen(true)}
        >
          <div className="flex items-start gap-4 basis-4/5">
            <div
              className=" w-16 h-14 flex flex-col gap-2 "
              onClick={() => setIsOpen(true)}
            >
              <h1 className="flex justify-center">المكـــان</h1>
              <LocationDropdownMenuDemo
                labels={["المعادي", "حلوان ", "العمرانية"]}
                onSelect={() => handleSelectLocation}
              />
            </div>
            <div className="w-16 h-14 flex flex-col gap-2 ">
              <h1 className="flex justify-center">النوع </h1>
              <PropertyDropdownMenuDemo labels={["شقة", "فيلا", "تاون هاوس"]} />
            </div>
            <div className="w-16 h-14 flex flex-col gap-2">
              <p>السعر</p>
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="من"
                  className="w-32"
                  min={0}
                  onFocus={() => setIsOpen(true)}

                  // onBlur={() => setIsOpen(false)}
                />
                <Input
                  type="number"
                  placeholder="إلى"
                  className="w-32"
                  max={100000000}
                  // onFocus={() => setIsOpen(true)}
                  onBlur={() => setIsOpen(false)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-center basis-1/5 h-16  mt-1">
            <Button>
              <SearchIcon /> ابحــث
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
