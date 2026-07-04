import { forwardRef, Children, cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactElement } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
      {
        "gradient-bg text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]":
          variant === "primary",
        "bg-white text-text border border-gray/60 shadow-sm hover:border-primary/30 hover:shadow-md hover:shadow-primary/10":
          variant === "secondary",
        "text-text hover:text-primary hover:bg-primary/5": variant === "ghost",
        "border-2 border-primary text-primary bg-transparent hover:bg-primary/5":
          variant === "outline",
      },
      {
        "h-9 px-4 text-sm gap-2": size === "sm",
        "h-11 px-6 text-sm gap-2.5": size === "md",
        "py-4 px-10 text-base gap-3": size === "lg",
      },
      className
    );

    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement<Record<string, unknown>>, {
        className: cn(classes, ((children as ReactElement).props as Record<string, unknown>).className as string | undefined),
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
