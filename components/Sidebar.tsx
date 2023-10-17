"use client";

import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";

import Box from "@/components/Box";
import SidebarItem from "@/components/SidebarItem";

interface SidebarProps {
  children: React.ReactNode;
};

const Sidebar = ({
  children
}: SidebarProps) => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: "Home",
      active: pathname !== '/search',
      href: '/',
    },
    {
      icon: BiSearch,
      label: "Search",
      active: pathname === '/search',
      href: '/search',
    }
  ], [pathname]);

  return ( 
    <div className="flex h-full">
      <div
        className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2"
      >
        <Box className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((item) => (
            <SidebarItem
              key={item.label}
              {...item}
            />
          ))}
        </Box>
        <Box className="overflow-y-auto h-full">
          Song Library
        </Box>
      </div>
    </div>
  );
};

export default Sidebar;