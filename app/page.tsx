import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div className="relative flex h-[40rem] overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
 
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="green"
      />
      <div className="absolute top-15 z-10 flex flex-col gap-3 items-center ">
        <div className="text-6xl font-bold">
          Hey, I'm 
        </div>

      </div>
      
    </div>
  );
}
