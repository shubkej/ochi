import { motion } from 'framer-motion'
import React from 'react'


const Marquee = () => {
    motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 bg-[#004D43] rounded-3xl'>
        <div className='text border-t-[1px] border-b-[1px] border-zinc-300 flex whitespace-nowrap overflow-hidden gap-5 '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}} className='text-[20vw] leading-none font-semibold uppercase tracking-tighter'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}} className='text-[20vw] leading-none font-semibold uppercase tracking-tighter'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
