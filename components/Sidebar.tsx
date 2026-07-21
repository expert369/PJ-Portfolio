'use client'
import TypingText from "./TypingText"
import { useState, useEffect } from 'react'
import MetaBalls from './MetaBalls';
import { navItems } from "@/constants/rootpage";
import { usePathname } from 'next/navigation'
import Link from "next/link";

const Sidebar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMobileMenuOpen && !target.closest('.mobile-sidebar')){
                setIsMobileMenuOpen(false)
            }
        }

        const handleESc = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsMobileMenuOpen(false)
        }

        document.addEventListener("click", handleClickOutside)
        document.addEventListener("keydown", handleESc)
        
        return () => {
            document.removeEventListener("click", handleClickOutside)
            document.removeEventListener("keydown", handleESc)
        }
    }, [isMobileMenuOpen])

  return (
    <>
        <div className="md:hidden bg-transparent fixed top-0 left-0 right-0 z-80 backdrop-blur-sm px-4 py-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-20 h-20 relative shrink-0">
                        <MetaBalls
                            color="#ffffff"
                            cursorBallColor="#ffffff"
                            cursorBallSize={5}
                            ballCount={15}
                            animationSize={30}
                            enableMouseInteraction
                            enableTransparency={true}
                            hoverSmoothness={0.15}
                            clumpFactor={1}
                            speed={1}
                            />
                    </div>
                    <div>
                        <h3>| Peter John Alado</h3>
                        <h3>| <TypingText/></h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-sm:hidden min-h-screen m-0 z-99 py-4 px-4 flex flex-col items-center justify-items-center w-[14%] border-amber-300 border-2">
            <div className="flex flex-row items-center gap-2">
                <div className="w-8 h-8 relative shrink-0">
                    <MetaBalls
                        color="#ffffff"
                        cursorBallColor="#ffffff"
                        cursorBallSize={5}
                        ballCount={15}
                        animationSize={30}
                        enableMouseInteraction
                        enableTransparency={true}
                        hoverSmoothness={0.15}
                        clumpFactor={1}
                        speed={1}
                    />
                </div>
                <div>
                    <h3>Peter John Alado</h3>
                    <TypingText/>
                </div>
            </div>

            <nav id="desktop-sidebar" className="flex-1" aria-label="Primary">
                <ul className="space-y-2">
                    {navItems.map(({href, label, Icon}) => (
                        <li key={href}>
                            <Link  href={href} 
                                className={`
                                    flex 
                                    items-center 
                                    gap-3 px-3 
                                    py-3 rounded-lg 
                                    transition-colors duration-150 
                                    ${pathname == href ? "bg-zinc-800 text-zinc-50" : "text-zinc-200 hover:bg-zinc-800 hover:text-zinc-50"}`
                                }
                                aria-current={pathname === href ? "page" : undefined}
                            >
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>
        </div>
    </>
  )
}

export default Sidebar