"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Project1 from "@/public/project1.png";
import Project2 from "@/public/project2.png";
import Project3 from "@/public/project3.png";
import Project4 from "@/public/project4.png";
import Project5 from "@/public/project5.png";
import ProjectCard from "./ProjectCard";

interface project {
  id: number;
  img: any[];
  title: string;
  content: string;
  stack: string;
  visit: string;
  git: string;
}

const ProjectsSection = () => {
  const [data, setData] = useState<project[]>([
    {
      id: 1,
      title: "Here are some of My Projects",
      content: `A fully Functional MERN Stack Web Application. Having responsive
              behaviour, smooth touch UI with API Integration. With Admin and
              Petitioner Panel, along with new features such as Login in with QR
              Code, Signing In, Setting Global Threshold.`,
      img: [Project1, Project5, Project3],
      stack: "React.js Tailwind CSS Node.js Express MongoDB",
      visit: "",
      git: "",
    },
    {
      id: 2,
      title: "The Kolorado Paints",
      content: `A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project is for Artistic Content.`,
      img: [Project2],
      stack: `Next.js CSS3 React.js MUI SEO`,
      visit: "",
      git: "",
    },
    {
      id: 3,
      title: "TechnoKraft",
      content: `A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project is for Educational Content Provider`,
      img: [Project3, Project2],
      stack: `Next.js CSS3 React.js MUI SEO`,
      visit: "",
      git: "",
    },
    {
      id: 4,
      title: "BEST GST Course",
      content: `A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project also contains Payment Gateway Integration using Easebuzz. This is a GST Course Selling website.`,
      img: [Project4, Project1],
      stack: "Payment Gateway Next.js Tailwind CSS",
      visit: "",
      git: "",
    },
    {
      id: 5,
      title: "Affinix Digital",
      content: `A fully Functional Next.js Based Frontend along with MERN Dashboard. Having responsive behaviour, smooth touch UI with API Integration. This project is for Best Digital Marketing Agency`,
      img: [Project5],
      stack: "Next.js Tailwind CSS React.js MUI SEO",
      visit: "",
      git: "",
    },
  ]);

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center space-y-4 max px-6"
    >
      <Button variant={"outline"} className="font-bold text-muted-foreground">
        Projects
      </Button>
      <h1 className="text-2xl"></h1>
      <div className="line w-[100px] h-0.5 bg-primary"></div>
      <div className="project-content max-w-[800px] grid grid-cols-1 gap-4">
        {data.map((dt) => (
          <ProjectCard
            key={dt.id}
            content={dt.content}
            git={dt.git}
            id={dt.id}
            img={dt.img}
            stack={dt.stack}
            title={dt.title}
            visit={dt.visit}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
