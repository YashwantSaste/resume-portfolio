import React from 'react'
import SectionTitle from '../SectionTitle'
import { aboutTechnologies } from '@/lib/data'
import { AiFillThunderbolt } from 'react-icons/ai'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' 
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
        <SectionTitle title="About" titleNumber={1}/>

        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                In addition to my expertise in the MERN stack, I&apos;m actively enhancing my skills in Next.js 
                to stay at the forefront of web development trends. Beyond the basics, I also have knowledge
                 in other web technologies such as
                 {" "}
                    <span className='text-textGreen'>
                    Prisma, Redis, MySQL, tRPC
                    </span>{" "} , and a strong understanding of 
                    {" "}
                    <span className='text-textGreen'>
                    operating systems, database management systems (DBMS), and computer networks (CN)
                    </span>{" "} 
                  With this diverse skill set I am eager for taking on challenging projects and contributing to innovative solutions.
                </p>
                <p>
                With a year of practical experience under my belt, I&apos;m eager to apply my technical 
                prowess to real-world scenarios, solving problems creatively and making a meaningful
                 impact in the realm of web development. I thrive on staying updated with the latest technologies, 
                 ensuring that my solutions 
                are not only efficient but also at the cutting edge of industry standards.
                    
                </p>
                
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                    {
                        aboutTechnologies.map((tech)=>(
                            <li key={tech.id}
                            className='flex items-center gap-2'>
                                <span>
                                    <AiFillThunderbolt/>
                                </span>
                                {tech.skill}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-full lgl:w-1/3 h-80 relative group'>
                <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                    <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                        {/* Image  rounded-lg h-full object-cover*/}
                        <Image
                        src="/portfolio-pic.jpg"
                        alt='Profile'
                        width={949}
                        height={949}
                        className='rounded-lg h-full object-cover'
                        />
                        <div className='hidden lgl:inline-block absolute w-full h-80 bg-transparent rounded-md top-0 left-0
                            group-hover:bg-textGreen/20 duration-300'/>
                    </div>
                       
                    
                </div>  
                <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md
                            group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300
                        '/>
            </div>
        </div>

    </section>
  )
}

export default About