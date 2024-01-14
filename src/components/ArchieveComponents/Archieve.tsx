import React from 'react'
import ArchieveCard from './ArchieveCard'
import { archieveProjects } from '@/lib/project-data'

const Archieve = () => {
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h1 className='text-3xl font-titleFont font-semibold'>
                Other Noteworthy Projects
            </h1>
            <p className='text-sm font-titleFont text-textGreen'>
                View the Archieve
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-col. xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            {
                archieveProjects.map((project)=>{
                 return(
                    <ArchieveCard title={project.projectName} 
                    key={project.id}
                    github={project.githubLink}
                    description={project.description} link={project.projectLink} skills={project.skills}/>
                 )   
                })
            }
        </div>
    </div>
  )
}

export default Archieve