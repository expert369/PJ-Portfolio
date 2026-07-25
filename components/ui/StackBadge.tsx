type StackBadgeProps = {
    techStack: string;
}

export default function StackBadge({techStack}: StackBadgeProps){
    return (
        <div className="flex items-center text-xs px-2 py-1 rounded-xl text-zinc-300 bg-zinc-600">{techStack}</div>
    )
}