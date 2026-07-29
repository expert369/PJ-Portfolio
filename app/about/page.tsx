'use client'
import StackBadge from "@/components/ui/StackBadge"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { techStack, aboutSections } from "@/constants/rootpage"
import AboutInfo from "@/components/ui/AboutInfo"
import Link from "next/link"


export default function About() {

    const emailTo = () => {
        window.location.href = "https://mail.google.com/mail/u/0/?fs=1&to=astergoldonline@gmail.com&tf=cm"
    }

    return (
        <div className="mb-8 mx-50 max-w-[900px] max-sm:mx-10 pt-15 max-sm:pt-35 gap-3 z-55">
            <BackgroundBeamsWithCollision className="bg-black">

            <div className="px-25 max-sm:px-2 flex flex-col gap-4">
                <div className="text-6xl max-sm:text-4xl font-bold">Peter John Alado</div>
                <div className="flex gap-2">
                    <div className="font-sm max-sm:text-xs font-semibold text-zinc-600">FULL-STACK DEV •</div>
                    <div className="font-sm max-sm:text-xs font-semibold text-zinc-600">FRAPPE/ERPNext DEVELOPER •</div>
                    <div className="font-sm max-sm:text-xs font-semibold text-zinc-600">TRAVEL •</div>
                    <div className="font-sm max-sm:text-xs font-semibold text-zinc-600">MUSIC •</div>
                    <div className="font-sm max-sm:text-xs font-semibold text-zinc-600">CYCLIST</div>
                </div>
                <div className="mb-3 flex flex-wrap gap-3 overflow-hidden">
                    {
                        techStack.map((t, idx) => (
                            <StackBadge key={idx} techStack={t}/>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-4 mb-3">
                    {
                        aboutSections.map((as, idx) => (
                            <AboutInfo key={idx} title={as.title} description={as.description} />
                        ))
                    }
                </div>
                <div className="flex gap-3">
                    <Link 
                        href="/contact" 
                        className="px-6 py-3 bg-white text-black rounded-lg text-sm font-semibold duration-300 hover:scale-105">
                        Get in Touch
                    </Link>
                    <button onClick={emailTo} className="cursor-pointer px-6 py-3 bg-zinc-800 border border-zinc-600 rounded-xl text-sm duration-300 hover:scale-105">
                        E-Mail
                    </button>                    
                </div>
            </div>
            </BackgroundBeamsWithCollision>
        </div>
    )    
}