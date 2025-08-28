import { Metadata } from 'next';

//qwer Case study

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore our case studies and success stories',
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
    </main>
  );
}
