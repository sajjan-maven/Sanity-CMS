"use client"
import { cn } from '@/lib/utils';
import { PortableText } from '@portabletext/react';

interface PortableTextEditorProps {
  data: any;
  classNames?: string;
}

export default function PortableTextEditor({ data, classNames }: PortableTextEditorProps) {
  return (
    <div className={cn('', classNames)}>
      <PortableText 
        value={data} 
      />
    </div>
  )
}