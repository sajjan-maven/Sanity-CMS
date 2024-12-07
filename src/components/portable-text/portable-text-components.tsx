import { slugify } from '@/lib/utils';
import { PortableTextComponents } from '@portabletext/react';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ value }: any) => (
      <h2 
        id={slugify(value.children[0].text)}
        className='text-4xl'
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3 
        id={slugify(value.children[0].text)}
        className='text-3xl'
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4 
        id={slugify(value.children[0].text)}
        className='text-2xl'
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }: any) => (
      <h5 
        id={slugify(value.children[0].text)}
        className='text-xl'
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6 
        id={slugify(value.children[0].text)}
        className='text-lg'
      >
        {value.children[0].text}
      </h6>
    ),
  },
}