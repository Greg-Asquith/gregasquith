import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Separator } from "@src/components/ui/separator";
import { buttonVariants } from "@src/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="my-2 text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Greg Asquith
          </h1>
          <p className="mt-2 max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            I build online tools and scripts to solve problems, and blog about what I learn along the way
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/tools-and-scripts"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Tools & Scripts
          </Link>
          <Link
            rel="noreferrer"
            href="/blog"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Blog
          </Link>
        </div>
      </section>
      <Separator className="my-2">
      </Separator>
    </>
  );
}
