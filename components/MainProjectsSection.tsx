"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Project from "@/public/project.png";

interface stack {
  id: number;
  name: string;
}

const MainProjectsSection = () => {
  const [dataStack, setDataStack] = useState<stack[]>([
    {
      id: 1,
      name: "React.js",
    },
    {
      id: 2,
      name: "Tailwind CSS",
    },
    {
      id: 3,
      name: "Node.js",
    },
    {
      id: 4,
      name: "Socket.io",
    },
    {
      id: 5,
      name: "MongoDB",
    },
    {
      id: 6,
      name: "Heroku",
    },
    {
      id: 7,
      name: "Git",
    },
    {
      id: 8,
      name: "Node Mailer",
    },
    {
      id: 9,
      name: "Express.js",
    },
    {
      id: 10,
      name: "Firebase",
    },
    {
      id: 11,
      name: "Google OAuth",
    },
  ]);

  return (
    <div
      id="main-projects"
      className="flex flex-col justify-center items-center space-y-4 px-6"
    >
      <Button variant={"outline"} className="font-bold text-muted-foreground">
        Main Projects
      </Button>
      <Image
        className="w-fit"
        src={Project}
        width={500}
        height={400}
        alt="Project"
      />
      <p className="text-xl">
        Online Interview Assessment System for Students and Professionals
      </p>
      <div className="flex flex-col items-center space-y-2">
        <h1 className="font-bold">Tech Stack Used</h1>
        <div className="flex flex-row flex-wrap gap-2">
          {dataStack.map((stack) => (
            <Button key={stack.id}>{stack.name}</Button>
          ))}
        </div>
        <p className="text-xl">
          Do you want to learn more about this{" "}
          <small className="font-bold">PRODUCT?</small>
        </p>
        <Button>Book A Call</Button>
      </div>
    </div>
  );
};

export default MainProjectsSection;
