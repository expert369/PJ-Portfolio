import { HomeIcon, ProjectsIcon, ExperienceIcon, ToolsIcon, UserIcon, MailIcon } from "@/components/icons";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { CodeXml } from 'lucide-react';
import React from "react";
import StackBadge from "@/components/ui/StackBadge";
import ExperienceHighlight from "@/components/ui/ExperienceHighlight";
import type { ReactNode } from "react";

type IconProps = React.SVGProps<SVGSVGElement>

export type Tools = {
  title: string;
  description: string;
  href: string;
}

export type Projects = {
  title: string; 
  description: string; 
  sub_description: string;
  image: string;
  url: string;
  slug: string;
  techstack: string[];
}

export type ExperienceDetails = {
  title: string;
  content: ReactNode;
  color: string;
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

export const data: ExperienceDetails[] = [
  {
    title: "2026 - Present",
    color: "blue",
    content: (
      <div className="px-2 py-2">
        <div className="flex gap-4">
          <CodeXml className="text-blue-700 bg-blue-900/20 h-10 w-10 p-2 rounded-xl" />
          <div className="flex flex-col gap-1 mb-2">
            <h2 className="font-bold text-xl">Senior Full Stack Developer</h2>
            <p className="text-sm text-zinc-600">
              Quirao Group of Companies
            </p>
            <p className="text-sm text-zinc-400">
              Full-time • Feb 2026 - Present
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          <ExperienceHighlight
            key="architect"
            color="blue"
            value="Architect and develop scalable ERPNext/Frappe solutions for finance and eCommerce businesses."
          />
          <ExperienceHighlight
            key="ai-assistants"
            color="blue"
            value="Build AI-powered assistants using RAG, LLMs, Text-to-SQL, and machine learning."
          />
          <ExperienceHighlight
            key="integrations"
            color="blue"
            value="Develop WooCommerce integrations, custom dashboards, reports, and workflow automation."
          />
          <ExperienceHighlight
            key="deploy"
            color="blue"
            value="Deploy and maintain production environments using Docker, CI/CD, and DigitalOcean."
          />
        </ul>

        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <StackBadge key="ERPNext" techStack="ERPNext" />
          <StackBadge key="Frappe" techStack="Frappe" />
          <StackBadge key="Python" techStack="Python" />
          <StackBadge key="JavaScript" techStack="JavaScript" />
          <StackBadge key="React" techStack="React" />
          <StackBadge key="Vue" techStack="Vue" />
          <StackBadge key="Docker" techStack="Docker" />
          <StackBadge key="DigitalOcean" techStack="DigitalOcean" />
          <StackBadge key="LLMs" techStack="LLMs" />
          <StackBadge key="RAG" techStack="RAG" />
          <StackBadge key="REST API" techStack="REST API" />
        </div>
      </div>
    ),
  },
  {
    title: "2024 - 2026",
    color: "red",
    content: (
      <div className="px-2 py-2">
        <div className="flex gap-4">
          <CodeXml className="text-red-700 bg-red-900/20 h-10 w-10 p-2 rounded-xl" />
          <div className="flex flex-col gap-1 mb-2">
            <h2 className="font-bold text-xl">ERPNext Developer</h2>
            <p className="text-sm text-zinc-600">
              Blue Chip Builders Incorporated
            </p>
            <p className="text-sm text-zinc-400">
              Full-time • Aug 2024 - Feb 2026
            </p>
          </div>
        </div>

        <ul className="space-y-4">
          <ExperienceHighlight
            key="customized-modules"
            color="red"
            value="Customized ERPNext modules including Finance, Inventory, Procurement, and Manufacturing."
          />
          <ExperienceHighlight
            key="custom-doctypes"
            color="red"
            value="Developed custom DocTypes, Print Formats, Reports, Scripts, and business workflows."
          />
          <ExperienceHighlight
            key="qr-system"
            color="red"
            value="Built a QR Code warehouse management system with image verification for inventory security."
          />
          <ExperienceHighlight
            key="collaboration"
            color="red"
            value="Collaborated with end users, gathered requirements, and assisted in CI/CD deployment pipelines."
          />
        </ul>

        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <StackBadge key="ERPNext-2" techStack="ERPNext" />
          <StackBadge key="Frappe-2" techStack="Frappe" />
          <StackBadge key="Python-2" techStack="Python" />
          <StackBadge key="JavaScript-2" techStack="JavaScript" />
          <StackBadge key="jQuery" techStack="jQuery" />
          <StackBadge key="React-2" techStack="React" />
          <StackBadge key="Vue-2" techStack="Vue" />
          <StackBadge key="MariaDB" techStack="MariaDB" />
          <StackBadge key="Docker-2" techStack="Docker" />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    color: "green",
    content: (
      <div className="px-2 py-2">
        <div className="flex gap-4">
          <CodeXml className="text-green-700 bg-green-900/20 h-10 w-10 p-2 rounded-xl" />
          <div className="flex flex-col gap-1 mb-2">
            <h2 className="font-bold text-xl">Software Developer Intern</h2>
            <p className="text-sm text-zinc-600">
              Digital Business Training Center Inc.
            </p>
            <p className="text-sm text-zinc-400">
              Internship • Mar 2024 - Jun 2024
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          <ExperienceHighlight
            key="certification"
            color="green"
            value="Earned Python Level III Certification and Best Capstone Project Award."
          />
          <ExperienceHighlight
            key="capstone"
            color="green"
            value="Developed ERPNext-based capstone applications using Python and Flask."
          />
          <ExperienceHighlight
            key="prompt-skills"
            color="green"
            value="Strengthened skills in Prompt Engineering, problem solving, and software development."
          />
          <ExperienceHighlight
            key="flask-api"
            color="green"
            value="Worked with Flask, SQLite, and REST API development."
          />
        </ul>

        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <StackBadge key="Python-3" techStack="Python" />
          <StackBadge key="Flask" techStack="Flask" />
          <StackBadge key="SQLite" techStack="SQLite" />
          <StackBadge key="ERPNext-3" techStack="ERPNext" />
          <StackBadge key="Frappe-3" techStack="Frappe" />
          <StackBadge key="Prompt Engineering" techStack="Prompt Engineering" />
        </div>
      </div>
    ),
  },
];

export const tools: Tools[] = [
  {
    title: "Cursor",
    description: "AI Code Editor",
    href: "/images/icons/cursor.webp",
  },
  {
    title: "ChatGPT",
    description: "AI Assistant",
    href: "/images/icons/chatgpt.webp",
  },
  {
    title: "Claude",
    description: "AI Assistant",
    href: "/images/icons/claude.png",
  },
  {
    title: "OpenCode",
    description: "AI Coding Agent",
    href: "/images/icons/opencode-wordmark-dark.png",
  },
  {
    title: "VS Code",
    description: "Code Editor",
    href: "/images/icons/vscode.webp",
  },
  {
    title: "Git",
    description: "Version Control",
    href: "/images/icons/Git-Icon-1788C.png",
  },
  {
    title: "GitHub",
    description: "Code Hosting",
    href: "/images/icons/github.webp",
  },
  {
    title: "Docker",
    description: "Containerization",
    href: "/images/icons/docker.png",
  },
  {
    title: "Ubuntu",
    description: "Linux Environment",
    href: "/images/icons/ubuntu-logo.png",
  },
  {
    title: "WSL",
    description: "Windows Subsystem for Linux",
    href: "/images/icons/wsl.webp",
  },
  {
    title: "Postman",
    description: "API Testing",
    href: "/images/icons/postman.png",
  },
  {
    title: "Figma",
    description: "UI/UX Design",
    href: "/images/icons/figma.jpg",
  },
  {
    title: "ERPNext",
    description: "ERP Platform",
    href: "/images/icons/erpnext.png",
  },
  {
    title: "Frappe",
    description: "Full-Stack Framework",
    href: "/images/icons/frappe.png",
  },
  {
    title: "MySQL",
    description: "Database",
    href: "/images/icons/mysql.webp",
  },
  {
    title: "Redis",
    description: "Caching",
    href: "/images/icons/redis.webp",
  },
  {
    title: "Nginx",
    description: "Web Server",
    href: "/images/icons/nginx.webp",
  },
  {
    title: "Vercel",
    description: "Deployment",
    href: "/images/icons/vercel.webp",
  },
  {
    title: "DigitalOcean",
    description: "Cloud Hosting",
    href: "/images/icons/digital_ocean.webp",
  },
  {
    title: "Notion",
    description: "Documentation",
    href: "/images/icons/notion.webp",
  },
  {
    title: "Excalidraw",
    description: "Flow Charting",
    href: "/images/icons/excalidraw.webp",
  },
];