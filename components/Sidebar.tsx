"use client";
import TypingText from "./TypingText";
import { useState, useEffect } from "react";
import MetaBalls from "./MetaBalls";
import { navItems, socials } from "@/constants/rootpage";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { HiRefresh } from "react-icons/hi";

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest(".mobile-sidebar")) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleESc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleESc);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleESc);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
        {/* desktop sidebar */}
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
              <h3>
                | <TypingText />
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden h-16"></div>

      <aside>
        <div className="hidden md:flex flex-col w-[260px] h-screen px-6 py-8 bg-zinc-950 border-r border-zinc-800 fixed left-0 top-0 overflow-y-auto z-55">
          <div className="flex flex-row items-center gap-2">
            <div className="w-10 h-10 relative shrink-0">
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
              <h3 className="text-md">Peter John Alado</h3>
              <TypingText />
            </div>
          </div>

            <div className="mt-6 text-xs text-zinc-500">Home</div>

          <nav
            id="desktop-sidebar"
            className="flex-1 mt-5"
            aria-label="Primary"
          >
            <ul className="space-y-2">
              {navItems.map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                        flex 
                        items-center 
                        gap-3 px-3 
                        py-3 rounded-lg 
                        transition-colors duration-150 
                        ${pathname == href ? "bg-zinc-800 text-zinc-50" : "text-zinc-200 hover:bg-zinc-800 hover:text-zinc-50"}`}
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    <Icon className="w-4 h-4 text-zinc-300" />
                    <span className="text-sm">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-xs text-zinc-500">Connect</div>
            <ul className="space-y-2 mt-3 text-xs">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex gap-2 items-center"
                    title={label}
                    rel="noopenernoreferrer"
                    target="_blank"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm truncate text-zinc-300">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

    {/* Mobile Sidebar */}
    <div suppressHydrationWarning className={ `${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        z-[90]
        backdrop-blur-md
        mobile-sidebar 
        fixed right-0 
        top-0 h-screen 
        w-full max-w-[320px] 
        bg-zinc-950 border-l 
        transform transition-transform 
        duration-300 ease-in-out` }>
            <div className="px-6 py-8 flex-col">
                <div className="flex">
                    <div className="w-14 h-14">
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
                        <TypingText />
                    </div>
                </div>

                <div className="mt-6 text-xs text-zinc-500">Home</div>

                <nav
            id="desktop-sidebar"
            className="flex-1 mt-5"
            aria-label="Primary"
          >
            <ul className="space-y-2">
              {navItems.map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                        flex 
                        items-center 
                        gap-3 px-3 
                        py-3 rounded-lg 
                        transition-colors duration-150 
                        ${pathname == href ? "bg-zinc-800 text-zinc-50" : "text-zinc-200 hover:bg-zinc-800 hover:text-zinc-50"}`}
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    <Icon className="w-4 h-4 text-zinc-300" />
                    <span className="text-sm">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div suppressHydrationWarning className="mt-8 text-xs text-zinc-500">Connect</div>
            <ul className="space-y-2 mt-3 text-xs">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex gap-2 items-center"
                    title={label}
                    rel="noopenernoreferrer"
                    target="_blank"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm truncate text-zinc-300">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

        {/* Mobile Bottom Nav */}
        <div suppressHydrationWarning className="md:hidden fixed bottom-0 left-0 right-0 z-50 overflow-hidden">
            <div className="mx-auto w-auto px-4 pb-4">
              <div className="max-w-lg mx-auto">
                    <div className="bg-zinc-900/95 backdrop-blur-sm border border-zinc-800 px-2 py-2 flex items-center gap-2 shadow-2xl shadow-black/40 rounded-xl">
                        <div className="grid grid-cols-6 gap-1 flex-1">
                            {navItems.map(({ href, label, Icon }) => (
                                <Link 
                                    key={href} 
                                    href={href} 
                                    className={`
                                        p-2 rounded-lg transition-all 
                                        duration-200 flex items-center 
                                        justify-center 
                                        ${pathname === href ? "text-zinc-50 bg-zinc-800" : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"}`}>
                                    <Icon className="w-4 h-4"/>
                                </Link>
                            ))}

                        </div>
                        <div className="h-6 w-px bg-zinc-800"></div>
                        <button aria-label="Open Menu" onClick={(() => setIsMobileMenuOpen(true))} className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 transition-colors">
                            <TiThMenu className="w-4 h-4"/>
                        </button>
                    </div>

              </div>
            </div>

        </div>
    </>
  );
};

export default Sidebar;
