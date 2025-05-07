"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Project11 from "@/public/pro11.png";
import Project12 from "@/public/pro12.png";
import Project13 from "@/public/pro13.png";
import Project21 from "@/public/pro21.png";
import Project31 from "@/public/pro31.png";
import Project32 from "@/public/pro32.png";
import Project41 from "@/public/pro41.png";
import Project42 from "@/public/pro42.png";
import Project43 from "@/public/pro43.png";
import Project51 from "@/public/pro51.png";
import Project52 from "@/public/pro52.png";
import Project53 from "@/public/pro53.png";
import Project61 from "@/public/pro61.png";
import Project62 from "@/public/pro62.png";
import Project63 from "@/public/pro63.png";
import ProjectCard from "./ProjectCard";

interface project {
  id: number;
  projectName: string;
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
      projectName: "Online Game Services",
      title: "Online Game Services",
      content: `Developed a customizable online game service platform for B2B clients. The platform integrates third-party game services from international providers, allowing clients to configure themes, features, and user interfaces according to their branding and requirements.`,
      img: [Project11, Project12, Project13],
      stack:
        "Angular, Vue.js, Nest.js, Socket.io, Tailwind CSS, Rancher, CICD, Docker, MySQL, MongoDB",
      visit: "https://akoffice1688.net/",
      git: "",
    },
    {
      id: 2,
      projectName: "PSP Internal Project",
      title: "PSP Internal Project",
      content: `Developed an internal web application for SCGC (a chemical and industrial manufacturing company) to assist in production planning and management. The system helps staff and planners create, track, and manage production schedules efficiently within the organization.`,
      img: [Project21],
      stack: `React.js, Tailwind CSS, Node.js, Entity Framework, SQL Server`,
      visit: "",
      git: "",
    },
    {
      id: 4,
      projectName: "Software Development Company",
      title: `Department of Public Works and Town & Country Planning`,
      content: `Developed the frontend of the official website for Thailand’s Department of Public Works and Town & Country Planning. The website provides public access to news, regulations, maps, and digital services related to urban planning and infrastructure.`,
      img: [Project31, Project32],
      stack: "Angular, Tailwind CSS, Bootstrap",
      visit: "https://www.dpt.go.th/th",
      git: "",
    },
    {
      id: 5,
      projectName: "Games PC Download Blog",
      title: "Games PC Download Blog",
      content: `Created and managed a blog-style website that provides free downloadable PC. The website includes categorized game listings, game descriptions, screenshots, and download links, aiming to offer a user-friendly experience for casual gamers.`,
      img: [Project41, Project42, Project43],
      stack: "Blogger, SEO",
      visit: "https://downloadgamecomfree.blogspot.com/",
      git: "",
    },
    {
      id: 6,
      projectName: "Free Programs Download Blog",
      title: "Free Programs Download Blog",
      content: `Developed and maintained a blog-style website offering free downloads of computer software, including utilities, productivity tools, and system applications. The site is designed for general users looking for safe and accessible software downloads with clear instructions and reviews.`,
      img: [Project51, Project52, Project53],
      stack: "Blogger, SEO",
      visit: "https://programfree48.blogspot.com/",
      git: "",
    },
    {
      id: 7,
      projectName: "Japan Movies Free Blog",
      title: "Japan Movies Free Blog",
      content: `Created and managed a blog-style website that provides free access to Japanese movies for streaming. The platform includes categorized movie listings, embedded video players, descriptions, trailers, and tags to enhance user experience and navigation.`,
      img: [Project61, Project62, Project63],
      stack: "Blogger, SEO",
      visit: "https://donangjapan.blogspot.com/",
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
            projectName={dt.projectName}
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
