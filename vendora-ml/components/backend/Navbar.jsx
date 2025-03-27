import { Bell, User, AlignJustify, Sun, LayoutDashboard, Settings, LogOutIcon, LogOut, X } from "lucide-react";
import React from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcherBtn } from "./ThemeSwitcherBtn";
import Link from "next/link";
export default function Navbar({setShowSidebar,showSidebar}) {
  return (
    <div
      className="flex items-center justify-between 
    bg-slate-900 text-slate-50 h-20 px-8 py-8 fixed top-0 w-full z-50 sm:pr-[20rem] "
    >
      {/* <Link href={"/dashboard"} className="sm:hidden">
      logo</Link> */}
      {/* icons */}
      <button onClick={()=>setShowSidebar(!showSidebar)} className="text-lime-700 dark:text-lime-500">
        <AlignJustify />
      </button>
      {/* 3 icons*/}
      <div className="flex space-x-3 text-green-600">
        <ThemeSwitcherBtn/>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg "
        >
          <Bell className="text-green-600" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
            20
          </div>
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="bg-white text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 shadow-lg py-2 px-4 pr-8">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        
        <DropdownMenuItem>
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={200}
            height={200}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <p>Yellow sweet corn stock out,</p>
            <div className="flex items-center space-x-2">
              <p className="px-3 py-0.5 bg-red-700 rounded-full text-white text-sm">Stock Out</p>
              <p>Dec 12 2021 - 12:40PM</p>
            </div>
          </div>
          <button>
          <X/>
          </button>
        </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={200}
            height={200}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <p>Yellow sweet corn stock out,</p>
            <div className="flex items-center space-x-2">
              <p className="px-3 py-0.5 bg-red-700 rounded-full text-white text-sm">Stock Out</p>
              <p>Dec 12 2021 - 12:40PM</p>
            </div>
          </div>
          <button>
          <X/>
          </button>
        </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem>
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={200}
            height={200}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col space-y-1">
            <p>Yellow sweet corn stock out,</p>
            <div className="flex items-center space-x-2">
              <p className="px-3 py-0.5 bg-red-700 rounded-full text-white text-sm">Stock Out</p>
              <p>Dec 12 2021 - 12:40PM</p>
            </div>
          </div>
          <button>
            <X/>
          </button>
        </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
      </DropdownMenuContent>
    </DropdownMenu>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">
          <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={200}
            height={200}
            className="w-8 h-8 rounded-full"
          />
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="bg-white text-black dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 shadow-lg py-2 px-4 pr-8">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <LayoutDashboard className="mr-2 h-4 w-4" />
          <span>Dashboard</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Settings className="mr-2 h-4 w-4" />
          <span>Edit Profile</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

      </div>
    </div>
  );
}
