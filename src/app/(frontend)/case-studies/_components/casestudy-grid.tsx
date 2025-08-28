import React from 'react';
import CasestudyCard from './casestudy-card';

//qwer Case study

// Temporary type until Sanity generates it
type Casestudy = {
  _id: string;
  _type: string;
  title: string;
  slug: string;
  excerpt?: string;
  image?: {
    asset?: {
      url: string;
    };
    altText?: string;
  };
};

interface CasestudyGridProps {
  casestudies: Casestudy[];
}

export default function CasestudyGrid({ casestudies }: CasestudyGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {casestudies.map((casestudy) => (
        <CasestudyCard key={casestudy._id} casestudy={casestudy} />
      ))}
    </div>
  )
}
