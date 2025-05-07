"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import ExperienceCard from "./ExperienceCard";
import Link from "next/link";

interface experience {
  id: number;
  header: string;
  description: string;
  description2: string;
  content: content;
  projectName: string;
}

interface content {
  overview: string;
  responsibilities: string[];
  stack: string[];
}

const ExperienceSection = () => {
  const [data, setData] = useState<experience[]>([
    {
      id: 1,
      header: "Full Stack Programmer (Remote)",
      description: "July 1, 2023 - Now",
      description2: `NextGene – Online Game Services`,
      content: {
        overview: `Worked remotely as a full-stack developer responsible for building, customizing, and maintaining over 40 online game service websites for clients. Each website was based on a core template but could be fully customized based on client needs or internal team requirements.`,
        responsibilities: [
          "Developed and maintained both client-side and admin-side applications using modern front-end and back-end technologies.",
          "Built scalable, reusable features for different sites, including UI/UX components, backend APIs, and administrative dashboards.",
          "Handled bug fixes, feature requests, and performance tuning based on client feedback and usage analytics.",
          "Managed infrastructure operations, including deploying new websites, scaling resources, and monitoring systems with thousands of daily users.",
          "Worked closely with team members to ensure smooth CI/CD pipelines and streamlined DevOps processes.",
        ],
        stack: [
          "Client Front-End: Angular, Bootstrap",
          "Admin Front-End: Vue.js, Tailwind CSS",
          "Back-End: NestJS, MongoDB",
          "Infrastructure & DevOps: Rancher, Docker, CI/CD",
        ],
      },
      projectName: "Online Game Services",
    },
    {
      id: 2,
      header: "Full Stack Programmer (Remote)",
      description: "July 1, 2022 - June 30, 2023",
      description2: `Technologies (Thailand) Limited – PSP Internal Project`,
      content: {
        overview: `Working as a contract developer for SCGC, collaborating closely with internal teams via Microsoft Teams to build and maintain an internal web application called PSP (Production Scheduling Platform). This tool is used to manage and streamline product manufacturing plans within the organization.`,
        responsibilities: [
          "Developed and maintained the front-end interface, ensuring responsive, user-friendly UI for internal stakeholders.",
          "Implemented and supported back-end services and logic to manage production data efficiently.",
          "Collaborated with cross-functional teams to refine user requirements and deliver features on time.",
          "Maintained code quality, conducted debugging, and resolved production issues when needed.",
        ],
        stack: [
          "Front-End: React.js, Tailwind CSS",
          "Back-End: Node.js, Entity Framework, SQL Server",
        ],
      },
      projectName: "PSP Internal Project",
    },
    {
      id: 3,
      header: "Full Stack Programmer (Remote)",
      description: "June 15, 2021 - May 31, 2022",
      description2: `NextGene – Online Game Services`,
      content: {
        overview: `Worked remotely as a full-stack developer to develop and maintain customized websites for an online game service business. Clients were able to purchase a pre-built website template, which could then be customized further according to their specific branding or functional requirements.`,
        responsibilities: [
          "Developed and maintained both front-end and back-end systems for client-facing and admin-facing web applications.",
          "Implemented custom features based on client feedback and internal team needs.",
          "Ensured websites were scalable, secure, and easy to update—especially important for platforms with high user activity.",
        ],
        stack: [
          "Client Front-End: Angular, Bootstrap",
          "Admin Front-End: Vue.js, Tailwind CSS",
          "Back-End: NestJS, MongoDB",
        ],
      },
      projectName: "Online Game Services",
    },
    {
      id: 4,
      header: "Front-End Programmer (Onsite)",
      description: "February 15, 2020 - May 31, 2021",
      description2: `Wizard Software Solutions co. ltd – Software Development Company`,
      content: {
        overview: `Worked as an onsite developer in a company specializing in software solutions for both government and private sector clients. Participated in the development of several web applications, including a project for the Department of Public Works and Town & Country Planning and a hotel room reservation system.`,
        responsibilities: [
          "Developed and maintained the front-end of multiple web applications using modern UI frameworks.",
          "Collaborated with designers and back-end developers to deliver responsive and user-friendly interfaces.",
          "Provided on-site training and software usage guidance to end-users in various organizations, ensuring smooth adoption and minimal technical issues.",
        ],
        stack: ["Front-End: Angular, Tailwind CSS, Bootstrap"],
      },
      projectName: "Software Development Company",
    },
    {
      id: 5,
      header: "Full Stack Programmer (Remote)",
      description: "July 1, 2019 - January 31, 2020",
      description2: `Freelance – E-commerce & Content-Based Websites`,
      content: {
        overview: `Worked independently as a full stack freelance developer on multiple web projects, including: 1. An e-commerce website for a denim product business 2. A series of content-based blogger websites offering free access to Japanese movies, PC games, and software downloads
Each project involved full-cycle development, from initial planning and implementation to deployment, content management, and performance optimization.`,
        responsibilities: [
          "Designed, developed, and deployed a complete e-commerce website using Laravel.",
          "Integrated core features such as product catalog, shopping cart, and order management system.",
          "Maintained ongoing communication with the client to deliver updates and implement revisions.",
          "Built multiple blog-style websites: Free Japanese movie streaming, PC game download service, Software download service",
          "Developed clean, mobile-responsive UI and SEO-optimized layouts",
          "Implemented content categorization, embedded video players, and download links",
          "Wrote post content, optimized images, and managed performance and analytics",
          "Handled hosting, domain management, and site maintenance",
        ],
        stack: [
          "Backend / Full Stack: Laravel (PHP Framework)",
          "Frontend: Blade (Laravel), HTML, CSS, JavaScript",
          "Content Management: Markdown / WordPress (if applicable)",
          "Tools: Embedded video player, Google Analytics, SEO tools, shared hosting",
        ],
      },
      projectName: "Games PC Download Blog",
    },
  ]);

  return (
    <div id="experience" className="space-y-6 flex flex-col items-center px-6">
      <Button variant={"outline"} className="font-bold text-muted-foreground">
        Experience
      </Button>

      {data.map((exp) => (
        <div className="experience-content flex gap-2 max-w-[600px]">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-primary p-2 rounded-full text-white h-fit">
              <Check />
            </div>
            <div className="line w-0.5 bg-primary h-full"></div>
          </div>
          <Link href={`#` + exp.projectName}>
            <ExperienceCard
              key={exp.id}
              content={exp.content}
              description={exp.description}
              description2={exp.description2}
              header={exp.header}
              id={exp.id}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
