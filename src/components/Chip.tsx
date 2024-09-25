import React, { PropsWithChildren } from "react";

export default function Chip({ children }: PropsWithChildren) {
  return (
    <a
      className="bg-slate-100 text-background px-2 py-1 text-xs hover:text-white hover:bg-blue-400 font-semibold rounded-sm"
      href={`https://www.google.com/search?q=what+is+${children}`}
      target="_blank"
    >
      {children}
    </a>
  );
}
