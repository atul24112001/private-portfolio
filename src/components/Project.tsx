import { AppleIcon, Github, Link, PlayIcon } from "lucide-react";
import React from "react";
import NextLink from "next/link";

export default function Project({
  title,
  skills,
  github,
  link,
  description,
  ios,
  android,
}: Props) {
  return (
    <div className="bg-secondary py-2 px-2 md:px-4 rounded-md mb-2">
      <div className="flex justify-between items-start gap-2">
        <div className="mb-3 ">
          <h3 className="text-sm md:text-lg font-bold mb-0">{title}</h3>

          <p className="text-xs text-muted-foreground font-mono">
            {description}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <NextLink href={github} target="_blank">
            <Github size={16} />
          </NextLink>
          {link && (
            <NextLink href={link} target="_blank">
              <Link size={16} />
            </NextLink>
          )}
          {ios && (
            <NextLink href={ios} target="_blank">
              <AppleIcon size={16} />
            </NextLink>
          )}
          {android && (
            <NextLink href={android} target="_blank">
              <PlayIcon size={16} />
            </NextLink>
          )}
        </div>
      </div>
      <div className="font-bold text-xs md:text-sm">
        <span className="text-muted-foreground">Skills - </span>{" "}
        {skills.join(",  ")}
      </div>
    </div>
  );
}

type Props = {
  id: string;
  title: string;
  description: string;
  link?: string;
  ios?: string;
  android?: string;
  github: string;
  skills: string[];
};
