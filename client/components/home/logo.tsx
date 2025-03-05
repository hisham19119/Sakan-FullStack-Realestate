import Link from "next/link";
import { Button } from "../ui/button";
import { HomeIcon } from "lucide-react";

interface logoProps {
  label: string;
  href: string;
}

export function Logo({ label, href }: logoProps) {
  return (
    <Link
      href="/"
      className="flex gap-x-4  justify-center items-center text-[#054457] "
    >
      <img src="/imgs/logo1.png" />
    </Link>
  );
}
