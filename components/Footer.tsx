'use client'
import React, { useState, useEffect } from 'react'
import { TextHoverEffect } from "@/components/ui/text-hover-effect";


const formatTime = () => new Date().toLocaleTimeString();

const Footer = () => {
    const [timeNow, setTimeNow] = useState<string>(formatTime());

    useEffect(() => {
        const intervalId = window.setInterval(() => setTimeNow(formatTime()), 1000);

        return () => window.clearInterval(intervalId);
    }, [])

    return (
      <>
        <footer className='overflow-hidden bg-zinc-950 border-t border-zinc-800 w-full'>
          <div className='flex flex-row max-sm:flex-col justify-between max-sm:items-center md:px-30 py-2'>
            <div className='w-[50%]'><TextHoverEffect text='PETER'/></div>
            <div className='flex items-center gap-8 text-lg font-semibold max-sm:flex-col'>
              <a href="/contact">Reach Out →</a>
              <div suppressHydrationWarning className='text-lg'>{timeNow}</div>
            </div>
          </div>

        </footer>
        {/* <footer className='fixed md:mx-30 bottom-0 mx-auto overflow-hidden bg-zinc-950 border-t border-zinc-800 px-4 md:pl-80 md:pr-80 max-sm:pb-20'>
          <div className='flex max-sm:flex-col justify-between'>
            <div className='h-60 ml-[-20] max-sm:w-full max-sm:h-40'><TextHoverEffect text='PETER'/></div>
            <div className='max-sm:relative inset-0 max-sm:inset-auto flex max-sm:flex-col justify-end max-sm:justify-center items-center pointer-events-none'>
                <div className='text-lg font-semibold pr-20 max-sm:pr-0 cursor-pointer pointer-events-auto'><a href="/contact">Reach Out →</a></div>
                <div className='text-lg pointer-events-auto'>{timeNow}</div>
            </div>
          </div>
        </footer> */}
      </>
    )
}

export default Footer