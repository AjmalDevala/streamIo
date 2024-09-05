"use client";

import React, { useState } from "react";
import Link from "next/link";
//UI shadcn
import { MenuIcon, XIcon } from "lucide-react"; // Assuming you're using "lucide-react" for icons
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

//Redux

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { decrement, increment } from "@/app/lib/slices/exampleSlice";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.example.value);
  const user = useSelector((state: RootState) => state.user);

  return (
    <nav className="dark:bg-gray-800 bg-white border sticky top-0 z-10    ">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-9">
        <div className="relative flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="dark:text-white font-bold text-lg text-black flex gap-2"
              >
                <img src="fav.ico" alt="favicon" width={30} height={20} />
                Admin Dashboard
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button
                className="p-2  text-slate-50 bg-slate-950 mr-2"
                onClick={() => dispatch(increment())}
              >
                +
              </button>
              <h1 className="text-center mr-2 text-white bg-black p-2">
                Value: {value}
              </h1>
              <button
                className="p-2  bg-slate-50 text-slate-950 mr-2"
                onClick={() => dispatch(decrement())}
                disabled={value <= 0} // Disable button if value is 0 or less
                style={{ cursor: value <= 0 ? "not-allowed" : "pointer" }}
              >
                -
              </button>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <img
                        width={32}
                        height={32}
                        src={
                          user?.image
                            ? user.image
                            : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        }
                        alt="My Profile"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent>
                  <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          user?.image
                            ? user.image
                            : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        }
                        className="size-16 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {user.name ? user.name : "Claire Mac"}
                        </h3>

                        <div className="flow-root">
                          <ul className="-m-1 flex flex-wrap">
                            <li className="p-1 leading-none">
                              {user.email ? user.email : "Mac.com"}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </Link>
          <Link
            href="/users"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
