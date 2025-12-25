import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl shadow-md hover:shadow-lg",
        outline: "border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-accent/50 hover:border-accent rounded-xl shadow-sm hover:shadow-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl shadow-sm hover:shadow-md",
        ghost: "hover:bg-accent/50 hover:text-accent-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium gradient button
        gradient: "bg-gradient-to-r from-[hsl(var(--bubly-sky))] via-[hsl(var(--bubly-violet))] to-[hsl(var(--bubly-pink))] text-white rounded-2xl shadow-lg shadow-[hsl(var(--bubly-violet))]/25 hover:shadow-xl hover:shadow-[hsl(var(--bubly-violet))]/30 hover:-translate-y-0.5 hover:brightness-110",
        // Glass button
        glass: "backdrop-blur-xl bg-white/10 border border-white/20 text-foreground rounded-2xl shadow-lg hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5",
        // Soft premium button
        soft: "bg-gradient-to-br from-white/80 to-white/60 dark:from-white/10 dark:to-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 text-foreground rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:border-white/50",
        // Glow button
        glow: "bg-gradient-to-r from-[hsl(var(--bubly-violet))] to-[hsl(var(--bubly-pink))] text-white rounded-2xl shadow-[0_0_20px_hsl(var(--bubly-violet)/0.4)] hover:shadow-[0_0_30px_hsl(var(--bubly-violet)/0.5)] hover:-translate-y-0.5",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
