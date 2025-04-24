import Image from "next/image";
import React from "react";
import profile from "@/public/profile.jpg";
import { Button } from "./ui/button";
import { GithubIcon, GitlabIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import { FaLine } from "react-icons/fa6";

const HomeSection = () => {
  return (
    <div id="home" className="">
      <div className="grid grid-cols-2">
        <div className="home-content space-y-6 p-6">
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
            <Button className="text-2xl p-6">
              <Link href={""}>Hire me</Link>
            </Button>
            <Button className="text-2xl p-6">
              <Link href={""}>My Resume</Link>
            </Button>
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
          <Image src={profile} width={500} height={100} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
