import { NavItem } from "@/types/nav";

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    linkedin: string
    shadcnTwitter: string
    shadcnGithub: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Greg Asquith",
  description:
    "Problem solving and technology",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/Greg_Asquith",
    github: "https://github.com/Greg-Asquith",
    linkedin: "https://www.linkedin.com/in/gregasquith/",
    shadcnTwitter: "https://twitter.com/shadcn",
    shadcnGithub: "https://github.com/shadcn/ui"
  },
}
