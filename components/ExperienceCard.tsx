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
  content: string;
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
          <CardTitle>{header}</CardTitle>
          <CardDescription>
            <p>{description}</p>
            <p>{description2}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceCard;
