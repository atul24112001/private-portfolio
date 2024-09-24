import React from "react";

export default function WorkExperience({
  date,
  companyName,
  designation,
  location,
  skills,
  companyLink,
}: Props) {
  return (
    <div className="bg-secondary py-2 px-2 md:px-4 rounded-md mb-2">
      <div className="flex justify-between items-start gap-2">
        <div className="mb-3">
          <h3 className="text-sm md:text-lg font-bold mb-0">{designation}</h3>
          <h4 className="text-xs text-muted-foreground font-mono">
            <a href={companyLink}>{companyName}</a>, {location}
          </h4>
        </div>
        <div className="text-xs md:text-sm text-muted-foreground mt-1">
          {date}
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
  date: string;
  designation: string;
  companyName: string;
  location: string;
  skills: string[];
  companyLink?: string;
};
