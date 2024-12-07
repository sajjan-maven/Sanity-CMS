"use client"
import { cn } from '@/lib/utils';
import { PortableText } from '@portabletext/react';

interface PortableTextEditorProps {
  data: any;
  classNames?: string;
}

export default function PortableTextEditor({ data, classNames }: PortableTextEditorProps) {
  return (
    <div className={cn('prose prose-h2:mt-12 prose-h2:text-4xl', classNames)}>
      <PortableText 
        value={data} 
      />
    </div>
  )
}