"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import ExperienceCard from "./ExperienceCard";

interface experience {
  id: number;
  header: string;
  description: string;
  description2: string;
  content: string;
}

const ExperienceSection = () => {
  const [data, setData] = useState<experience[]>([
    {
      id: 1,
      header: "Full Stack Developer Part-Time (Remote) - MEVN",
      description: "3rd May 2023 - 30th Nov 2023",
      description2: `Dr. Manisha's Yoga Institute`,
      content: `Worked remotely as a full stack developer, Stacks used: Vue.js
              (frontend), MongoDB, Node.js, Express.js, Firebase for blogging A
              fully Authenticated Admin Panel is also created to perform CRUD
              Operations Using Tailwind CSS to design the whole website Worked
              independently to create engaging web content and reusable
              components`,
    },
    {
      id: 2,
      header: `Software Developer Trainee Full-Time (On-Site) - Salesforce`,
      description: `1st Aug 2023 - 30th Nov 2023`,
      description2: `Extentia Information Technology`,
      content: `Worked as a Software Developer Trainee. Technologies I got to learn over here is Salesforce. Along with salesforce, I worked on Programming Language like Apex, Aura and JavaScript.`,
    },
    {
      id: 3,
      header: `Front End Developer Contract (Remote) - Next.js`,
      description: `1st Nov 2023 - 31th Dec 2023`,
      description2: `Care-9 Fertility Clinic/Hospital`,
      content: `Worked remotely on the project, designed the whole using Tailwind CSS. Developed Front-end using latest technologies which is basically a JavaScript Library React.js whose expanded version is NEXT.JS 14 along with basic TypeScript.`,
    },
    {
      id: 4,
      header: `Full Stack Developer - MERN`,
      description: `24th Dec 2021 - 30th Nov 2024`,
      description2: `Anandlok Ayurveda & Panchakarma Hospital`,
      content: `Designed and developed a fully functional website using the latest technologies such as Next.js and React.js. Worked independently to create engaging web content and reusable components. Contributed to the development of the website and helped to improve the performance of the website`,
    },
    {
      id: 5,
      header: `React.js Developer Full-Time (On-Site)`,
      description: `1st Jan 2024 - 30th Nov 2024`,
      description2: `Octane Apps`,
      content: `Working in one of the famous and trending JavaScript Library React.js along with it's Framework Next.js. Developing new Projects, working on front-end development and, maintaining and managing old projects.`,
    },
  ]);

  return (
    <div id="experience" className="space-y-6 flex flex-col items-center">
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
          <ExperienceCard
            key={exp.id}
            content={exp.content}
            description={exp.description}
            description2={exp.description2}
            header={exp.header}
            id={exp.id}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
