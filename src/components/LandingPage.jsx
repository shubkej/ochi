import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>

            <div className="text-structure mt-52 px-20">
                {["We create", "eye-opening", "presentations"]
                    .map((item, idx) => (
                        <div className="masker">
                            <div className='w-fit flex items-end overflow-hidden'>
                                {idx === 1 && (
                                    <motion.div initial={{ width: 0 }} animate={{ width: "8vw" }} transition={{ ease: [0.76, 0, 0.24, 1] , duration:1 }} className='mr-[1vw] w-[8vw] rounded-md h-[5vw] relative bg-green-500'></motion.div>
                                )}
                                <h1 className='uppercase text-[7vw] leading-[6vw] font-semibold tracking-tighter'>{item}</h1>
                            </div>

                        </div> 
                    ))
                }
            </div>

            <div className=" border-t-[1px] border-white mt-40 flex justify-between items-center py-5 px-12">
                <p className='text-xl font-light'>For public and private companies</p>
                <p className='text-xl font-light'>For public and private companies</p>
                <div className="button-section flex gap-2 justify-center items-center">
                    <button className='text-xl font-light rounded-full border-white border-[1px] px-3 py-1'>START THE PROJECT</button>
                    <GoArrowUpRight className='text-white rounded-full border-white border-[1px] text-4xl border-soild' />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
