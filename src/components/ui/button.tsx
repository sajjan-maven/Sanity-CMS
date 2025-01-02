import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "px-4 md:px-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs md:text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "text-white bg-blue-700 hover:bg-blue-600",
        secondary: "text-white bg-black hover:bg-blue-700",
        tertiary: "text-black hover:text-white border border-gray-300/80 hover:border-blue-500 bg-gray-200 hover:bg-blue-600",
        outline: "text-black border border-gray-300/80 hover:border-black hover:bg-black backdrop-blur hover:text-white",
        underline: "xl:px-0 mb-2 underline underline-offset-[10px] decoration-[1.5px] decoration-gray-800",
      },
      size: {
        default: "h-9 md:h-10",
        sm: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
      disableIcon?: boolean;
      pageReference?: string;
      externalUrl?: string;
      buttonType?: 'internal' | 'external' | 'fileDownload';
    }

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(({ 
  children, 
  className, 
  variant, 
  disableIcon, 
  pageReference, 
  externalUrl, 
  buttonType, 
  size, 
  ...props 
}, ref) => {

    if (buttonType === 'internal') return (
      <Link
        href={`/${pageReference}`}
        ref={ref}
        className={cn('group', buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children} {!disableIcon && (<ButtonIcon />)}
      </Link>
    )

    if (buttonType === 'external') return (
      <a 
        href={`${externalUrl}`}
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

Button.displayName = "Button";

export { Button, buttonVariants };

function ButtonIcon() {
  return <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-0.5" />
}