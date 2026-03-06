import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: "white" | "gray" | "blue";
}

const bgStyles = {
  white: "bg-white",
  gray: "bg-gray-50",
  blue: "bg-primary-50",
};

export default function SectionWrapper({
  id,
  children,
  className = "",
  bg = "white",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgStyles[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
