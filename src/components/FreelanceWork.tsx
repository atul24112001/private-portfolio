import React from "react";

export default function FreelanceWork({ skills, date, label, link }: Props) {
  return (
    <div className="bg-secondary py-2 px-2 md:px-4 rounded-md mb-2">
      <div className="flex justify-between items-start gap-2">
        <h3 className="text-sm md:text-lg font-bold mb-0">
          <a href={link} target="_blank" className="hover:underline">
            {label}
          </a>
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">{date}</p>
      </div>
      <div className="font-bold text-xs md:text-sm">
        <span className="text-muted-foreground">Skills - </span>{" "}
        {skills.join(",  ")}
      </div>
    </div>
  );
}

type Props = {
  skills: string[];
  date: string;
  label: string;
  link: string;
};
