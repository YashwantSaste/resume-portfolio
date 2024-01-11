import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { SlSocialLinkedin, SlSocialGoogle } from 'react-icons/sl'
import { BsDiscord } from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'
    className='hidden mdl:inline-flex items-center justify-evenly w-full py-6 gap-4'
    >
       <div>
        <p>Yashwant Saste</p>
        <p>Student@S.G.G.S.I.E.&T, Nanded</p>
        </div>
        <div className='flex flex-row gap-4'>
          <a href='https://github.com/YashwantSaste'>
          <TbBrandGithub size={30}
          className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300
          '
          />
          </a>
          <a href='https://www.linkedin.com/in/yashwant-saste-466b53239'>
          <SlSocialLinkedin size={30}
          className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300
          '
          /> 
          </a>
          <a href='malito:sasteyashwant01@gmail.com'>
          <SlSocialGoogle size={30}
          className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300
          '/> 
          </a>
          <a href='https://discord.com/channels/@me'>
          <BsDiscord size={30}
          
          className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300
          '/>
          </a>
          </div>

    </section>
  )
}

export default Footer