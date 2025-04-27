"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-between p-6 bg-gradient-to-b from-primary via-secondary to-primary-500">
      <div className="text-3xl font-bold">Puttipong Seangpor</div>
      <ul className="flex gap-4 text-xl">
        <li>
          <Link
            href="#home"
            className="underline underline-offset-6 hover:text-primary"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="underline underline-offset-6 hover:text-primary"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="underline underline-offset-6 hover:text-primary"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#experience"
            className="underline underline-offset-6 hover:text-primary"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="underline underline-offset-6 hover:text-primary"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="">
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
      </div>
    </div>
  );
};

export default NavBar;
