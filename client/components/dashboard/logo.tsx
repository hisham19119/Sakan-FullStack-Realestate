import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex gap-x-4  justify-center items-center text-[#054457] "
    >
      <img src="/imgs/logo1.png" />
    </Link>
  );
};
