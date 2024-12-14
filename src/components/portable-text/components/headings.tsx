import toast from "react-hot-toast";
import { Link } from 'lucide-react';
import { copyHeadingUrl, slugify } from "@/lib/utils";

export const portableTextHeadings = {
  h2: ({ value }: any) => {
    const id = slugify(value.children[0].text);
    return (
      <h2 
        id={id}
        className='mt-12 flex items-center gap-3 text-4xl group cursor-pointer'
        onClick={() => {
          copyHeadingUrl(id);
          toast.success('Copied to clipboard.');
        }}
      >
        {value.children[0].text}
        <Link 
          size={18} 
          className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500'
        />
      </h2>
    );
  },
  h3: ({ value }: any) => {
    const id = slugify(value.children[0].text);
    return (
      <h3 
        id={id}
        className='text-3xl flex items-center gap-3 group cursor-pointer'
        onClick={() => {
          copyHeadingUrl(id);
          toast.success('Copied to clipboard.');
        }}
      >
        {value.children[0].text}
        <Link 
          size={18} 
          className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500'
        />
      </h3>
    );
  },
  h4: ({ value }: any) => {
    const id = slugify(value.children[0].text);
    return (
      <h4 
        id={id}
        className='mt-12 text-2xl flex items-center gap-3 group cursor-pointer'
        onClick={() => {
          copyHeadingUrl(id);
          toast.success('Copied to clipboard.');
        }}
      >
        {value.children[0].text}
        <Link 
          size={18} 
          className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500'
        />
      </h4>
    );
  },
  h5: ({ value }: any) => {
    const id = slugify(value.children[0].text);
    return (
      <h5 
        id={id}
        className='mt-12 text-xl flex items-center gap-3 group cursor-pointer'
        onClick={() => {
          copyHeadingUrl(id);
          toast.success('Copied to clipboard.');
        }}
      >
        {value.children[0].text}
        <Link 
          size={18} 
          className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500'
        />
      </h5>
    );
  },
  h6: ({ value }: any) => {
    const id = slugify(value.children[0].text);
    return (
      <h6 
        id={id}
        className='mt-12 text-lg flex items-center gap-3 group cursor-pointer'
        onClick={() => {
          copyHeadingUrl(id);
          toast.success('Copied to clipboard.');
        }}
      >
        {value.children[0].text}
        <Link 
          size={18} 
          className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500'
        />
      </h6>
    );
  },
}