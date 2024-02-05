import React from 'react'
import { motion } from "framer-motion"
import { skillsData } from '@/lib/skills-data'
import Image from 'next/image'

const Skills = () => {
  return (
    <section
    className='max-w-contentContainer hidden mx-auto py-10 xl:py-32 md:flex flex-col gap-4 items-center justify-center

    '
    >
        <motion.h2 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className='text-2xl font-titleFont font-semibold flex items-center'>
        <span className='text-base md:text-lg text-textGreen mr-2'>
           Technologies I Have worked with
        </span>
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-6'/>
        </motion.h2>
        <h2 className='font-titleFont text-5xl font-semibold'>
            My Skills
        </h2>
        <motion.div
        initial={{y:10, opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.8,delay:1.2}}
        className='flex flex-row justify-evenly flex-wrap mt-4 md:gap-14 mdl:gap-4 items-center cursor-pointer'>
            {
                skillsData.map((skill,index)=>(
                    <Image
                    key={index}
                    src={skill.Image}
                    alt='Skills'
                    width={skill.width}
                    height={skill.height}
                    className='hover:scale-110 transition-all duration-300'
                    />
                ))
            }
        </motion.div>
    </section>
  )
}

export default Skills