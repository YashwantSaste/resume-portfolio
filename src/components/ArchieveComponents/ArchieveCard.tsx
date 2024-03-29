import React from 'react'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { FaGithub } from 'react-icons/fa'

interface Props{
    title:string,
    description:string,
    link :string,
    github:string,
    skills:Array<string>
}
const ArchieveCard = ({title,description,link,github,skills}:Props) => {
  return (
    <div className='cursor-pointer'>
        <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center
        gap-6 hover:translate-y-2 transition-transform duration-300 group
        '>
            <div className='flex justify-between items-center'>
            <a href={github} target='_blank'>
                <FaGithub className='text-4xl text-textGreen'/>
            </a>
            <a href={link} target='_blank'>
                <RxOpenInNewWindow className='text-4xl text-textGreen'  />
            </a>    
            </div>
            <div>
                <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>
                    {title}
                </h2>
                <p className='text-sm mt-3'>
                    {description}
                </p>
                
            </div>
            <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap'>
                
                    {
                        skills.map((skill)=>(
                            <li key={skill}>{skill}</li>
                        ))
                    }
                
            </ul>
        </div>
     
    </div>
  )
}

export default ArchieveCard