import { HomeIcon, ProjectsIcon, ExperienceIcon, ToolsIcon, UserIcon, MailIcon } from "@/components/icons";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>

export type Projects = {
  title: string; 
  description: string; 
  image: string,
  url: string,
  slug: string
}

export const navItems: { href: string; label: string; Icon: React.ComponentType<IconProps> }[] = [
      { href: "/", label: "Home", Icon: HomeIcon },
      { href: "/projects", label: "Projects", Icon: ProjectsIcon },
      { href: "/experience", label: "Experience", Icon: ExperienceIcon },
      { href: "/tools", label: "Tools", Icon: ToolsIcon },
      { href: "/about", label: "About", Icon: UserIcon },
      { href: "/contact", label: "Contact", Icon: MailIcon },
    ];
  
export const socials: { label: string, href: string; Icon: React.ComponentType<IconProps>}[] = [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/alado-peter-john-3518852a8/",
        Icon: IoLogoLinkedin,
      },
      {
        label: "Github",
        href: "https://github.com/expert369",
        Icon: FaGithubSquare,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/imnot_pejay/",
        Icon: FaInstagram,
      },
    ];

export const projects: Projects[] = [
    {
      title: "Mr.B Cleaning & Services",
      description: "A responsive cleaning services landing page with Koalender booking integration, enabling customers to easily book cleaning appointments through a fast and intuitive online experience.",
      image: "/images/mrb.png",
      url: "https://mrbcleaningservices.com.au/",
      slug: "mrb-cleaning-services"
    },
    {
      title: "Movie Finder",
      description: "A responsive cleaning services landing page with Koalender booking integration, enabling customers to easily book cleaning appointments through a fast and intuitive online experience.",
      image: "/images/moviefinder.png",
      url: "https://movie-finder-blush.vercel.app/",
      slug: "movie-finder"
    },
    {
      title: "Lyka Artspace",
      description: "A responsive cleaning services landing page with Koalender booking integration, enabling customers to easily book cleaning appointments through a fast and intuitive online experience.",
      image: "/images/lykaartspace.png",
      url: "https://lykaartspace.netlify.app/",
      slug: "lyka-artspace"
    },
    {
      title: "KOKO Solutions",
      description: "A responsive cleaning services landing page with Koalender booking integration, enabling customers to easily book cleaning appointments through a fast and intuitive online experience.",
      image: "/images/koko.png",
      url: "https://kokosolutions.vercel.app/",
      slug: "koko-solutions"
    },
  ]