import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from "class-variance-authority";

const blogButtonVariants = cva(
  "px-6 py-2 inline-flex items-center shadow-md justify-center gap-2 whitespace-nowrap rounded-full text-xs decoration-transparent md:text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "text-white bg-[#f55b31] hover:bg-[#c35637]",
        secondary: "text-white bg-black hover:bg-blue-700",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BlogButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof blogButtonVariants> {
      buttonText: string;
      buttonLink: string;
      buttonVariant?: "primary" | "secondary";
    }

const BlogButton = React.forwardRef<HTMLAnchorElement, BlogButtonProps>(({ 
  buttonText,
  buttonLink,
  buttonVariant = "primary",
  className,
  ...props 
}, ref) => {
  return (
    <Link
      href={buttonLink}
      ref={ref}
      className={cn(blogButtonVariants({ variant: buttonVariant, className }))}
      {...props}
    >
      {buttonText}
    </Link>
  );
});

BlogButton.displayName = "BlogButton";

export { BlogButton, blogButtonVariants };
