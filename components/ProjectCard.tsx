import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Gitlab } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface project {
  id: number;
  img: any;
  title: string;
  content: string;
  stack: string;
  visit: string;
  git: string;
}

const ProjectCard = ({
  content,
  git,
  id,
  img,
  stack,
  title,
  visit,
}: project) => {
  return (
    <div>
      <Card className="pt-0 overflow-hidden h-full" id={String(id)}>
        <CardHeader className="p-0">
          <Image
            src={img}
            className="w-full"
            width={400}
            height={200}
            alt={title}
          />
          <CardTitle className="pl-6">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
          <p className="text-center pt-1">Stack</p>
          <p>{stack}</p>
        </CardContent>
        <CardFooter className="gap-2">
          <Link href={visit} className="w-full">
            <Button className="w-full cursor-pointer" variant={"outline"}>
              <Eye /> Visit
            </Button>
          </Link>
          <Link href={git} className="w-full justify-center flex">
            <Button className="w-full cursor-pointer hover:bg-secondary hover:text-primary">
              <Gitlab /> Git
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
