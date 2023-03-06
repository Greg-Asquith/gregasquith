import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Separator } from "@src/components/ui/separator";
import { Textarea } from "@src/components/ui/textarea";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greg Asquith | Contact',
  description: 'Greg Asquith | Technical consulting and solution creation',
};

export default function Contact() {
  return (
    <>
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="my-2 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Contact Me
          </h1>
        </div>
      </section>
      <Separator className="my-2">
      </Separator>
      <section className="container grid items-center gap-6 pt-4 pb-8 md:py-4">
        <div className="flex max-w-[700px] flex-col items-start gap-2">
          <Input className="my-1" type="text" placeholder="Name" />
          <Input className="my-1" type="email" placeholder="Email" />
          <Input className="my-1" type="text" placeholder="Subject" />
          <Textarea className="my-1" placeholder="Your message..." />
          <Button className="my-1">Submit</Button>
        </div>
      </section>
    </>
  );
}
