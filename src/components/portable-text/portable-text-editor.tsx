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
      'prose prose-headings:font-semibold prose-h2:mt-12 prose-h4:mt-12 prose-h5:mt-12 prose-h6:mt-12',
      classNames
    )}>
      <PortableText 
        value={data} 
        components={portableTextComponents} 
      />
    </div>
  )
}