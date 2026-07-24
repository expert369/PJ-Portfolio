'use client'
import { projects } from "@/constants/rootpage"
import { ProjectCard } from "@/components/ProjectCard" 
import { StarsBackground } from "@/components/ui/stars-background"
import { ShootingStars } from "@/components/ui/shooting-starts"

export default function Project() {
    return (
        <div className="mb-8 mx-20 max-sm:mx-10 pt-15 max-sm:pt-35 gap-3 z-55 flex">
            <div className="py-2">
                <div className="flex flex-col mb-12 gap-3">
                    <h2 className="max-sm:text-5xl md:text-6xl font-bold text-zinc-300 ">Projects</h2>
                    <div className="max-sm:text-xs text-sm text-zinc-400">Explore some of the projects I&apos;ve built. Most of my professional work remains private due to client confidentiality.</div>
                </div>

                <div className="flex md:grid lg:grid-cols-2 xl:grid-cols-3 flex-col gap-8  ">
                    {projects.map((proj) => (
                        <ProjectCard key={proj.slug} projects={proj}/>
                    ))}
                </div>
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    )
}