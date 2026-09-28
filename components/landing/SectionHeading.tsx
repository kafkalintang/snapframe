import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  description,
  light = false,
  align = "center",
}: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2
        className={`font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-brand-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-brand-200" : "text-brand-900/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
