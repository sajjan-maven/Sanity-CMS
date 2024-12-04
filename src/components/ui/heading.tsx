import React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headingVariants = cva(
  'font-medium text-gray-900 tracking-tight leading-normal',
  {
    variants: {
      tag: {
        h1: '', h2: '', h3: '', h4: '', h5: '', h6: '',
      },
      size: {
        xxl: 'text-4xl md:text-7xl',
        xl: 'text-3xl md:text-[2.6rem]',
        lg: 'text-2xl md:text-3xl',
        md: 'text-2xl md:text-2xl',
        sm: 'text-xl',
        xs: 'text-lg',
      },
      
    },
    defaultVariants: {
      tag: 'h1',
      size: 'xxl',
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
  tag = 'h1',
  size = 'xxl',
  as,
  className,
  children,
  ...props
}: HeadingProps) {

  const Component = as || sizeToComponent[tag as keyof typeof sizeToComponent] || 'h1';
  
  return (
    <Component 
      className={cn('', headingVariants({ tag, size, className }))}
      {...props}
    >
      {children}
    </Component>
  )
}