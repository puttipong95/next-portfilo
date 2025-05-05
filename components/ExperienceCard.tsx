import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface experience {
  id: number;
  header: string;
  description: string;
  description2: string;
  content: content;
}

interface content {
  overview: string;
  responsibilities: string[];
  stack: string[];
}

const ExperienceCard = ({
  id,
  header,
  content,
  description,
  description2,
}: experience) => {
  return (
    <div>
      <Card id={String(id)}>
        <CardHeader>
          <CardTitle className="text-xl">{header}</CardTitle>
          <CardDescription>
            <p>{description}</p>
            <p>{description2}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <h1 className="font-bold">Overview</h1>
            <p>{content.overview}</p>
          </div>
          <div>
            <h1 className="font-bold">Responsibilities</h1>
            <p>
              <ul className="list-disc pl-6">
                {content.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </p>
          </div>
          <div>
            <h1 className="font-bold">Technology Stack</h1>
            <p>
              <ul className="list-disc pl-6">
                {content.stack.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceCard;
