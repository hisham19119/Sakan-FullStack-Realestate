"use client";
import Advantage from "@/components/advante/advantage";
import { Main } from "@/components/home/main";
import { Recommendation } from "@/components/Recommendation/recommendation";
import { useEffect } from "react";

export default function Home() {
  const handleScroll = () => {
    document.getElementById("recommendation")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log("Hydration debug - Client HTML:", document.body.innerHTML);
  }, []);

  return (
    <div className=" flex flex-col gap-20 h-screen w-full ">
      <div className=" ">
        <Main />
      </div>
      <div id="recommendation" className="">
        <Recommendation />
      </div>
      <div>
        <Advantage />
      </div>
    </div>
  );
}
