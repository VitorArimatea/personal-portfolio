import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  highlight?: string;
  className?: string;
}

export default function Title({
  children,
  highlight,
  className = "",
}: TitleProps) {
  return (
    <h1
      className={`heading bg-gradient-to-b from-neutral-600 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent ${className}`}
    >
      {children}{" "}
      {highlight && (
        <span className="bg-clip-text text-transparent bg-gradient-to-b dark:from-blue-200 dark:to-blue-400 from-blue-600 to-blue-900">
          {highlight}
        </span>
      )}
    </h1>
  );
}
