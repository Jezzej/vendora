"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Boxes,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  Monitor,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Settings,
  Slack,
  Truck,
  User,
  User2,
  Users2,
  UserSquare2,
  Warehouse,
} from "lucide-react";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathname = usePathname();

  const catalogLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/backend/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/backend/dashboard/categories",
    },
    {
      title: "Attributes",
      icon: SendToBack,
      href: "/backend/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/backend/dashboard/coupons",
    },
    {
      title: "Store Sliders",
      icon: MonitorPlay,
      href: "/backend/dashboard/sliders",
    },
  ];

  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/backend/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/backend/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/backend/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/backend/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/backend/dashboard/staff",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/backend/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const getLinkClassName = (href) => {
    return pathname === href
      ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-lime-500 text-lime-500"
      : "flex items-center space-x-3 px-6 py-2 hover:bg-slate-700 transition-colors";
  };

  const getCatalogLinkClassName = (href) => {
    return pathname === href
      ? "flex items-center space-x-3 py-1 text-sm text-lime-500"
      : "flex items-center space-x-3 py-1 hover:bg-slate-700 transition-colors";
  };

  return (
    <div
      className={
        showSidebar
          ? "sm:block mt-20 sm-mt-0 bg-slate-800 space-y-6 w-60 h-screen text-white fixed text-sm"
          : "hidden sm-mt-0 sm:block bg-slate-800 space-y-6 w-60 h-screen text-white fixed text-sm"
      }
    >
      <Link
        onClick={() => setShowSidebar(false)}
        href="/backend/dashboard"
        className="block px-6 py-4 mb-2"
      >
        <Image src={logo} alt="logo" className="ml-1 w-40 h-auto" priority />
      </Link>
      <div className="space-y-1.5 flex flex-col">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/backend/dashboard"
          className={getLinkClassName("/backend/dashboard")}
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger className="flex items-center justify-between w-full py-2 hover:bg-slate-700 transition-colors">
            <div className="flex items-center space-x-3">
              <Slack />
              <span>Catalog</span>
            </div>
            {openMenu ? <ChevronDown /> : <ChevronRight />}
          </CollapsibleTrigger>

          <CollapsibleContent className="rounded-lg py-3 px-3 pl-6 bg-slate-900">
            {catalogLinks.map((item, i) => (
              <Link
                onClick={() => setShowSidebar(false)}
                key={i}
                href={item.href}
                className={getCatalogLinkClassName(item.href)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={getLinkClassName(item.href)}
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}

        <div className="px-6 py-2 mt-4">
          <button className="w-full bg-lime-600 rounded-md flex items-center justify-center space-x-3 px-6 py-3 hover:bg-lime-700 transition-colors">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
