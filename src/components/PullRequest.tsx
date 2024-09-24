import { Target } from "lucide-react";
import React from "react";

export default function PullRequest({
  link,
  title,
  addition,
  subtraction,
}: Props) {
  return (
    <div className="bg-secondary py-2 px-2 md:px-4 rounded-md mb-2  flex justify-between items-center">
      <div className="">
        <a
          target="_blank"
          className="flex items-center gap-2 hover:underline font-bold text-sm"
          href={link}
        >
          <Target width={12} />

          {title}
        </a>
      </div>
      <div className="flex text-sm">
        <span className="text-green-500">{addition}</span>&nbsp;&nbsp;
        <span className="text-red-500">{subtraction}</span>
      </div>
    </div>
  );
}

type Props = {
  id: string;
  title: string;
  link: string;
  addition: string;
  subtraction: string;
};
