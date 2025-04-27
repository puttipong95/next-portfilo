import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpg";
import { Button } from "./ui/button";
import { GithubIcon, GitlabIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaLine } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import {
  Card,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Resume from '@/public/resume.png'

const HomeSection = () => {
  return (
    <div id="home" className="">
      <div className="grid grid-cols-2 p-6 gap-6">
        <div className="home-content space-y-6">
          <h1 className="text-2xl">Welcome to my Portfolio!</h1>
          <p>
            I am a front-end developer with 3 years of proven experience in the
            field. I am skilled in Search Engine Optimization, Next.js,
            React.js, Tailwind CSS, and JavaScript. I am passionate about
            creating interactive and beautiful user interfaces, along with the
            required functionalities on the front end.One of my favourite
            technologies to work with is React.js, particularly within the MERN
            / MEVN stack. My Experties include Next.js 14✨ & React.js for
            high-scale application development.
          </p>
          <div className="flex gap-2">
            <Link href={"#contact"} className="flex gap-2 items-center">
              <Button className="text-2xl p-6 hover:bg-secondary-foreground cursor-pointer">
                <CiStar />
                Hire me
              </Button>
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={""} className="flex gap-2 items-center">
                    <Button className="text-2xl p-6 hover:bg-secondary-foreground cursor-pointer">
                      <FaRegFilePdf /> My Resume
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <Image src={Resume} width={400} height={600} alt="Puttipong Resume" />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <p className="pr-2">Connect with me :</p>
            <Link href={""}>
              <GithubIcon />
            </Link>
            <Link href={""}>
              <GitlabIcon />
            </Link>
            <Link href={""}>
              <Linkedin />
            </Link>
            <Link href={""}>
              <FaLine />
            </Link>
          </div>
        </div>
        <div className="home-img">
          <Card className="p-0 overflow-hidden">
            <Image
              className="w-full h-full max-h-[300px] object-cover"
              src={profile}
              width={500}
              height={300}
              alt="Profile"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
