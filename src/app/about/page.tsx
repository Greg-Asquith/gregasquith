import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greg Asquith | About',
  description: 'Greg Asquith | Technical consulting and solution creation',
};

export default function About() {
  return (
    <div className="my-2">
      About gregasquith.com
    </div>
  );
}
