import React from 'react'
interface Title{
    title:string,
    titleNumber:number,
}
const SectionTitle = ({title,titleNumber}:Title) => {
  return (
    <h2 className='text-2xl font-titleFont font-semibold flex items-center'>
        <span className='text-base md:text-lg text-textGreen mr-2'>
            0{titleNumber}.
            {" "}
            {title}
        </span>
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-6'/>
    </h2>
  )
}

export default SectionTitle