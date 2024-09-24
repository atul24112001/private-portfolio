import { TooltipProvider } from "@radix-ui/react-tooltip";
import React, { PropsWithChildren } from "react";

export default function Provider({ children }: PropsWithChildren) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
