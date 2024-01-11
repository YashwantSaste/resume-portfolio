"use client"

import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { workExperience } from '@/lib/data'
import WorkInfo from './WorkInfo'

const Experience = () => {   
      
  return (
    <section id='experience'
    className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
        <SectionTitle title='My Work Experience' titleNumber={2}/>

        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>
                {
                    workExperience.map((work)=>(
                        <li className='border-l-2 border-l-textGreen bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer
                        duration-300 px-8 font-medium'
                        key={work.num}
                        >
                            {work.companyName}
                        </li>
                    ))
                }
            </ul>
            <WorkInfo/>
        </div>
    </section>
  )
}

export default Experience