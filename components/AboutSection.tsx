import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import About from "@/public/about.webp";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaVuejs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Card } from "./ui/card";

const AboutSection = () => {
  return (
    <div id="about">
      <div className="grid md:grid-cols-2 px-6 md:px-[100px] gap-6">
        <div className="about-content space-y-6">
          <Button
            variant={"outline"}
            className="font-bold text-muted-foreground"
          >
            About
          </Button>
          <h1 className="text-2xl">Hello! My name is Yash Kapure</h1>
          <p>
            I am a self-taught programmer with a passion for learning and
            exploring new technologies. I have a strong background in FrontEnd
            Development and improving full-stack development and am always eager
            to expand my skillset and take on new challenges. In my free time, I
            enjoy sipping on a cup of tea (or coffee) and watching a game of
            cricket. As a dedicated and driven individual, I am constantly
            seeking out opportunities to grow and improve as a programmer.
          </p>
          <p> Some of the Stack I know</p>
          <div className="flex gap-2 text-2xl mt-[-16px]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SiTypescript />
                </TooltipTrigger>
                <TooltipContent>
                  <p>TypeScript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <IoLogoJavascript />
                </TooltipTrigger>
                <TooltipContent>
                  <p>JavaScript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <FaPhp />
                </TooltipTrigger>
                <TooltipContent>
                  <p>PHP</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <TbBrandCSharp />
                </TooltipTrigger>
                <TooltipContent>
                  <p>C#</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <RiNextjsLine />
                </TooltipTrigger>
                <TooltipContent>
                  <p>NextJS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <FaReact />
                </TooltipTrigger>
                <TooltipContent>
                  <p>React</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <FaAngular />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Angular</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <FaVuejs />
                </TooltipTrigger>
                <TooltipContent>
                  <p>VueJS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <FaLaravel />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Laravel</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="about-img">
          <Card className="p-0 overflow-hidden h-full w-fit min-h-[500px]">
            <Image
              className="w-full h-full max-w-[400px] object-cover"
              src={About}
              width={400}
              height={700}
              alt="About"
              placeholder="blur"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
