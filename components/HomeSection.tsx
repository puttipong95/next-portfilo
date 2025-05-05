import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpg";
import { Button } from "./ui/button";
import { GithubIcon, GitlabIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaLine } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Resume from "@/public/resume.png";

const HomeSection = () => {
  return (
    <div id="home" className="">
      <div className="grid md:grid-cols-2 p-6 gap-6">
        <div className="home-content space-y-6">
          <h1 className="text-2xl">Welcome to my Portfolio!</h1>
          <p>
                      Hi, I’m Golf, 29 years old. I’m passionate about learning new
                      technologies and have always been curious about how computers work.
                      While I was studying, I created my own blog to earn extra
                      income—which sparked my interest in web development. Since then,
                      I’ve been deeply engaged in building websites and continuously
                      improving my skills as a developer.
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
                  <Link
                    href={""}
                    className="flex gap-2 items-center"
                    target="_blank"
                  >
                    <Button className="text-2xl p-6 hover:bg-secondary-foreground cursor-pointer">
                      <FaRegFilePdf /> My Resume
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <Image
                    src={Resume}
                    width={400}
                    height={600}
                    alt="Puttipong Resume"
                    placeholder="blur"
                  />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center gap-2 text-2xl">
            <p className="pr-2">Connect with me :</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={"https://github.com/puttipong95"} target="_blank">
                    <GithubIcon />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={"https://gitlab.com/pgmoney1955"} target="_blank">
                    <GitlabIcon />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitLab</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={"https://linkedin.com/in/thaidev-programs-0238971a3"}
                    target="_blank"
                  >
                    <Linkedin />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={"https://line.me/ti/p/nWxCNmIJWa"}
                    target="_blank"
                  >
                    <FaLine />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Line</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="order-first md:order-last home-img">
          <Card className="p-0 overflow-hidden">
            <Image
              className="w-full h-full max-h-[300px] object-cover"
              src={profile}
              width={500}
              height={300}
              alt="Profile"
              placeholder="blur"
              priority
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
