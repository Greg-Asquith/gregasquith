import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greg Asquith | Blog',
  description: 'Greg Asquith | Technical consulting and solution creation',
};

export default function BlogHome() {
  return (
    <div className="my-2">
      Greg&apos;s Blog
    </div>
  );
}
