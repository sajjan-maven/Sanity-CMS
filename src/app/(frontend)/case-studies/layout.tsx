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
    <div className="min-h-screen bg-gray-50">
      <main className="py-8">
        {children}
      </main>
    </div>
  );
}
