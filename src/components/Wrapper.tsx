import React, { PropsWithChildren } from "react";

export default function Wrapper({
  children,
  heading,
}: PropsWithChildren<Props>) {
  return (
    <div className="mt-6">
      <h1 className="text-xl font-bold mb-3">{heading}</h1>
      {children}
    </div>
  );
}

type Props = {
  heading: string;
};
