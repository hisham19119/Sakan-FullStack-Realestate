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

const ownerRoutes = [
  {
    icon: BarChart,
    label: "التحليلات",
    href: "/owner",
  },
  {
    icon: List,
    label: "الوحدات",
    href: "/owner/properties",
  },
  {
    icon: Users,
    label: "المستخدمين",
    href: "/owner/users",
  },
  {
    icon: LocateIcon,
    label: "الأماكن",
    href: "/owner/locations",
  },
  {
    icon: TypeIcon,
    label: "أنواع الوحدات",
    href: "/owner/types",
  },
  {
    icon: Home,
    label: "إنشاء وحدة جديدة",
    href: "/owner/create",
  },
];

const employeeRoutes = [
  {
    icon: Layout,
    label: "الوحدات",
    href: "/employee",
  },
  {
    icon: Home,
    label: "إنشاء وحدة جديدة",
    href: "/employee/create",
  },
];

export const SidebarRoutes = () => {
  const path = usePathname();
  const routes = path.includes("owner") ? ownerRoutes : employeeRoutes;

  return (
    <div className="h-full p-2 pl-0 pr-0 flex flex-col gap-y-4 shadow-slate-400 shadow-lg">
      {routes.map((route, index) => (
        <SidebarItem
          key={index}
          label={route.label}
          icon={route.icon}
          href={route.href}
        />
      ))}
    </div>
  );
};
