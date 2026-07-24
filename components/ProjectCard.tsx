import { FollowerPointerCard } from "./ui/following-pointer";
import type { Projects } from "@/constants/rootpage";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface PageCardProps {
    projects: Projects
}

export function ProjectCard({projects}: PageCardProps) {
  const router = useRouter();
  
  return (
    <div
      onClick={() => router.push(`/projects/${projects.slug}`)} 
      className="mx-auto w-87 z-20"
    >
      <FollowerPointerCard
        title={
          <TitleComponent
            title={projects.title}
            avatar={projects.image}
          />
        }
      >
        <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-200 hover:shadow-xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-zinc-950">
            <Image
              src={projects.image}
              alt="thumbnail"
              fill
              className="h-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
            />
          </div>
          <div className="px-4 mb-6">
            <h2 className="my-4 text-xl font-bold text-zinc-200">
              {projects.title}
            </h2>
            <h2 className="my-4 text-sm font-normal text-zinc-400 border-b pb-6 border-zinc-800">
              {projects.description}
            </h2>
            <div className="flex gap-4 mb-0">
                <a href={projects.url} target="_blank" className="px-3 font-semibold py-2 bg-zinc-200 text-sm text-black rounded-xl">Visit</a>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}


const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <Image
      src={avatar}
      height={20}
      width={20}
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
