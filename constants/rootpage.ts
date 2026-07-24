import { HomeIcon, ProjectsIcon, ExperienceIcon, ToolsIcon, UserIcon, MailIcon } from "@/components/icons";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>

export type Projects = {
  title: string; 
  description: string; 
  sub_description: string;
  image: string;
  url: string;
  slug: string;
  techstack: string[];
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
    sub_description: "Cleaning Services Website",
    description:
      "A modern cleaning services website built for an Australian business, featuring online booking integration, responsive design, and optimized landing pages to increase customer conversions.",
    image: "/images/mrb.png",
    url: "https://mrbcleaningservices.com.au/",
    slug: "mrb-cleaning-services",
    techstack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Koalendar",
      "Responsive Design",
      "SEO",
    ],
  },
  {
    title: "Movie Finder",
    sub_description: "Movie Discovery Web App",
    description:
      "A movie discovery web application that lets users search for films, browse trending titles, and view detailed movie information through a clean and responsive interface.",
    image: "/images/moviefinder.png",
    url: "https://movie-finder-blush.vercel.app/",
    slug: "movie-finder",
    techstack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TMDB API",
      "REST API",
      "Responsive Design",
    ],
  },
  {
    title: "Lyka Artspace",
    sub_description: "Creative Portfolio Landing Page",
    description:
      "A visually engaging landing page for an art and creative brand, designed to showcase artwork, services, and brand identity with smooth animations and a modern user experience.",
    image: "/images/lykaartspace.png",
    url: "https://lykaartspace.netlify.app/",
    slug: "lyka-artspace",
    techstack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Landing Page",
      "UI/UX",
    ],
  },
  {
    title: "KOKO Solutions",
    sub_description: "Software Company Website",
    description:
      "A professional software solutions company website showcasing services, technologies, and digital transformation solutions with a modern and responsive design.",
    image: "/images/koko.png",
    url: "https://kokosolutions.vercel.app/",
    slug: "koko-solutions",
    techstack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Vercel",
    ],
  },
];