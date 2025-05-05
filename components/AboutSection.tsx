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
import { IoLogoHtml5 } from "react-icons/io";
import { MdOutlineCss } from "react-icons/md";
import { TbSql } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
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
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-[100px] gap-6">
        <div className="about-content space-y-6 w-full">
          <Button
            variant={"outline"}
            className="font-bold text-muted-foreground"
          >
            About
          </Button>
          <h1 className="text-2xl">Hello! My name is Puttipong Seangpor</h1>
          <p>
            I am a full-stack developer with 4 years of experience building and
            maintaining scalable, end-to-end web applications. I specialize in
            modern TypeSctipt JavaScript technologies—using Angular, React.js,
            Vue.js, and Next.js for creating dynamic front-end experiences, and
            Node.js and NestJS for developing robust and well-structured
            back-end systems.
          </p>
          <p>
            I have hands-on experience managing and maintaining over 40 websites
            simultaneously, ensuring performance, uptime, and scalability across
            multiple environments. This has equipped me with strong skills in
            deployment pipelines, server management, and application monitoring
            in real-world scenarios.
          </p>
          <p>
            My expertise includes:
            <ul className="list-disc pl-6">
              <li>Full-stack development with MERN and MEAN stacks</li>
              <li>Scalable back-end APIs using NestJS and Node.js</li>
              <li>
                High-performance front-end apps using Next.js 14, Tailwind CSS,
                and modern frameworks
              </li>
              <li>
                Docker, CI/CD, and Rancher for deployment and container
                orchestration
              </li>
              <li>
                Implementation of SEO best practices for improved search
                visibility
              </li>
            </ul>
          </p>
          <p>
            I'm passionate about delivering high-quality code, solving complex
            problems, and continuously learning new technologies to stay ahead
            in the fast-paced world of web development.
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
                  <IoLogoHtml5 />
                </TooltipTrigger>
                <TooltipContent>
                  <p>HTML</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <MdOutlineCss />
                </TooltipTrigger>
                <TooltipContent>
                  <p>CSS</p>
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
                  <TbSql />
                </TooltipTrigger>
                <TooltipContent>
                  <p>SQL</p>
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
                  <SiNestjs />
                </TooltipTrigger>
                <TooltipContent>
                  <p>NestJS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <BiLogoTailwindCss />
                </TooltipTrigger>
                <TooltipContent>
                  <p>TailwindCss</p>
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
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <FaGit />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Git</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <FaDocker />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Docker</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SiMongodb />
                </TooltipTrigger>
                <TooltipContent>
                  <p>MongoDB</p>
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
