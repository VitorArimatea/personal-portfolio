import { ElementType, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  highlight?: string;
  className?: string;
  as?: ElementType;
}

export default function Title({
  children,
  highlight,
  className = "",
  as: Tag = "h1",
}: TitleProps) {
  return (
    <Tag
      className={`heading bg-gradient-to-b from-[#0e0e0f] to-[#0d0d0d] dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent ${className}`}
    >
      {children}{" "}
      {highlight && (
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#102f80] to-[#060A1B] dark:from-blue-200 dark:to-blue-400">
          {highlight}
        </span>
      )}
    </Tag>
  );
}
