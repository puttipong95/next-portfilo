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
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Project3 from "@/public/project3.png";

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

const ProjectCard = ({
  content,
  projectName,
  git,
  id,
  img,
  stack,
  title,
  visit,
}: project) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div id={projectName}>
      <Card className="pt-0 overflow-hidden h-full" id={String(id)}>
        <CardHeader className="p-0">
          {img.length === 1 ? (
            <div>
              <Image
                src={img[0]}
                className="w-full"
                width={400}
                height={200}
                alt={title}
                placeholder="blur"
              />
            </div>
          ) : (
            <div ref={sliderRef} className="keen-slider">
              {img.map((dt, i) => (
                <div className={`keen-slider__slide number-slide` + i}>
                  <Image
                    src={dt}
                    className="w-full"
                    width={400}
                    height={200}
                    alt={title}
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>
          )}

          <CardTitle className="pl-6 font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
          <p className="pt-2 font-bold">Stack</p>
          <p>{stack}</p>
        </CardContent>
        {(visit || git) && (
          <CardFooter className="gap-2">
            <Link href={visit} className="w-full" target="_blank">
              <Button
                className="w-full cursor-pointer hover:bg-secondary hover:text-primary"
                variant={"outline"}
              >
                <Eye /> Visit
              </Button>
            </Link>
            {git && (
              <Link href={git} className="w-full justify-center flex">
                <Button className="w-full cursor-pointer hover:bg-secondary hover:text-primary">
                  <Gitlab /> Git
                </Button>
              </Link>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ProjectCard;
