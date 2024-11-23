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
            Web Developer Intern <span className='text-textGreen'>@Catalysers Finovate LLP</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>
            June 2024 - August 2024
        </p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward/>
                </span> 
                {" "}
                Implemented protected routes in a Next.js application using 
                and Authorization, ensuring
                secure access to user data.                
               
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward/>
                </span> 
                {" "}
                Developed a multipage form for user management, enabling seamless creation, editing, and viewing of user details
                within the application.
               
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward/>
                </span> 
                {" "}
                Built dynamic tables to display and manage user data entered via forms, integrating with Firebase for real-time
data retrieval and updates.
               
            </li>
            <li className='text-base flex gap-2 text-textDark'>
                <span className='text-textGreen mt-1'>
                    <TiArrowForward/>
                </span>
                Enhanced skills in Firebase and Next.js, gaining hands-on experience with frontend development, authentication,
                and real-time data handling.
            </li>
        </ul>
    </motion.div>
  )
}

export default WorkInfo