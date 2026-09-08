import { forwardRef, cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactElement } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30":
          variant === "primary",
        "bg-white text-text border border-gray shadow-sm hover:border-primary/30":
          variant === "secondary",
        "text-text hover:text-primary hover:bg-primary/5": variant === "ghost",
        "border-2 border-primary/40 text-primary hover:border-primary hover:bg-primary/5":
          variant === "outline",
      },
      {
        "h-10 px-4 text-sm gap-2": size === "sm",
        "h-12 px-6 text-base gap-2.5": size === "md",
        "px-8 py-4 text-lg gap-3 rounded-2xl": size === "lg",
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
