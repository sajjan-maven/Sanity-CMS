import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const containerVariants = cva(
  'h-full mx-auto',
  {
    variants: {
      variant: {
        contained:
          'max-w-8xl px-6 md:px-10',
        fullWidth:
          'max-w-full',
      },
    },
    defaultVariants: {
      variant: 'contained',
    },
  }
)

interface ContainerProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
  VariantProps<typeof containerVariants>{
    paddingTop?: string,
    paddingBottom?: string,
  }

export default function Container(props: ContainerProps) {

  const { 
    variant, 
    className, 
    paddingTop, 
    paddingBottom, 
    children 
  } = props

  const paddingTopStyles = {
    'pt-0': paddingTop === 'none', 
    'pt-7': paddingTop === 'small',
    'pt-14': paddingTop === 'medium',
    'pt-20 md:pt-28': paddingTop === 'default', 
    'pt-24 lg:pt-44': paddingTop === 'large', 
  }

  const paddingBottomStyles = {
    'pb-0': paddingBottom === 'none', 
    'pb-7': paddingBottom === 'small', 
    'pt-14': paddingTop === 'medium',
    'pb-20 md:pb-28': paddingBottom === 'default', 
    'pb-24 lg:pb-44': paddingBottom === 'large'
  }
 
  return (
    <div className={cn(
      paddingTopStyles, 
      paddingBottomStyles, 
      containerVariants({ variant, className })
    )}>
      {children}
    </div>
  )
}