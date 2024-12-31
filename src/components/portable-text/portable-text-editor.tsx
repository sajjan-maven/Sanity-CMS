import { cn } from '@/lib/utils';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { portableTextComponents } from './portable-text-components';

interface PortableTextEditorProps {
  data: PortableTextBlock;
  classNames?: string;
}

export default function PortableTextEditor({ data, classNames }: PortableTextEditorProps) {
  return (
    <div className={cn(
      'prose prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-sm md:prose-p:text-base',
      classNames
    )}>
      <PortableText 
        value={data} 
        components={portableTextComponents} 
      />
    </div>
  )
}