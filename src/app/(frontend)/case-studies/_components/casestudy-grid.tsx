import React from 'react';
import CasestudyCard from './casestudy-card';

// Temporary type until Sanity generates it
// type Casestudy = {
//   _id: string;
//   _type: string;
//   title: string;
//   slug: string;
//   excerpt?: string;
//   image?: {
//     asset?: {
//       url: string;
//     };
//     altText?: string;
//   };
// };

interface CasestudyGridProps {
  casestudies: any[];
}

export default function CasestudyGrid({ casestudies }: CasestudyGridProps) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
      {casestudies.map((casestudy, index) => (
        <CasestudyCard key={index} casestudy={casestudy} />
      ))}
    </div>
  )
}
