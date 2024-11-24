import React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva(
  'font-medium text-gray-900 tracking-tight leading-normal',
  {
    variants: {
      size: {
        h1: 'text-4xl md:text-7xl',
        h2: 'text-3xl md:text-[2.6rem]',
        h3: 'text-2xl md:text-3xl',
        h4: 'text-2xl md:text-3xl',
        h5: 'text-2xl',
        h6: 'text-xl',
      },
    },
    defaultVariants: {
      size: 'h1',
    },
  }
)

interface HeadingProps 
  extends React.HTMLAttributes<HTMLHeadingElement>, 
  VariantProps<typeof headingVariants> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const sizeToComponent = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

export default function Heading({
  size = 'h1',
  as,
  className,
  children,
  ...props
}: HeadingProps) {

  const Component = as || sizeToComponent[size as keyof typeof sizeToComponent] || 'h1';
  
  return (
    <Component 
      className={cn('', headingVariants({ size, className }))}
      {...props}
    >
      {children}
    </Component>
  )
}