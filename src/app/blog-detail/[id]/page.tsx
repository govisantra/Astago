import type { Metadata } from 'next';

interface PageProps {
  params: { id: string }
}

const Page = async ({ params }: PageProps) => {
  return (
    <div>
      <h1>Single Property ID: {params.id}</h1>
    </div>
  );
}

export default Page;
