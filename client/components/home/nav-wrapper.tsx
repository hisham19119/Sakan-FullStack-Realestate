"use client";
import { NavWrapper as NavWrapperComponent } from "./nav-wrapper";
export const Navbar = () => {
  return (
    <NavWrapperComponent
      logoLabel="سكـــــن"
      logoHref="/"
      routes={[
        {
          routeLabel: "ميزاتنا",
          routePath: "/",
        },

        {
          routeLabel: "الوحدات",
          routePath: "/",
        },
      ]}
    />
  );
};

import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "../ui/button";
import { MobileSidebar } from "./mobile-sidebar";

interface NavWrapperProps {
  logoLabel: string;
  logoHref: string;
  routes: NavbarRoutes[];
}

interface NavbarRoutes {
  routeLabel: string;
  routePath: string;
}

export function NavWrapper({ logoLabel, logoHref, routes }: NavWrapperProps) {
  return (
    <div className="h-16 w-full flex justify-around items-start">
      <div className="flex gap-4 basis-2/3 justify-around items-center">
        <div className="flex flex-row-reverse gap-1">
          <Link href="/auth/login">
            <Button className="w-auto bg-[#49da7d] hover:bg-[#49da7d]">
              تسجيل الدخول
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button className="text-[#054457] font-expo-light w-auto shadow-none bg-transparent hover:bg-transparent">
              انضم إلينا
            </Button>
          </Link>
        </div>
        <div className="basis-2/3 hidden md:block">
          <ul className="flex space-x-4">
            {routes.map((route) => (
              <li key={route.routeLabel}>
                <Link
                  className="text-[#054457] hover:text-[#054457] font-expo-light font-[20px]"
                  href={route.routePath}
                >
                  {route.routeLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="block lg:hidden">
          <MobileSidebar />
        </div>
        <div className="hidden lg:block">
          <Logo label={logoLabel} href={logoHref} />
        </div>
      </div>
    </div>
  );
}
