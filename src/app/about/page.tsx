import { Separator } from "@src/components/ui/separator";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greg Asquith | About',
  description: 'Greg Asquith | Online tools and how they\'re made',
};


export default function About() {
  return (
    <>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="my-2 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            About Me
          </h1>
        </div>
      </section>
      <Separator className="my-2">
      </Separator>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <p>This is some content about me</p>
        </div>
      </section>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="my-2 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            About This Site
          </h1>
        </div>
      </section>
      <Separator className="my-2">
      </Separator>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <p>This is some content about this site</p>
        </div>
      </section>
    </>
  );
}
