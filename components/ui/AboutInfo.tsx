'use client'
import { TextGenerateEffect } from "./text-generate-effect"

type AboutInfoProps = {
    title: string;
    description: string;
}

export default function AboutInfo({ title, description }: AboutInfoProps){
    return (
        <div className="flex flex-col gap-3 items-start">
            <div className="font-bold text-2xl max-sm:text-2xl"><TextGenerateEffect words={title} /></div>
            <div className="text-zinc-600 text-md max-sm:text-sm"><TextGenerateEffect words={description} className="text-zinc-600" /></div>
        </div>
    )
}