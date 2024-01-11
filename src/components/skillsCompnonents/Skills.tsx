import React from 'react'
import SectionTitle from '../SectionTitle'
import { skillsData } from '@/lib/skills-data'
import Image from 'next/image'

const Skills = () => {
  return (
    <section
    className='max-w-contentContainer hidden mx-auto py-10 xl:py-32 md:flex flex-col gap-4 items-center justify-center

    '
    >
        <h2 className='text-2xl font-titleFont font-semibold flex items-center'>
        <span className='text-base md:text-lg text-textGreen mr-2'>
           Technologies I Have worked with
        </span>
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-6'/>
        </h2>
        <h2 className='font-titleFont text-5xl font-semibold'>
            My Skills
        </h2>
        <div className='flex flex-row justify-evenly flex-wrap mt-4 md:gap-14 mdl:gap-4 items-center'>
            {
                skillsData.map((skill)=>(
                    <Image
                    src={skill.Image}
                    alt='Skills'
                    width={skill.width}
                    height={skill.height}
                    className='hover:scale-110'
                    />
                ))
            }
        </div>
    </section>
  )
}

export default Skills