"use client";

import {
  BarChart,
  Home,
  Layout,
  List,
  LocateIcon,
  TypeIcon,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import SidebarItem from "./sidebar-item";

const Routes = [
  {
    label: "ميزاتنا",
  },
  {
    label: "الوحدات",
  },
];
export const SidebarRoutes = () => {
  const path = usePathname();

  return (
    <div className="h-full p-2 pl-0 pr-0 flex flex-col gap-y-4 shadow-slate-400 shadow-lg">
      {Routes.map((route, index) => (
        <SidebarItem key={index} label={route.label} />
      ))}
    </div>
  );
};
