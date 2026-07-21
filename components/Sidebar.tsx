'use client'
import TypingText from "./TypingText"
import { useState, useEffect } from 'react'

const Sidebar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <div className="min-h-screen m-0 z-99 py-4 px-4 flex-col items-center justify-items-center w-[14%] border-amber-300 border-2">
        <div>Peter John Alado</div>
        <div><TypingText/></div>
    </div>
  )
}

export default Sidebar