import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SafeAreaProps = {
  children: ReactNode;
  className?: string;
};

export const SafeArea = ({ children, className }: SafeAreaProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-3", className)}>
      {children}
    </div>
  );
};
