import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  container?: boolean;
  background?: "white" | "gray" | "gradient";
}

export function Section({
  className,
  container = true,
  background = "white",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        {
          "bg-white": background === "white",
          "bg-background": background === "gray",
          "gradient-bg": background === "gradient",
        },
        className
      )}
      {...props}
    >
      {container ? (
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-20">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text/80 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
