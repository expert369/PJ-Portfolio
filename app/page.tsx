'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { FaCheckCircle } from "react-icons/fa";
import { Spotlight } from "@/components/ui/spotlight";
import { Cover } from "@/components/ui/cover";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [ cvButton, setCvButton ] = useState<string>("RESUME")

  const handleCVButton = () => {
    setCvButton("Downloaded ✓")

    setTimeout(() => {
      setCvButton("RESUME")
    },2000);
  }

  return (
    <div className="relative pb-24 flex min-h-screen flex-col rounded-md bg-black/[0.96] antialiased">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
 
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-50 md:size-500"
        fill="#0FFF50"
      />
      <div className="px-6 md:pl-40 pt-15 md:max-w-[850px] max-sm:pt-35 max-sm:max-w-[450px] xl:max-w-[950px] flex flex-col gap-3 z-10">
        <div className="text-7xl lg:text-8 max-sm:text-4xl font-bold">
          Hey, I&apos;m <Cover>Peter</Cover>
        </div>
        <div className="text-4xl max-sm:text-3xl font-semibold text-zinc-400">
          Full Stack <em></em>
          <PointerHighlight
            rectangleClassName="leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10">Web Developer</span>
          </PointerHighlight>
        </div>

        <div className="mt-4 transition-transform duration-300 hover:scale-y-110">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="a"
            href="/Peter John N. Alado - CV.pdf"
            download="Peter John N. Alado - CV.pdf"
            onClick={handleCVButton}
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer px-16"
          >
            <span
                className="transition-all duration-300 ease-in-out"
                key={cvButton}
            >
              {cvButton}
            </span>
          </HoverBorderGradient>
        </div>

        <div className="mt-6 max-sm:text-md">
          I build modern web applications and ERP solutions that help businesses streamline operations, 
          automate workflows, and deliver exceptional user experiences. Passionate about creating scalable, 
          efficient, and user-focused software from concept to deployment.
        </div>

        <div className="mt-4">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-contain w-full rounded-t-xl"
          >
            <source src="/videos/erp-demo.mp4" type="video/mp4" />
          </video>
          <div className="h-full w-full bg-zinc-900 rounded-b-xl">
            <div className="px-3 py-5">
              <div className="flex gap-3 items-center">
                <FaCheckCircle className="text-zinc-600"/>
                <div className="text-xs text-zinc-600">FEATURED WORK</div>
              </div>
              <div className="mt-2 mb-4">
                <div className="text-lg font-bold mb-2">
                ERP Solutions That Streamline Business Operations

                </div>
                <p className="text-sm">
                  The video above showcases one of my ERPNext implementations, highlighting 
                  custom workflows, automation, and system integrations designed to help businesses 
                  manage inventory, sales, purchasing, accounting, and operations more efficiently—all from a single platform.
                </p>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <div className="text-sm transition-transform duration-300 hover:scale-x-99"><Link href="/projects">See My Projects →</Link></div>
                <div className  ="text-sm transition-transform duration-300 hover:scale-x-99"><a href="https://kokosolutions.vercel.app/" target="_blank">Visit my site →</a></div>
              </div>

            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
}
