'use effect'
import React, { useState, useEffect} from 'react'

const formatTime = () => new Date().toLocaleDateString();

const Footer = () => {

    const [timeNow, setTimeNow] = useState<string>("");

    useEffect(() => {
        const initialId = window.setTimeout(() => setTimeNow(formatTime()), 0);
        const intervalId = window.setTimeout(() => setTimeNow(formatTime()), 1000);

        return () => {
            window.clearTimeout(initialId)
            window.clearTimeout(intervalId)
        }
    }, [])

  return (
    <footer className='mx-auto max-w-303 relative pb-12 md:pb-0 lg:pb-0 xl:pb-0 border-t bg-zinc-950 border-zinc-800 text-zinc-600'>

    </footer>
  )
}

export default Footer