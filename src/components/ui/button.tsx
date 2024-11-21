import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "py-2 px-4 rounded-full text-white bg-blue-700 hover:bg-blue-600",
        destructive: "bg-red-600 text-white hover:bg-destructive/90",
        outline: "border border-gray-600",
        underline: "mb-2 underline underline-offset-[10px] decoration-2 decoration-gray-800",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
      disableIcon?: boolean;
      buttonType?: 'internal' | 'external' | 'fileDownload';
    }

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ children, className, variant, disableIcon, buttonType, size, ...props }, ref) => {

    if (buttonType === 'internal') return (
      <Link
        href="/"
        ref={ref}
        className={cn('group', buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children} {!disableIcon && (<ButtonIcon />)}
      </Link>
    )

    if (buttonType === 'external') return (
      <a 
        href="https://sanity.io"
        rel="noopener noreferrer" target="_blank"
        className={cn('group', buttonVariants({ variant, size, className }))}
      >
        {children} {!disableIcon && (<ButtonIcon />)}
      </a>
    )

    if (buttonType === 'fileDownload') return (
      <a 
        href=""
        download
        className={cn('group', buttonVariants({ variant, size, className }))}
      >
        {children} {!disableIcon && (<ButtonIcon />)}
      </a>
    )
    
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

function ButtonIcon() {
  return <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-0.5" />
}