import React from "react";
import { LoginForm } from "@/components/auth/Login-form";

function LoginPage() {
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
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
