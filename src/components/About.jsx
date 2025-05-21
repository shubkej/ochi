import React from 'react'

const About = () => {
    return (
        <div className='w-full bg-[#CDEA68] py-24'>
            <h1 className='text-[3.2vw] text-black  px-14 leading-[3vw] tracking-tighter'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

            <div className='w-full border-t-[1px] border-[#2f351b] pt-5 mt-20 text-black pl-10 pr-10 flex gap-10'>
                <div className='w-1/2'>
                    <h1 className='text-7xl'>Our Approach</h1>
                    <div className='pt-5'><button className='px-10 py-5  bg-zinc-800 rounded-full'>READ MORE</button></div>
                </div>

                <div className='w-1/2 h-[70vh]'>
                        <img className='w-full h-full rounded-3xl' src="https://images.unsplash.com/photo-1730577836014-0689bfc83670?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>

        </div>
    )
}

export default About
