import { Link } from 'lucide-react';
import Heading from "@/components/ui/heading";
import { copyToClipboard, slugify } from "@/lib/utils";
import { PortableTextBlock } from '@portabletext/types';

interface HeadingProps {
  value: PortableTextBlock & {
    children: Array<{
      text: string
    }>
  }
}

export const portableTextHeadings = {
  h2: ({ value }: HeadingProps) => {
    const id = slugify(value.children[0].text);
    return (
      <Heading 
        id={id} size="xl" tag="h2" 
        onClick={() => copyToClipboard(id)}
        className='flex items-center gap-3 group cursor-pointer'  
      >
        {value.children[0].text}
        <LinkIcon />
      </Heading>
    );
  },
  h3: ({ value }: HeadingProps) => {
    const id = slugify(value.children[0].text);
    return (
      <Heading 
        id={id} size="lg" tag="h3" 
        onClick={() => copyToClipboard(id)}
        className='mt-12 flex items-center gap-3 group cursor-pointer'  
      >
        {value.children[0].text}
        <LinkIcon />
      </Heading>
    );
  },
  h4: ({ value }: HeadingProps) => {
    const id = slugify(value.children[0].text);
    return (
      <Heading 
        id={id} size="md" tag="h4" 
        onClick={() => copyToClipboard(id)}
        className='mt-12 flex items-center gap-3 group cursor-pointer'  
      >
        {value.children[0].text}
        <LinkIcon />
      </Heading>
    );
  },
  h5: ({ value }: HeadingProps) => {
    const id = slugify(value.children[0].text);
    return (
      <Heading 
        id={id} size="sm" tag="h5" 
        onClick={() => copyToClipboard(id)}
        className='mt-12 flex items-center gap-3 group cursor-pointer'  
      >
        {value.children[0].text}
        <LinkIcon />
      </Heading>
    );
  },
  h6: ({ value }: HeadingProps) => {
    const id = slugify(value.children[0].text);
    return (
      <Heading 
        id={id} size="xs" tag="h6" 
        onClick={() => copyToClipboard(id)}
        className='mt-12 flex items-center gap-3 group cursor-pointer'  
      >
        {value.children[0].text}
        <LinkIcon />
      </Heading>
    );
  },
}

function LinkIcon() {
  return (
    <Link 
      size={18} 
      className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500'
    />
  )
}