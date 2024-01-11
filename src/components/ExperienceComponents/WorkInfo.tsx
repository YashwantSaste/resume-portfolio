import React from 'react'
import { motion } from "framer-motion"
import { TiArrowForward } from 'react-icons/ti'
const WorkInfo = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            Member <span className='text-textGreen'>@S.W.A.G Developer&apos;s Club,Nanded</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
            September 2022-Present
        </p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward/>
                </span> 
                {" "}
                Contributed to the development of the official website for the S.W.A.G Developer&apos;s Club
                <a href='https://swagdev.vercel.app/'  target='_blank'
                >
                 <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                    Link
                    <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%]
                    group-hover:translate-x-0 transition-transform duration-500
                    '/>
                </span>
                </a>
               
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward/>
                </span> 
                {" "}
                Worked with fellow club members, shared ideas, and ensured good communication to 
                promote teamwork during the development process.
               
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward/>
                </span> 
                {" "}
                Actively participating in design, coding, and testing phases.
                
               
            </li>
        </ul>
    </motion.div>
  )
}

export default WorkInfo