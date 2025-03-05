import React from "react";
import { RegisterForm } from "@/components/auth/Register-form";
// import Photo from "../../../public/images/home.jpg";
function RegisterPage() {
  return (
    <div className="h-full w-full relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/bgVED.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/50">
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
