import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@src/components/Icons";

export function SiteFooter() {
  return (
    <footer>
      <div className="px-4 flex flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-10 dark:border-t-slate-700 md:h-16 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:row md:gap-2 md:px-0">
          <Link href="/" className="items-center space-x-2 flex">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold inline-block">
              {siteConfig.name}
            </span>
          </Link>
        </div>
      </div>
      <div className="px-4 flex flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-10 dark:border-t-slate-700 md:h-12 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-slate-600 dark:text-slate-400 md:text-left">
            &#169; Greg Asquith {new Date().getFullYear()} Built using Next.js 13 and components by{" "}
            <a
              href={siteConfig.links.shadcnTwitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn
            </a>
            . Component code is available on{" "}
            <a
              href={siteConfig.links.shadcnGithub}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}