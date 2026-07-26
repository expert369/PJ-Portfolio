import { tools } from "@/constants/rootpage"
import { CometCard } from "@/components/ui/comet-card"
import Image from "next/image"

export default function ToolsPage(){
    return (
        <div className="mb-8 mx-20 max-sm:mx-10 pt-15 max-sm:pt-35 gap-3 z-55 flex flex-col">
            <div className="py-2">
                <div className="flex flex-col mb-12 gap-3">
                    <h2 className="max-sm:text-5xl md:text-6xl font-bold text-zinc-300 ">Shovels</h2>
                    <div className="max-sm:text-xs text-sm text-zinc-400">Tools I frequently use to make life easier</div>
                </div>
            </div>

            <div className="px-2 grid lg:grid-cols-4 max-sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((t => (
                    <CometCard key={t.title}>
                        <div className="flex max-sm:gap-2 gap-5 px-4 py-2 items-center overflow-hidden">
                            <Image src={t.href} width={60} height={20} alt={t.title} className="object-cover" />
                            <div className="flex flex-col">
                                <div className="text-lg max-sm:text-sm text-zinc-100 font-semibold">{t.title}</div>
                                <div className="text-xs text-zinc-500">{t.description}</div>
                            </div>
                        </div>
                    </CometCard>
                )))}
            </div>
        </div>
    )
}