import React from 'react'
import { motion } from "framer-motion"
import { TiArrowForward } from 'react-icons/ti'
import { workExperience } from '@/lib/data'

//@ts-ignore

const WorkInfo = ({company}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
            {workExperience.find((item)=>item.companyName === company)} <span>@ReactBD</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
            
        </p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward/>
                </span> 
                {" "}
                
               
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward/>
                </span> 
                {" "}
               
               
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward/>
                </span> 
                {" "}
                
               
            </li>
        </ul>
    </motion.div>
  )
}

export default WorkInfo