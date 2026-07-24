import { notFound } from "next/navigation"
import { projects } from "@/constants/rootpage";
import { Button } from "@/components/ui/moving-border";
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
            <Link href={"/projects"} className="cursor-pointer text-zinc-600 text-md mb-4">
                ← Back to Project
            </Link>
            <div className="flex justify-between max-md:flex-col">
                <div className="flex gap-3">
                    <div className="text-4xl max-sm:text-2xl font-bold">{project.title}</div>
                    <Button>
                        Active
                    </Button>
                </div>
                <Link href={project.url} target="_blank" className="max-sm:mt-5 px-4 py-2 max-sm:w-35  bg-white text-black rounded-xl ">
                    Visit site
                </Link>

            </div>
        </div>
    )
}