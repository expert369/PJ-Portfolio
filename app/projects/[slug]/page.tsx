import { notFound } from "next/navigation"
import { projects } from "@/constants/rootpage";
import { Button } from "@/components/ui/moving-border";
import dynamic from "next/dynamic"
const BackgroundBeams = dynamic(() => import("@/components/ui/background-beams").then((m) => ({ default: m.BackgroundBeams })))
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{
        slug: string;
    }>
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);
    if (!project){
        notFound();
    }
    
    return (
        <div className="mb-8 mx-20 max-sm:mx-10 pt-15 max-sm:pt-35 gap-3 z-55 flex flex-col">
            <div className="mb-8 z-10">
                <Link href={"/projects"} className="cursor-pointer text-zinc-600 text-md">
                    ← Back to Project
                </Link>
                <div className="mb-6 flex justify-between max-md:flex-col mt-8 md:h-10 max-sm:100">
                    <div className="flex gap-3">
                        <div className="lg:text-5xl max-sm:text-2xl md:text-3xl font-bold">{project.title}</div>
                        <Button>
                            Active
                        </Button>
                    </div>
                    <Link href={project.url} target="_blank" className="ml-2 w-auto max-sm:mt-5 px-4 py-2  flex justify-center text-center max-sm:w-35 bg-white text-black rounded-xl ">
                        Visit site
                    </Link> 
                </div>
                <div className="text-md text-zinc-400 mb-4">
                    {project.sub_description}
                </div>

                <div className="flex gap-2 max-sm:grid max-sm:grid-cols-2">
                    {project.techstack.map((stack) => (
                        <div key={stack} className="flex justify-center px-2 py-1 max-sm:w-auto text-sm max-sm:text-xs text-zinc-300 font-bold bg-zinc-800 rounded-2xl">
                            {stack}
                        </div>
                    ))}
                </div>
            </div>
            <div className="z-10 mb-4">
                <Image width={1200} height={700} className="shadow-lg shadow-zinc-700 border-zinc-950 border-2 rounded-lg" src={project.image} alt={project.title} />
            </div>
            <div>
                <div className="text-2xl font-bold text-zinc-100 mb-4">
                    Project Overview
                </div>
                <div className="text-zinc-500 text-md w-[70%]">
                    {project.description}
                </div>
            </div>
            <BackgroundBeams />
        </div>
    )
}