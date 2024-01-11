import React from 'react'
import { FaRegFolder } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'

const ArchieveCard = () => {
  return (
    <a href='https://weather-application-yashwant-saste.netlify.app/' target='_blank'>
        <div className='w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center
        gap-6 hover:translate-y-2 transition-transform duration-300 group
        '>
            <div className='flex justify-between items-center'>
                <FaRegFolder className='text-4xl text-textGreen'/>
                <RxOpenInNewWindow className='text-4xl text-textGreen'  />
            </div>
            <div>
                <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>
                    Weather Application
                </h2>
                <p className='text-sm mt-3'>
                    A mini one page application built for the weather forecasting using plain HTML, CSS and Javascript
                    with the help of OpenWeather API
                </p>
                
            </div>
            <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap'>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li> API</li>
            </ul>
        </div>
    </a>
  )
}

export default ArchieveCard